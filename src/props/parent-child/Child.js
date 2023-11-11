import React from 'react';

function Child(props) {
  console.log(props);
  return <div>Child: {props.name}</div>;
}

export default Child;
