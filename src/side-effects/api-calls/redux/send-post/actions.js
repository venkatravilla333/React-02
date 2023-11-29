import axios from 'axios';
import {
  SEND_DATA_FAILURE,
  SEND_DATA_REQUEST,
  SEND_DATA_SUCCESS,
} from './action-types';

export var sendDataRequest = () => {
  return {
    type: SEND_DATA_REQUEST,
  };
};
export var sendDataSuccess = (data) => {
  return {
    type: SEND_DATA_SUCCESS,
    payload: data,
  };
};
export var sendDataFailure = (data) => {
  return {
    type: SEND_DATA_FAILURE,
    payload: data,
  };
};

export var sendPost = (data) => {
  return (dispatch) => {
    dispatch(sendDataRequest);
    axios
      .post('https://jsonplaceholder.typicode.com/posts', data)
      .then((res) => {
        console.log(res);
        dispatch(sendDataSuccess(res.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(sendDataFailure(error.message));
      });
  };
};
