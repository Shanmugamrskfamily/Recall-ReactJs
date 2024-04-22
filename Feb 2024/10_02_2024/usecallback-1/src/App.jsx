import React, { useEffect } from 'react'
import './App.css'
import UseCallback from './UseCallback'

function App() {
  
  useEffect(()=>{
    console.log('Component Redered');
  },[]);

  return (
    <div>
      <h1>useCallback</h1>
      <UseCallback/>
    </div>
  )
}

export default App
