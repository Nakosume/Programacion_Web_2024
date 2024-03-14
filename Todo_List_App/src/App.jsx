import { TodoTopBar, RenderTasks, TaskCounter } from './components'
import { useToDo } from './hooks/useToDo'

export function App() {
  const { tasks, text, setText, filter, setFilter, filteredTodos, handleSubmit, deleteTask, toggleCompleted } = useToDo()
  // execute
  return (
    <div className='todo-list'>
      <TodoTopBar handleSubmit={handleSubmit} text={text} setText={setText} filter={filter} setFilter={setFilter} />
      {
        tasks.length > 0 ?
          <RenderTasks list={filteredTodos} deleteTask={deleteTask} toggleCompleted={toggleCompleted} />
          :
          <h2>Add tasks</h2>
      }
      <TaskCounter tasks={tasks} />
    </div>
  )
}

export default App
