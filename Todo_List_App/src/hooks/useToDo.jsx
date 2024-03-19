import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

export function useToDo () {
  const context = useContext(TaskContext)

  if (!context) {
    throw new Error('This Component should be within TaskContextProvider')
  }
  return { ...context }
}
