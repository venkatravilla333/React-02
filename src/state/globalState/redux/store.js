import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cakeReducer } from './cake/cakeReducer';
import { bookReducer } from './book/bookReducer';

import logger from 'redux-logger';

var rootReducer = combineReducers({
  cake: cakeReducer,
  book: bookReducer,
});

export var store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);
