import React, { useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useGetFilmsQuery } from '../../store/api/filmApi';
import { IFilm } from '../../type/TFilm';
import { sortList } from '../../utils/helperWithSort';
import CardFilm from '../cardFilm/cardFilm';
import style from './MoviesListBlock.module.scss';

type TMoviesListProps = {
  filmSort: Array<IFilm> | undefined;
};

const MoviesList: React.FC<TMoviesListProps> = ({ filmSort }) => {
  const filmsBlock = useMemo(() => {
    return filmSort?.map((film: IFilm) => {
      return (
        <li key={film.id} className={style.item}>
          <CardFilm
            name={film.name}
            poster={film.poster}
            year={film.year}
            country={'Страна'}
            genre={'Жанр'}
          />
        </li>
      );
    });
  }, [filmSort]);
  return (
    <div className={style.movies}>
      {filmsBlock ? (
        <ul className={style.list}>{filmsBlock}</ul>
      ) : (
        <p className={style.movies}>Фильмов не найдено</p>
      )}
    </div>
  );
};

export default MoviesList;
