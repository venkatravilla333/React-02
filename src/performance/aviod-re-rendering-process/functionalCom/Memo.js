import React from 'react'

function Memo(props) {
  console.log('memo child render')
  return (
    <div>Memo component: </div>
  )
}

export default React.memo(Memo)