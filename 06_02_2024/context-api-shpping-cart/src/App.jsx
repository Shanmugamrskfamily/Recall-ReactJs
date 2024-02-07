import React, { useEffect, useState } from "react";
import { CartProvider, CartContext } from "./CartContext";
import ProductList from "./ProductList";
import Cart from "./Cart";

const App = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

const AppContent = () => {
  const { cart } = React.useContext(CartContext);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (cart && cart.length > 0) {
      const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(totalCount);
    } else {
      setCartCount(0);
    }
  }, [cart]); 

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white py-4 flex justify-between">
        <h1 className="text-2xl font-bold text-center">Shopping Cart App</h1>
        <span className="mr-5"><i className="fa-solid fa-cart-shopping"></i> ({cartCount})</span>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProductList />
          <Cart />
        </div>
      </main>
    </div>
  );  
};

export default App;
