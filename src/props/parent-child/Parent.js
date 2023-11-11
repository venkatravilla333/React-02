import React from 'react';
import Child from './Child';

function Parent() {
  return (
    <div>
      <h2>Parent</h2>
      <Child name={'Sachin'} />
    </div>
  );
}

export default Parent;
