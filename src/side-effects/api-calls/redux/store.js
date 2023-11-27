import { applyMiddleware, createStore } from 'redux';
import { postsReducer } from './posts/posts-reducer';
import thunk from 'redux-thunk';

export var store = createStore(postsReducer, applyMiddleware(thunk));
