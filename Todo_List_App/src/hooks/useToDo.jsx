import { useState, useEffect } from 'react'
import { TASKS } from '../const/tasks'

const initTasks = JSON.parse(window.localStorage.getItem("tasks")) ?? TASKS

export function useToDo() {
    const [tasks, setTasks] = useState(initTasks)

    const [text, setText] = useState('')

    const [filter, setFilter] = useState('all')

    useEffect(() => {
        window.localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

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
            id: crypto.randomUUID(),
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

    function toggleCompleted(id, checked) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: checked }
            } else {
                return task
            }
        }))
    }

    return { tasks, text, setText, filter, setFilter, filteredTodos, handleSubmit, deleteTask, toggleCompleted }
}