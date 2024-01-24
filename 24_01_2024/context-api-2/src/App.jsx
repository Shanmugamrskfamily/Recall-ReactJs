import React from 'react'
import { ThemeProvider } from './ThemeContext'
import Header from './Header'
import ThemeButton from './ThemeButton'
import './App.css'

function App() {


  return (
  <ThemeProvider>
    <div>
      <Header/>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <ThemeButton />
      </div>
    </div>
  </ThemeProvider>
  )
}

export default App
