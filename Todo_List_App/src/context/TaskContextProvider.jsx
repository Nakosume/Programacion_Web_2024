import { useState, useEffect } from 'react'
import { TaskContext } from './TaskContext'

let initTasks = []
const lclStrg = JSON.parse(window.localStorage.getItem('tasks'))
if (lclStrg !== null) {
  initTasks = lclStrg
} else {
  alert('Something went wrong loading the tasks!')
}

export function TaskContextProvider ({ children }) {
  const [tasks, setTasks] = useState(initTasks)

  const [text, setText] = useState('')

  const [filter, setFilter] = useState('all')

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const filteredTodos = tasks.filter((todo) => {
    if (filter === 'all') return true
    if (filter === 'completed') return todo.completed
    if (filter === 'pending') return !todo.completed
    return true
  })

  function addTask (text) {
    if (text === '') {
      return alert('Please, give a name to your task before trying to add it')
    }
    const newTask = {
      id: crypto.randomUUID(),
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

  function deleteCompletedTask () {
    setTasks(tasks.filter(task => task.completed !== true))
  }

  function toggleCompleted (id, checked) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: checked }
      } else {
        return task
      }
    }))
  }

  return (
    <TaskContext.Provider value={{
      tasks,
      text,
      setText,
      filter,
      setFilter,
      filteredTodos,
      handleSubmit,
      deleteTask,
      toggleCompleted,
      deleteCompletedTask
    }}
    >
      {children}
    </TaskContext.Provider>
  )
}
