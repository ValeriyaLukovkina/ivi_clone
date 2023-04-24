import { createSlice } from '@reduxjs/toolkit';
import { TGenre, TNavigation } from '../../type/type';

const MOCK_GENRES = [
  {
    id: 1,
    name: 'Комедия',
    englishName: 'comedy',
  },
  {
    id: 2,
    name: 'Артхаус',
    englishName: 'arthouse',
  },
  {
    id: 3,
    name: 'Биография',
    englishName: 'biography',
  },
  {
    id: 4,
    name: 'Боевики',
    englishName: 'boeviki',
  },
  {
    id: 5,
    name: 'Комедия',
    englishName: 'comedy',
  },
  {
    id: 6,
    name: 'Артхаус',
    englishName: 'arthouse',
  },
  {
    id: 7,
    name: 'Биография',
    englishName: 'biography',
  },
  {
    id: 8,
    name: 'Боевики',
    englishName: 'boeviki',
  },
  {
    id: 9,
    name: 'Комедия',
    englishName: 'comedy',
  },
  {
    id: 10,
    name: 'Артхаус',
    englishName: 'arthouse',
  },
  {
    id: 11,
    name: 'Биография',
    englishName: 'biography',
  },
  {
    id: 12,
    name: 'Боевики',
    englishName: 'boeviki',
  },
  {
    id: 13,
    name: 'Комедия',
    englishName: 'comedy',
  },
  {
    id: 14,
    name: 'Артхаус',
    englishName: 'arthouse',
  },
  {
    id: 15,
    name: 'Биография',
    englishName: 'biography',
  },
  {
    id: 16,
    name: 'Боевики',
    englishName: 'boeviki',
  },
  {
    id: 17,
    name: 'Комедия',
    englishName: 'comedy',
  },
  {
    id: 18,
    name: 'Артхаус',
    englishName: 'arthouse',
  },
  {
    id: 19,
    name: 'Биография',
    englishName: 'biography',
  },
  {
    id: 20,
    name: 'Боевики',
    englishName: 'boeviki',
  },
  {
    id: 21,
    name: 'Комедия',
    englishName: 'comedy',
  },
  {
    id: 22,
    name: 'Артхаус',
    englishName: 'arthouse',
  },
];

const MOCK_COUNTRY = [
  {
    id: 1,
    name: 'Комедия',
    englishName: 'comedy',
  },
  {
    id: 2,
    name: 'Артхаус',
    englishName: 'arthouse',
  },
  {
    id: 3,
    name: 'Биография',
    englishName: 'biography',
  },
  {
    id: 4,
    name: 'Боевики',
    englishName: 'boeviki',
  },
  {
    id: 5,
    name: 'Комедия',
    englishName: 'comedy',
  },
  {
    id: 6,
    name: 'Артхаус',
    englishName: 'arthouse',
  },
  {
    id: 7,
    name: 'Биография',
    englishName: 'biography',
  },
  {
    id: 8,
    name: 'Боевики',
    englishName: 'boeviki',
  },
  {
    id: 9,
    name: 'Комедия',
    englishName: 'comedy',
  },
  {
    id: 10,
    name: 'Артхаус',
    englishName: 'arthouse',
  },
  {
    id: 11,
    name: 'Биография',
    englishName: 'biography',
  },
  {
    id: 12,
    name: 'Боевики',
    englishName: 'boeviki',
  },
];

const MOCK_NAVIGATION_DESKTOP = [
  {
    href: '#',
    title: 'Мой Иви',
    isExpand: false,
  },
  {
    href: '#',
    title: 'Что нового',
    isExpand: false,
  },
  {
    href: '#',
    title: 'Фильмы',
    isExpand: true,
  },
  {
    href: '#',
    title: 'Сериалы',
    isExpand: true,
  },
  {
    href: '#',
    title: 'Мультфильмы',
    isExpand: true,
  },
];

const MOCK_NAVIGATION_LAPTOP = [
  {
    href: '#',
    title: 'Мой Иви',
    isExpand: false,
  },
  {
    href: '#',
    title: 'Каталог',
    isExpand: false,
  },
  {
    href: '#',
    title: 'Поиск',
    isExpand: false,
  },
  {
    href: '#',
    title: 'Профиль',
    isExpand: false,
  },
  {
    href: '#',
    title: 'Еще',
    isExpand: false,
  },
];

type TAppInitialState = {
  navigationDesktop: Array<TNavigation>;
  navigationTablet: Array<TNavigation>;
  genres: Array<TGenre>;
  countries: Array<TGenre>;
  years: Array<string>;
};

const appInitialState: TAppInitialState = {
  navigationDesktop: MOCK_NAVIGATION_DESKTOP,
  navigationTablet: MOCK_NAVIGATION_LAPTOP,
  genres: MOCK_GENRES,
  countries: MOCK_COUNTRY,
  years: [],
};

export const app = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {},
});

export default app.reducer;
