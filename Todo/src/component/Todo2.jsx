import React, { useState, useEffect } from 'react'
import axios from 'axios'
const API = 'https://fullstack-training-backend-1.onrender.com'

const Todo2 = () => {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])
  const [editing, setEditing] = useState(null)

  const fetchTodo = async () => {
    const responce = await axios.get(`${API}/todo/`)
    setTodos(responce.data)
  }

  useEffect(() => {
    fetchTodo()
  }, [])

  const handleAddOrEdit = async (e) => {
    e.preventDefault()
    if (editing) {
      await axios.put(`${API}/todo/edit/${editing._id}`, { task })
      setEditing(null)
    } else {
      await axios.post(`${API}/todo/`, { task })
    }
    setTask('')
    fetchTodo()
  }

  const handleDelete = async (id) => {
    await axios.delete(`${API}/todo/delete/${id}`)
    fetchTodo()
  }

  // Toggle the status of a todo
  const handleToggleStatus = async (todo) => {
    await axios.put(`${API}/todo/edit/${todo._id}`, { task: todo.task, status: !todo.status })
    fetchTodo()
  }

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <form className="todo-form" onSubmit={handleAddOrEdit}>
        <input
          className="todo-input"
          type="text"
          value={task}
          placeholder="Enter the task"
          onChange={e => setTask(e.target.value)}
        />
        <button className="todo-btn" type="submit">{editing ? 'Update' : 'Add'}</button>
      </form>
      <ul className="todo-list">
        {todos.map(todo => (
          <li className="todo-item" key={todo._id}>
            <span
              onClick={() => handleToggleStatus(todo)}
              className="todo-task"
              style={{
                cursor: 'pointer',
                textDecoration: todo.status ? 'line-through' : 'none'
              }}
            >
              <p>{todo.task}</p>
            </span>
            <button className="todo-btn" onClick={() => {
              setEditing(todo)
              setTask(todo.task)
            }}>Edit</button>
            <button className="todo-btn delete" onClick={() => handleDelete(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo2