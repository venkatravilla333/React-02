import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendPost } from '../redux/send-post/actions';

function I() {
  var [data, setData] = useState({ userId: '', title: '', body: '' });
  var dispatch = useDispatch();
  var resData = useSelector((state) => {
    return state.sendData;
  });

  var changeUserId = (e) => {
    setData((preValue) => ({
      ...preValue,
      userId: e.target.value,
    }));
  };
  var changeTitle = (e) => {
    setData((preValue) => ({
      ...preValue,
      title: e.target.value,
    }));
  };
  var changeBody = (e) => {
    setData((preValue) => ({
      ...preValue,
      body: e.target.value,
    }));
  };

  var sendData = (e) => {
    e.preventDefault();
    dispatch(sendPost(data));
  };

  return (
    <div>
      <form onSubmit={sendData}>
        <input type='text' value={data.userId} onChange={changeUserId} />
        <input type='text' value={data.title} onChange={changeTitle} />
        <input type='text' value={data.body} onChange={changeBody} />
        <button type='submit'>submit</button>
      </form>
      <h4>{resData.success.userId}</h4>
      <h4>{resData.success.title}</h4>
      <h4>{resData.success.body}</h4>
      <h4>{resData.error}</h4>
    </div>
  );
}

export default I;
