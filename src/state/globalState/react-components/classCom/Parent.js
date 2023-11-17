import React, { Component } from 'react';
import A from './A';
import B from './B';

import { Provider } from 'react-redux';
import { store } from '../../redux/store';
class Parent extends Component {
  render() {
    return (
      <Provider store={store}>
        <A />
        <B />
      </Provider>
    );
  }
}

export default Parent;
