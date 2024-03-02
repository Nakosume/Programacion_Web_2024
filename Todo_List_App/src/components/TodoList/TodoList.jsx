import React, { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'

export function TodoList () {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      completed: true
    },
    {
      id: 2,
      text: 'Meeting at School',
      completed: false
    }
  ])

  const [text, setText] = useState('')

  function addTask (text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    }
    setTasks([...tasks, newTask])
    setText('')
  }

  /* useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Enter') {
        event.preventDefault()
        console.log('User pressed: ', event.key)

        // call submit function here
        addTask(text)
      }
    }

    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, []) */

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
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}

    </div>
  )
}
