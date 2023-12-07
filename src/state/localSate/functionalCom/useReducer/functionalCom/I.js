import React, { useContext } from 'react';
import { countContext } from './Parent';

function I() {
  var obj = useContext(countContext);
  return (
    <div>
      <h2>Count I: {obj.count}</h2>
    </div>
  );
}

export default I;
