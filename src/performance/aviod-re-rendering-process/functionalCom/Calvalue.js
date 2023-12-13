import React, { useMemo, useState } from 'react'

function Calvalue() {
  var [normalCount, setNormalCount] = useState(0)
  var [factCount, setFactCount] = useState(5)
  var factvalue = useMemo(() => {
    return factorial(factCount);
  }, [factCount])

  // var factvalue = factorial(factCount)
  
  console.log('render')
  return (
    <div>
      <h2>Normal count: {normalCount}</h2>
      <button onClick={() => setNormalCount(normalCount + 1)}>increase normal count</button>
      <h2>Fact count {factvalue}</h2>
      <button onClick={()=>setFactCount(factCount+1)}>increase fact count number</button>
    </div>
  )
}

function factorial(n) {
  var factorialValue = 1
  console.log('factorial calculation')

  for (var i = n; i >= 1; i--){
    factorialValue = factorialValue*i
  }
  return factorialValue
}

export default React.memo (Calvalue)