import React from 'react'
import './style.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TaskContextProvider } from './context/TaskContextProvider'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
)
