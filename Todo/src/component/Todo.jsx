import React from 'react'
    const [task,setTask] =useState([])
const Todo = () => {
  return (
    <div>
        <h1>Todos</h1>
        <input type="text"
        value={task}
        placeholder='Enter the task'
        />
        <button>Add</button>
    </div>
  )
}

export default Todo