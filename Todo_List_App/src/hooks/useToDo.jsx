import { useState } from 'react'
import { TASKS } from '../const/tasks'

export function useToDo() {
    const [tasks, setTasks] = useState(TASKS)

    const [text, setText] = useState('')

    const [filter, setFilter] = useState('all')

    const filteredTodos = tasks.filter((todo) => {
        if (filter === 'all') return true
        if (filter === 'completed') return todo.completed
        if (filter === 'pending') return !todo.completed
        return true
    })

    function addTask(text) {
        if (text === '') {
            return
        }
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        }
        setTasks([...tasks, newTask])
        setText('')
    }

    const handleSubmit = event => {
        event.preventDefault()

        addTask(text)
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed }
            } else {
                return task
            }
        }))
    }

    return { tasks, text, setText, filter, setFilter, filteredTodos, handleSubmit, deleteTask, toggleCompleted }
}