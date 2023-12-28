import React, { useState } from 'react'


var obj = {
  marginLeft: '470px',
  marginTop: '100px'
}
function Todo() {

  var [task, setTask] = useState('')
  var [todos, setTodos] = useState([])


  var updateState = (e) => {
    setTask(e.target.value)
    // console.log(task)
  }
  var handleSubmit = (e) => {
    e.preventDefault()
    setTask('')
    var allTodos = [...todos, task]
    setTodos(allTodos)
    console.log(allTodos)
  }

  var deleteHandler = (deletedindex) => {
    var todosAfterDelete = todos.filter((todo, index) => index !== deletedindex)
    setTodos(todosAfterDelete)
    console.log(todosAfterDelete)
  }
  return (
    <center>
      <h2>Todo App</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task}  onChange={updateState}/>
        <input type="submit" value='ADD' />
      </form>
      {
        todos.map((todo, index) => {
         return <div key={index}>
            <h2>{todo} <button onClick={()=>deleteHandler(index)}>Delete</button></h2>
          </div>
        })
      }
    </center>
  )
}

export default Todo