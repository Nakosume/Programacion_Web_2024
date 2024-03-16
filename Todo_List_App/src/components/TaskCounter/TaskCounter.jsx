export function TaskCounter ({ tasks, deleteCompletedTask }) {
  const allTasks = tasks.length
  let compTasks = 0
  tasks.forEach((e) => {
    if (e.completed === true) {
      compTasks++
    }
  })

  return (
    <div className='task-counter'>
      <p>
        {compTasks} of {allTasks} Tasks Completed
      </p>
      <button className='delete-button' onClick={deleteCompletedTask}>Clear Completed</button>
    </div>
  )
}
