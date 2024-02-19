import { createContext, useState } from "react";

const CartContext=createContext();

const CartProvider=({children})=>{
    const [cartProducts,setCartProducts]=useState();
    
    const addToCart=(product)=>{
        setCartProducts(product);
    }

    const updateCart=(productId,quantity)=>{

    }

    const removeFromCart=(productId)=>{

    }
    return(
        <CartContext.Provider value={{setCartProducts,cartProducts,addToCart,updateCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider};