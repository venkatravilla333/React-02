import React, { useEffect, useRef, useState } from 'react';

function ReferValue() {
  var [timer, setTimer] = useState(0);
  var clearValue = useRef();

  useEffect(() => {
    clearValue.current = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => {
      clearInterval(clearValue.current);
    };
  });

  return (
    <div>
      <h3>Timer : {timer}</h3>
      <button onClick={() => clearInterval(clearValue.current)}>stop</button>
    </div>
  );
}

export default ReferValue;
