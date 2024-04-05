export function TodoItem ({ task, deleteTask, toggleCompleted }) {
  function handleChange ({ target }) {
    toggleCompleted(task.id, target.checked)
  }

  return (
    <div
      className='todo-item'
    >
      <input
        className='check'
        type='checkbox'
        checked={task.completed}
        onChange={handleChange}
      />
      {
        task.completed ? <p style={{ textDecorationLine: 'line-through', color: 'greenyellow' }}>{task.text}</p> : <p>{task.text}</p>
      }
      <button className='delete-button' onClick={() => deleteTask(task.id)}>
        X
      </button>
    </div>
  )
}
