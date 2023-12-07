import React, { useContext } from 'react';
import { countContext } from './Parent';

function J() {
  var obj = useContext(countContext);
  return (
    <div>
      <h2>Count J: {obj.count}</h2>
      <button onClick={() => obj.dispatch('increment')}>increment</button>
      <button onClick={() => obj.dispatch('decrement')}>decrement</button>
      <button onClick={() => obj.dispatch('reset')}>reset</button>
    </div>
  );
}

export default J;
