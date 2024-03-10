import React, { useState } from 'react'
import { SearchBar, RenderTasks, Filter } from './components'
import { TASKS } from './const/tasks'

export function App () {
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

  // execute
  return (
    <div
      className='todo-list' style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <SearchBar handleSub={handleSubmit} text={text} set={setText} />
      <Filter id='all' name='show' filter={filter} click={setFilter} label='All' />
      <Filter id='completed' name='show' filter={filter} click={setFilter} label='Completed' />
      <Filter id='pending' name='show' filter={filter} click={setFilter} label='Pending' />
      <RenderTasks list={filteredTodos} deleteTask={deleteTask} toggleCompleted={toggleCompleted} />
    </div>
  )
}

export default App
