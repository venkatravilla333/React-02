import React, { useContext } from 'react';
import {
  ageContext,
  dataContext,
  incomeContext,
  nameContext,
  numContext,
} from './Parent';

function J() {
  var name = useContext(nameContext);
  var age = useContext(ageContext);
  var income = useContext(incomeContext);
  var { num, setNum } = useContext(numContext);
  var posts = useContext(dataContext);
  return (
    <div>
      <h2>Com J: </h2>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Income: {income}</h2>
      <h2>J:Num: {num}</h2>
      <button onClick={() => setNum(num + 1)}>click me</button>
      <h2>Posts</h2>
      {posts.map((post) => {
        return <h6>{post.title}</h6>;
      })}
    </div>
  );
}

export default J;
