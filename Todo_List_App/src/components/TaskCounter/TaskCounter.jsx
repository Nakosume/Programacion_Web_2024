export function TaskCounter({ tasks }) {
    const allTasks = tasks.length;
    let compTasks = 0;
    tasks.forEach((e) => {
        if (e.completed === true) {
            compTasks++;
        }
    });

    return (
        <div>
            <p>
                {compTasks} of {allTasks} Tasks Completed
            </p>
        </div>
    );
}
