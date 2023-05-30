import { title } from 'process';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UILink from '../UI/Link/UILink';
import style from './WatchNavigation.module.scss';

type TWatchNavigationItemProps = {
  href: string;
  title: string;
  count: number | null;
  filmId: number;
  activeLink: string;
};

const WatchNavigationItem: React.FC<TWatchNavigationItemProps> = ({
  href,
  title,
  count,
  filmId,
  activeLink,
}) => {
  const navigate = useNavigate();
  const [link] = useState(`http://localhost:3003/watch/${filmId}/${href}`);
  return (
    <li className={`${style.item} ${activeLink === href && style.item_active}`}>
      <UILink href={`/watch/${filmId}/${href}`} title={title} addingClass={style.item_link} />
      <sup className={style.item_count}>{count}</sup>
    </li>
  );
};

export default WatchNavigationItem;
