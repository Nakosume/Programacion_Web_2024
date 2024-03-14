export function TodoItem ({ task, deleteTask, toggleCompleted }) {
  function handleChange ({target}) {
    toggleCompleted(task.id, target.checked)
  }

  return (
    <div
      className='todo-item'
    >
      <input
        type='checkbox'
        checked={task.completed}
        onChange={handleChange}
      />
      <p>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>
        X
      </button>
    </div>
  )
}
