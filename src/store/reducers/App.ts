import { createSlice } from '@reduxjs/toolkit';
import {
  MOCK_COUNTRY,
  MOCK_GENRES,
  MOCK_NAVIGATION_DESKTOP,
  MOCK_NAVIGATION_LAPTOP,
  MOCK_TYPE_PERSONS,
  MOCK_YEARS,
} from '../../mockData/mockData';
import { TGenreCountriesYears, TNavigation, TPersons } from '../../type/type';

type TAppInitialState = {
  navigationDesktop: Array<TNavigation>;
  navigationTablet: Array<TNavigation>;
  genres: Array<TGenreCountriesYears>;
  countries: Array<TGenreCountriesYears>;
  years: Array<TGenreCountriesYears>;
  typePersons: Array<TPersons>;
};

const appInitialState: TAppInitialState = {
  navigationDesktop: MOCK_NAVIGATION_DESKTOP,
  navigationTablet: MOCK_NAVIGATION_LAPTOP,
  genres: MOCK_GENRES,
  countries: MOCK_COUNTRY,
  years: MOCK_YEARS,
  typePersons: MOCK_TYPE_PERSONS,
};

export const appReducer = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {
    // localStorage.setI
  },
});

export default appReducer.reducer;
