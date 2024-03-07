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

  // execute
  return (
    <div
      className='todo-list' style={{
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

// componente SearchBar
function SearchBar (props) {
  const { handleSub, text, set } = props
  return (
    <form
      onSubmit={handleSub}
      className='add-bar' style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      }}
    >
      <input
        value={text}
        onChange={e => set(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  )
}

// componente RenderTask
function RenderTasks (props) {
  const { list, deleteTask, toggleCompleted } = props
  return (
    <div>
      {list.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />))}
    </div>
  )
}

// componente RenderTask
function Filter (props) {
  const { id, name, filter, click, label } = props

  return (
    <div>
      <input type='radio' id={id} name={name} checked={filter === id} onClick={() => click(id)} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
