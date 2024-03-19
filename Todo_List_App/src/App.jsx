import { TodoTopBar, RenderTasks, TaskCounter, AcsiiArt } from './components'
import { useToDo } from './hooks/useToDo'

export function App () {
  const { tasks } = useToDo()
  // execute
  return (
    <div className='todo-list'>
      <TodoTopBar />
      {
        tasks.length > 0
          ? <RenderTasks />
          : <div className='no-task-text'><h2>Add tasks</h2><AcsiiArt /></div>
      }
      <TaskCounter />
    </div>
  )
}

export default App
