import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Regular from './Regular'
import Memo from './Memo'

// function cb(){}

function Parent() {
  // var [name, setName] = useState('sachin')
  var [count, setCount] = useState(0)
  
  // function cb(){}

 var x= useCallback(() => {
   function cb() { }
   return cb
  }, [])
  // var obj = {}
  
  // var x = useMemo(() => {
  //   var obj = []
  //   return obj
  // }, [])
  

  // useEffect(() => {
  //   setInterval(() => {
  //   return  setName('sachin')
  //   }, 3000)
  // })

  console.log('fun parent render')
  return (
    <div>
      <h2>Parent com </h2>
      <button onClick={()=>setCount(count+1)}>click</button>
      {/* <Regular obj={obj} />
      <Memo obj={ obj} /> */}
      {/* <Regular x={{...x}} />
      <Memo x={{...x}} /> */}
      <Regular x={x} />
      <Memo x={x} />
    </div>
  )
}

export default Parent