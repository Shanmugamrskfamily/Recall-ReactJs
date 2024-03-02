import { createContext, useState } from "react";

const ButtonContext=createContext();

const ButtonProvider=({children})=>{
    const [count,setCount]=useState(0);

    const [status,setStatus]=useState('');

    const handleStatus=(data)=>{
        setStatus(data);
    }

    const increament=()=>{
        setCount(count+1);
    }

    const decreament=()=>{
        setCount(count-1);
    }

    return(
        <ButtonContext.Provider value={{count,increament,decreament, status, handleStatus}}>
            {children}
        </ButtonContext.Provider>
    )
}

export {ButtonContext,ButtonProvider};