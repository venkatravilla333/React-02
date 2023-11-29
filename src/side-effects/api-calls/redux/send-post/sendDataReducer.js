import {
  SEND_DATA_FAILURE,
  SEND_DATA_REQUEST,
  SEND_DATA_SUCCESS,
} from './action-types';

var initialState = {
  loading: false,
  success: '',
  error: '',
};

export var sendDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case SEND_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
      };
      break;
    case SEND_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      break;
    default:
      return state;
  }
};
