import React from 'react';

import { store } from '../redux/store';

import { Provider } from 'react-redux';
import A from './A';
import B from './B';
function Parent() {
  return (
    <Provider store={store}>
      <A />
      <B />
    </Provider>
  );
}

export default Parent;
