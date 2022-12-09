import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import DragonssData from '../components/DragonssData';
import Dragons from '../pages/Dragon';

describe('DragonssData', () => {
  it('DragonssData component is rendered correctly', () => {
    const dragon = render(
      <Provider store={store}>
        <DragonssData />
      </Provider>
    );
    expect(dragon).toMatchSnapshot();
  });

  it('Dragons component rendered correctly', () => {
    const dragons = render(
      <Provider store={store}>
        <Dragons />
      </Provider>
    );
    expect(dragons).toMatchSnapshot();
  });
});