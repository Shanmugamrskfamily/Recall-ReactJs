import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const addToCart = (product) => {
        const existingProductIndex = cartProducts.findIndex((cartProduct) => cartProduct.id === product.id);

        if (existingProductIndex !== -1) {
            const updatedCartProducts = [...cartProducts];
            updatedCartProducts[existingProductIndex].quantity++;
            setCartProducts(updatedCartProducts);
        } else {
            setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        const updatedCartProducts = cartProducts.filter((product) => product.id !== productId);
        setCartProducts(updatedCartProducts);
    };

    const updateCart = (productId, quantity) => {
        if (quantity < 1) {
            removeFromCart(productId);
        } else {
            const updatedCartProducts = cartProducts.map((product) =>
                product.id === productId ? { ...product, quantity } : product
            );
            setCartProducts(updatedCartProducts);
        }
    };

    return (
        <CartContext.Provider value={{ cartProducts, addToCart, removeFromCart, updateCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
