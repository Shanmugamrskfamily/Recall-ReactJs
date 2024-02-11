import React from 'react'
import './App.css'
import { TodoProvider } from './TodoContext'
import TodoList from './TodoList'


function App() {
  

  return (
    <TodoProvider>
      <TodoList/>      
    </TodoProvider>
  )
}

export default App
