import { SearchBar, RenderTasks, Filter, TaskCounter } from './components'
import { useToDo } from './hooks/useToDo'

export function App () {
  const {tasks, text,setText,filter,setFilter,filteredTodos,handleSubmit,deleteTask,toggleCompleted}= useToDo()
  // execute
  return (
    <div
      className='todo-list'
    >
      <div className='top-bar'>
        <SearchBar handleSub={handleSubmit} text={text} set={setText} />
        <div className='filter-container'>
          <Filter id='all' name='show' filter={filter} click={setFilter} label='All' />
          <Filter id='completed' name='show' filter={filter} click={setFilter} label='Completed' />
          <Filter id='pending' name='show' filter={filter} click={setFilter} label='Pending' />
        </div>
      </div>
      <RenderTasks list={filteredTodos} deleteTask={deleteTask} toggleCompleted={toggleCompleted} />
      <TaskCounter tasks={tasks} />
    </div>
  )
}

export default App
