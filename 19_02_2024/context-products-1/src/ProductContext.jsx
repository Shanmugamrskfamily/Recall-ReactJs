import {createContext, useState } from "react";


const ProductContext=createContext();

const ProductsProvider=({Children})=>{

    const [cartProducts,setCartProducts]=useState();


    return(
        <ProductContext.Provider value={{cartProducts,setCartProducts}}>
            {Children}
        </ProductContext.Provider>
    )
}

export {ProductContext,ProductsProvider};