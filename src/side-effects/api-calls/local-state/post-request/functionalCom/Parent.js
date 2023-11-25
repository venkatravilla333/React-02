import React, { useState } from 'react';

import axios from 'axios';

function Parent() {
  var [data, setData] = useState({ userId: '', title: '', body: '' });

  var changeUserid = (e) => {
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
    axios
      .post('https://jsonplaceholder.typicode.com/posts', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={sendData}>
        <input type='text' value={data.userId} onChange={changeUserid} />
        <input type='text' value={data.title} onChange={changeTitle} />
        <input type='text' value={data.body} onChange={changeBody} />
        <button type='submit'>submit</button>
      </form>
      <h2>{data.userId}</h2>
      <h2>{data.title}</h2>
      <h2>{data.body}</h2>
    </div>
  );
}

export default Parent;
