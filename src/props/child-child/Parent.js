import React, { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

function Parent() {
  var [data, setData] = useState(100);
  function test(child1Data) {
    setData(child1Data);
  }

  console.log(data);

  return (
    <div>
      <h2>Parent component</h2>
      <Child1 test={test} />
      <Child2 data={data} />
    </div>
  );
}

export default Parent;
