import React from 'react';

function Child(props) {
  if (props.age >= 30) {
    throw new Error('age limit crossed');
  }
  return (
    <div>
      <h3>age: {props.age}</h3>
    </div>
  );
}

export default Child;
