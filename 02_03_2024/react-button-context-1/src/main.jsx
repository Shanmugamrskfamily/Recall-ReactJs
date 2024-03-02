import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ButtonProvider } from './ButtonContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ButtonProvider>
    <App />
    </ButtonProvider>
  </React.StrictMode>,
)
