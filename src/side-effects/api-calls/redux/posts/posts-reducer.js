import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from './posts-action-types';

var initialState = {
  loading: false,
  posts: [],
  error: '',
};

export var postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case FETCH_POSTS_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
      };
      break;
    case FETCH_POSTS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
      break;
    default:
      return state;
  }
};
