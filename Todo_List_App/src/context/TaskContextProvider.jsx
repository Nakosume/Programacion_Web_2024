/*
TODO: Change from funcitons to arrow functions
*/

import { useReducer, useState, useEffect } from 'react'
import { TaskContext } from './TaskContext'
import { TASK_ACTIONS } from '../const/tasksActions';
import {reducerTask} from '../reducers/TaskReducer'

//Reducer & functions


let initTasks = []
const lclStrg = JSON.parse(window.localStorage.getItem('tasks'))
if (lclStrg !== null) {
  initTasks = lclStrg
} else if (lclStrg === null) {
  initTasks = []
} else {
  alert('Something went wrong loading the tasks!')
}

export function TaskContextProvider({ children }) {

  const [tasks, dispatchTask] = useReducer(reducerTask, initTasks)

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

  const addTask = (text) => {
    const action = {
      type: TASK_ACTIONS.CREATE_TASK,
      payload: text
    }
    dispatchTask(action)
  }

  const handleSubmit = event => {
    event.preventDefault()
    addTask(text)
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  function deleteCompletedTask() {
    setTasks(tasks.filter(task => task.completed !== true))
  }

  function toggleCompleted(id, checked) {
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
