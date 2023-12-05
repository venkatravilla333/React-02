import React, { useState } from 'react';

function Parent() {
  var [y, setY] = useState(10);

  var x = 0;

  var setX = () => {
    x++;
    console.log(x);
  };
  return (
    <div>
      <button onClick={() => setX()}>update</button>
      <h3>X: {x}</h3>
      <button onClick={() => setY(y++)}>update</button>
      <h3>Y: {y}</h3>
    </div>
  );
}

export default Parent;
