import React, { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { TASKS } from '../../const/tasks'

export function TodoList () {
  const [tasks, setTasks] = useState(TASKS)

  const [text, setText] = useState('')

  const [filter, setFilter] = useState('all')

  const filteredTodos = tasks.filter((todo) => {
    if (filter === 'all') return true
    if (filter === 'completed') return todo.completed
    if (filter === 'pending') return !todo.completed
    return true
  })

  function addTask (text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    }
    setTasks([...tasks, newTask])
    setText('')
  }

  const handleSubmit = event => {
    event.preventDefault()

    addTask(text)
  }

  function deleteTask (id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  function toggleCompleted (id) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      } else {
        return task
      }
    }))
  }

  return (
    <div
      className='todo-list' style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <form
        onSubmit={handleSubmit}
        className='add-bar' style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly'
        }}
      >
        <input
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
      <div>
        <input type='radio' id='all' name='show' checked onClick={() => setFilter('all')} />
        <label for='all'>All</label>
      </div>
      <div>
        <input type='radio' id='complete' name='show' onClick={() => setFilter('completed')} />
        <label for='complete'>Completed</label>
      </div>
      <div>
        <input type='radio' id='pending' name='show' onClick={() => setFilter('pending')} />
        <label for='pending'>Pending</label>
      </div>
      {filteredTodos.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />))}

    </div>
  )
}
