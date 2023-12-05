import React, { useState } from 'react';
import Child from '../external/Child';

function Parent() {
  var [color, setColor] = useState(true);
  var toggle = () => {
    setColor(!color);
  };
  return (
    <div>
      <button onClick={toggle}>parent</button>
      <Child color={color} />
    </div>
  );
}

export default Parent;
