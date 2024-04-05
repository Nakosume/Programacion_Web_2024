// componente RenderTask
import { TodoItem } from '../index'
import { useToDo } from '../../hooks/useToDo'

export function RenderTasks () {
  const { filteredTodos, deleteTask, toggleCompleted } = useToDo()
  return (
    <div
      className='render-task'
    >
      {filteredTodos.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />))}
    </div>
  )
}
