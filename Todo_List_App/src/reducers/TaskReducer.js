import { TASK_ACTIONS } from '../const/tasksActions'

export const reducerTask = (tasks, action) => {
  switch (action.type) {
    case TASK_ACTIONS.CREATE_TASK:{
      if (action.payload === '') {
        // eslint-disable-next-line no-undef
        return alert('Please, give a name to your task before trying to add it')
      }
      const newTask = {
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false
      }
      return [...tasks, newTask] }

    case TASK_ACTIONS.DELETE_TASK:{
      return tasks.filter((e) => e.id !== action.payload)
    }

    case TASK_ACTIONS.TOGGLE_TASK:{
      return tasks.map(task => {
        if (task.id === action.payload.id) {
          return { ...task, completed: action.payload.checked }
        } else {
          return task
        }
      })
    }

    case TASK_ACTIONS.COMPLETE_TASK:{
      return tasks.filter(task => task.completed !== true)
    }
    default:
      // eslint-disable-next-line no-undef
      alert('Reducer Switch Error')
      break
  }
}
