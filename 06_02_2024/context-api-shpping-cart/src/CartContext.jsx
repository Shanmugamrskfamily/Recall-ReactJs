import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

const manageQuantity = (productId, operator) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        let newQuantity = item.quantity;
        if (operator === "+") {
          newQuantity = item.quantity + 1;
        } else if (operator === "-" && item.quantity > 1) {
          newQuantity = item.quantity - 1;
        } else if (operator === "-" && item.quantity === 1) {
          return null;
        }
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(Boolean);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, manageQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
