import React from 'react'
import {Route, Router, Routes, BrowserRouter} from 'react-router-dom'
import './App.css'
import PrintStar from './PrintStar'
import Count from './Count'
import ShapesWithEffects from './ShapesWithEffects'
import String from './String'

function App() {
  

  return (
    <BrowserRouter>
    <h1 style={{textAlign:'center'}}>Javascript and React Practicals</h1>
    <div style={{display:"flex",flexDirection:"column",flexWrap:"wrap", alignItems:"center"}}>
    <Routes>
      <Route path='/' element={<PrintStar/>}/>
      <Route path='/count' element={<Count/>} />
      <Route path='/shapes' element={<ShapesWithEffects/>}/>
      <Route path='/string' element={<String/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
