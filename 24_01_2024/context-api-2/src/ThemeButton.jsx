import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';


function ThemeButton() {
    const {toggleTheme, theme}=useContext(ThemeContext);
  return (
    <div>
        <button onClick={toggleTheme}>
            Toogle Theme
        </button>
        <p>Current Theme: {theme}</p>
    </div>
  )
}

export default ThemeButton