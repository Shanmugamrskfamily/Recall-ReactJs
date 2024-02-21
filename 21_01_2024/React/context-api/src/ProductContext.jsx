import { createContext, useState } from "react";

const ProductContext=createContext();

const ProductProvider=({children})=>{

    const [status,setStatus]=useState([]);

    const statusUpdate=(data)=>{
        setStatus(data);
    }
    return(
        <ProductContext.Provider value={{statusUpdate,status}}>
            {children}
        </ProductContext.Provider>
    )
}

export {ProductContext, ProductProvider}