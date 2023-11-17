import React, { useContext } from 'react';
import { numContext } from './Parent';

function E() {
  var { num } = useContext(numContext);
  return (
    <div>
      <h2>E: Num:{num} </h2>
    </div>
  );
}

export default E;
