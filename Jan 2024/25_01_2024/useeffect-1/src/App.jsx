import React from 'react'
import './App.css'
import UseEffect from './UseEffect'
import UseEffectFetch from './UseEffectFetch'

function App() {
  

  return (
    <div style={{display:'flex',flexDirection:'column',alignContent:'center', alignItems:'center'}}>
      <UseEffect/>
      <UseEffectFetch/>
    </div>
  )
}

export default App
