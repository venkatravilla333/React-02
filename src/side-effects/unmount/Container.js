import React, { useState } from 'react';
import Parent from '../unmount/functionalCom/Parent';

function Container() {
  var [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle button</button>
      {display && <Parent />}
    </div>
  );
}

export default Container;
