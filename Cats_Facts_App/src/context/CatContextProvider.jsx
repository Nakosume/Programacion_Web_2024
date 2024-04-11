/*
TODO: Change from funcitons to arrow functions
*/

import { useReducer, useState, useEffect } from 'react'
import { CatContext } from './CatContext'
import { CAT_ACTIONS } from '../const/CatActions'
import { reducerCat } from '../reducers/CatReducer'

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

export const CatContextProvider = ({ children }) => {
  const [tasks, dispatchTask] = useReducer(reducerCat, initTasks)

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
      type: CAT_ACTIONS.CREATE_CAT,
      payload: text
    }
    dispatchTask(action)
  }

  const deleteTask = (id) => {
    const action = {
      type: CAT_ACTIONS.DELETE_CAT,
      payload: id
    }
    dispatchTask(action)
  }

  const toggleCompleted = (id, checked) => {
    const action = {
      type: CAT_ACTIONS.TOGGLE_CAT,
      payload: {
        id,
        checked
      }
    }
    dispatchTask(action)
  }

  const deleteCompletedTask = () => {
    const action = {
      type: CAT_ACTIONS.COMPLETE_CAT,
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
    <CatContext.Provider value={{
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
    </CatContext.Provider>
  )
}
