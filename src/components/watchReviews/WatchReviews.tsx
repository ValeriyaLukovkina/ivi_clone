import { title } from 'process';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { number } from 'yup';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useGetOneFilmQuery } from '../../store/api/filmApi';
import { useGetOnePersonQuery } from '../../store/api/personApi';
import { IReviews } from '../../type/TReviews';
import PersonItem from '../personItem/PersonItem';
import UILink from '../UI/Link/UILink';
import Spinner from '../UI/spinner/Spinner';
import style from './WatchReviews.module.scss';
import WatchReviewItem from './WatchReviewItem';
import WatchPersonType from './WatchReviewItem';
import FormAddReview from '../formAddReview/FormAddReview';
import { TReviewUser } from '../../type/type';
import { reviewSlice, TTreeReviews } from '../../store/reducers/ReviewSlice';
import { makeTreeReviews } from '../../utils/helperWithReviews';

type TWatchReviewsProps = {
  filmId: number;
  reviews: Array<IReviews>;
};

const WatchReviews: React.FC<TWatchReviewsProps> = ({ filmId }) => {
  const { data: film, isLoading, isFetching, refetch } = useGetOneFilmQuery({ id: String(filmId) });
  const dispatch = useAppDispatch();
  const { setTreeReviews } = reviewSlice.actions;
  const { treeReviews } = useAppSelector((state) => state.reviewReducer);
  useEffect(() => {
    const treeReviews = makeTreeReviews(film?.reviews ?? []);
    debugger;
    dispatch(setTreeReviews({ treeReviews }));
  }, [film?.reviews, dispatch, setTreeReviews]);
  const reviewsBlock = useMemo((): ReactNode => {
    const qqq = (treeReviews: Array<TTreeReviews>) => {
      return treeReviews.map((treeReview: TTreeReviews) => {
        return (
          <div className={style.reviewsBlock} key={treeReview.review.id}>
            <WatchReviewItem
              key={treeReview.review.id}
              filmId={filmId}
              reviewId={treeReview.review.id}
              titleReview={treeReview.review.title}
              textReview={treeReview.review.text}
              rating={treeReview.review.rating}
              refetchFilms={refetch}
              isFetching={isFetching}
            />
            {treeReview.childrenReviews && qqq(treeReview.childrenReviews)}
          </div>
        );
      });
    };
    return qqq(treeReviews);
  }, [filmId, treeReviews, refetch, isFetching]);
  if (isLoading) {
    return (
      <div className="spinner">
        <Spinner size={'big'} />
      </div>
    );
  }
  return (
    <div className={style.content}>
      <div className={style.formBlock}>
        <FormAddReview
          filmId={filmId}
          forWhat="film"
          refetchFilms={refetch}
          isFetching={isFetching}
        />
      </div>
      {/* {isFetching && (
        <div>
          <Spinner size={'small'} />
        </div>
      )} */}
      <div>{reviewsBlock}</div>
    </div>
  );
};

export default WatchReviews;
