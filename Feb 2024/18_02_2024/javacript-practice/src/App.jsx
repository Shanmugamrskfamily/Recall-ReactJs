import React from 'react';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import PrintStar from './PrintStar';
import Count from './Count';
import ShapesWithEffects from './ShapesWithEffects';
import String from './String';
import MapandForEach from './MapandForEach';
import Factorial from './Factorial';
import PrimeNumbers from './PrimeNumbers';

function App() {
  

  return (
    <BrowserRouter>
    <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Print Star</Link></li>
            <li><Link to="/count">Count</Link></li>
            <li><Link to="/shapes">Shapes</Link></li>
            <li><Link to="/string">String</Link></li>
            <li><Link to="/map">Map and ForEach</Link></li>
            <li><Link to="/factor">Factorial</Link></li>
            <li><Link to="/prime">Prime Numbers</Link></li>
          </ul>
      </nav>
    <h1 style={{textAlign:'center'}}>Javascript and React Practicals</h1>
    <div style={{display:"flex",flexDirection:"column",flexWrap:"wrap", alignItems:"center"}}>
    <Routes>
      <Route path='/' element={<PrintStar/>}/>
      <Route path='/count' element={<Count/>} />
      <Route path='/shapes' element={<ShapesWithEffects/>}/>
      <Route path='/string' element={<String/>}/>
      <Route path='/map' element={<MapandForEach/>} />
      <Route path='/factor' element={<Factorial/>} />
      <Route path='/prime' element={<PrimeNumbers/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
