import { useContext,createContext,useState } from "react";

const ThemeContext=createContext();

const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState('light');
    const toggleTheme=()=>{
        setTheme((d)=>(d==='light'?'dark':'light'));
    }
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}


export {ThemeProvider, ThemeContext}