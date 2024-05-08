import React from 'react'
import './style.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GifContextProvider } from './context/GifContextProvider'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <GifContextProvider>
      <App />
    </GifContextProvider>
  </React.StrictMode>
)
