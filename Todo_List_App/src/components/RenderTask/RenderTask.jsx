// componente RenderTask
import { TodoItem } from '../index'

export function RenderTasks (props) {
  const { list, deleteTask, toggleCompleted } = props
  return (
    <div
      className='render-task'
    >
      {list.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />))}
    </div>
  )
}
