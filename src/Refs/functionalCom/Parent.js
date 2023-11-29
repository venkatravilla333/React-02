import React, { useReducer, useRef, useState } from 'react';

function Parent() {
  var normalValue = 0;
  var [stateValue, setStateValue] = useState(0);

  var refValue = useRef(0);

  // var increaseNormalValue = () => {
  //   normalValue++;
  //   console.log('normal', normalValue);
  // };

  // var increaseStateValue = () => {
  //   setStateValue(stateValue + 1);
  //   console.log('state value', stateValue);
  // };

  // var increaseRefValue = () => {
  //   refValue.current++;
  //   console.log('ref value', refValue.current);
  // };

  var increseValue = () => {
    setStateValue(stateValue + 1);
    normalValue++;
    refValue.current++;

    console.log('state value', stateValue);
    console.log('normal value', normalValue);
    console.log('ref value', refValue.current);
  };

  console.log('render');
  return (
    <div>
      <h3>Normal variable: {normalValue}</h3>
      {/* <button onClick={increaseNormalValue}>increase Normal variable</button> */}
      <h3>State variable: {stateValue}</h3>
      {/* <button onClick={increaseStateValue}>increase state variable</button> */}
      <h3>Ref variable: {refValue.current}</h3>
      {/* <button onClick={increaseRefValue}>increase ref variable</button> */}

      <button onClick={increseValue}>increase value</button>
    </div>
  );
}

export default Parent;
