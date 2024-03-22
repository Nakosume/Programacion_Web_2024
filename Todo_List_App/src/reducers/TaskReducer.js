import { TASK_ACTIONS } from "../const/tasksActions"

export const reducerTask = (tasks, action) => {
    switch (action.type) {
      case TASK_ACTIONS.CREATE_TASK:
        if (action.payload === '') {
          return alert('Please, give a name to your task before trying to add it')
        }
        const newTask = {
          id: crypto.randomUUID(),
          text: action.payload,
          completed: false
        }
        return [...tasks, newTask]

      default:
        alert("Reducer Switch Error")
        break;
    }
  }