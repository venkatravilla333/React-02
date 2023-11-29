import { applyMiddleware, combineReducers, createStore } from 'redux';
import { postsReducer } from './posts/posts-reducer';
import thunk from 'redux-thunk';
import { sendDataReducer } from './send-post/sendDataReducer';

var rootReducer = combineReducers({
  posts: postsReducer,
  sendData: sendDataReducer,
});

export var store = createStore(rootReducer, applyMiddleware(thunk));
