import React from 'react';
import Child from './Child';

function Parent() {
  function test(x) {
    console.log(x);
    // console.log('tested');
  }
  return (
    <div>
      <h3>Parent component</h3>
      <Child test={test} />
    </div>
  );
}

export default Parent;
