import React from 'react'
import './style.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CatContextProvider } from './context/CatContextProvider'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <CatContextProvider>
      <App />
    </CatContextProvider>
  </React.StrictMode>
)
