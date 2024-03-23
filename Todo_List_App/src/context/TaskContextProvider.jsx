/*
TODO: Change from funcitons to arrow functions
*/

import { useReducer, useState, useEffect } from 'react'
import { TaskContext } from './TaskContext'
import { TASK_ACTIONS } from '../const/tasksActions'
import { reducerTask } from '../reducers/TaskReducer'

// Reducer & functions

let initTasks = []
const lclStrg = JSON.parse(window.localStorage.getItem('tasks'))
if (lclStrg !== null) {
  initTasks = lclStrg
} else if (lclStrg === null) {
  initTasks = []
} else {
  // eslint-disable-next-line no-undef
  alert('Something went wrong loading the tasks!')
}

export const TaskContextProvider = ({ children }) => {
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

  const deleteTask = (id) => {
    const action = {
      type: TASK_ACTIONS.DELETE_TASK,
      payload: id
    }
    dispatchTask(action)
  }

  const toggleCompleted = (id, checked) => {
    const action = {
      type: TASK_ACTIONS.TOGGLE_TASK,
      payload: {
        id,
        checked
      }
    }
    dispatchTask(action)
  }

  const deleteCompletedTask = () => {
    const action = {
      type: TASK_ACTIONS.COMPLETE_TASK,
      payload: null
    }
    dispatchTask(action)
  }

  const handleSubmit = event => {
    event.preventDefault()
    addTask(text)
    setText('')
  }

  /* function deleteCompletedTask () {
    setTasks(tasks.filter(task => task.completed !== true))
  } */

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
