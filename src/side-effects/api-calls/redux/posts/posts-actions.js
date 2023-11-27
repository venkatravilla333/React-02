import axios from 'axios';

import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from './posts-action-types';

var fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};
var fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};
var fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

//api calls

export var fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest);
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        var posts = res.data;
        dispatch(fetchPostsSuccess(posts));
      })
      .catch((error) => {
        var errMsg = error.message;
        dispatch(fetchPostsFailure(errMsg));
      });
  };
};
