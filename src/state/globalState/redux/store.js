import { createStore } from 'redux';
import { cakeReducer } from './cake/cakeReducer';

export var store = createStore(cakeReducer);
