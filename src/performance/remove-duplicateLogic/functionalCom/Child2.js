import React, { useState } from 'react'
import useCount from './useCount'

function Child2() {
  //  var [count, setCount] = useState(0);

  //  var increaseCount = () => {
  //    setCount(count + 1);
  //  };
 var [count, increaseCount]= useCount()
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onMouseOver={increaseCount}>increase</button>
    </div>
  )
}

export default Child2