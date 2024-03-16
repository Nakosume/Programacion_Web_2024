import { TodoTopBar, RenderTasks, TaskCounter, AcsiiArt } from './components'
import { useToDo } from './hooks/useToDo'

export function App () {
  const { tasks, text, setText, filter, setFilter, filteredTodos, handleSubmit, deleteTask, toggleCompleted, deleteCompletedTask } = useToDo()
  // execute
  return (
    <div className='todo-list'>
      <TodoTopBar handleSubmit={handleSubmit} text={text} setText={setText} filter={filter} setFilter={setFilter} />
      {
        tasks.length > 0
          ? <RenderTasks list={filteredTodos} deleteTask={deleteTask} toggleCompleted={toggleCompleted} />
          : <div className='no-task-text'><h2>Add tasks</h2><AcsiiArt /></div>
      }
      <TaskCounter tasks={tasks} deleteCompletedTask={deleteCompletedTask} />
    </div>
  )
}

export default App
