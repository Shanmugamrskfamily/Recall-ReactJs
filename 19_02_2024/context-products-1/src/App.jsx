import React from 'react'
import './App.css'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Products from './Products'
import Cart from './Cart'

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Router>
        <Route path='/' element={<Products/>}/>
        <Route path='/' element={<Cart/>}/>
      </Router>
      </BrowserRouter>

    </div>
  )
}

export default App
