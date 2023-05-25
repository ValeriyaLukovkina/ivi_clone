
import 'whatwg-fetch';
import React from 'react';
import renderer from 'react-test-renderer';
import Main from './Main';
import { Provider } from 'react-redux';
import { store } from '../../store/mainStore';
import { URL } from '../../service/constans';
import fetchMock from 'jest-fetch-mock';
import { useTranslation } from 'react-i18next';
jest.mock('react-i18next', () => ({
  useTranslation: jest.fn()
}));

describe('Тестим главную страницу', () => {
  beforeEach(() => {
    (useTranslation as jest.Mock).mockReturnValue({ t: (key: string) => key });
  });

  it('Главная страница рендерится без ошибок', () => {
    jest.spyOn(Storage.prototype, 'getItem');
    localStorage.getItem = jest.fn();

    const tree = renderer.create(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    expect(tree).toMatchInlineSnapshot(`
    <div>
      <div
        className="{spinnerStyle.spinner} undefined"
      >
        <i
          className="undefined undefined"
        />
      </div>
    </div>
  `);
  });
})
