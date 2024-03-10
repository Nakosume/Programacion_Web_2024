export function TodoItem ({ task, deleteTask, toggleCompleted }) {
  function handleChange () {
    toggleCompleted(task.id)
  }

  return (
    <div
      className='todo-item' style={{
        backgroundColor: 'green',
        marginTop: '1vh',
        paddingTop: '2%',
        paddingBottom: '2%',
        paddingLeft: '15%',
        paddingRight: '15%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
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
