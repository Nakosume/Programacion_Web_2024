import { CAT_ACTIONS } from '../const/CatActions'

export const reducerCat = (tasks, action) => {
  switch (action.type) {
    case CAT_ACTIONS.CREATE_CAT:{
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

    case CAT_ACTIONS.DELETE_CAT:{
      return tasks.filter((e) => e.id !== action.payload)
    }

    case CAT_ACTIONS.TOGGLE_CAT:{
      return tasks.map(task => {
        if (task.id === action.payload.id) {
          return { ...task, completed: action.payload.checked }
        } else {
          return task
        }
      })
    }

    case CAT_ACTIONS.COMPLETE_CAT:{
      return tasks.filter(task => task.completed !== true)
    }
    default:
      // eslint-disable-next-line no-undef
      alert('Reducer Switch Error')
      break
  }
}
