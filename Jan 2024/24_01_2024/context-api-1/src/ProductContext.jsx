import { createContext,useState } from "react";
const ProductContext=createContext();

const ProductProvider=({children})=>{
    const [status,setStatus]=useState('');
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [mobile,setMobile]=useState('');
    return (
        <ProductContext.Provider value={{status,setStatus, name,setName,age,setAge,mobile,setMobile}}>
            {children}
        </ProductContext.Provider>
    );
}

export {ProductProvider, ProductContext};