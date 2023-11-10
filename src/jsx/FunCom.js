import React from 'react';

function FunCom() {
  // return (
  // <div>
  //   <h1>This is JSX</h1>
  //   <h1>This is JSX</h1>
  // </div>
  // [<h1>This is JSX</h1>, <h1>This is JSX</h1>]
  // <React.Fragment>
  // <h1>This is JSX</h1>
  // <p>This is JSX</p>
  // </React.Fragment>
  // );
  //without JSX
  // return React.createElement(
  //   'div',
  //   null,
  //   React.createElement('h1', null, 'With out JSX')
  // );
  // var x = 10;
  // var x = 'Hari';
  // var x = [1, 2, 3];
  // var x = { name: 'Sachin' };
  // var x = () => {
  //   return 100;
  // };
  // var x = undefined;
  // var x = null;
  var x = true;

  return (
    <div>
      <h1>This is JSX</h1>
      <h2>{x}</h2>
    </div>
  );
}

export default FunCom;
