import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart, manageQuantity, removeFromCart } = useContext(CartContext);

  const handleQuantityChange = (productId, operator) => {
    manageQuantity(productId, operator);
  };

  const handleRemoveFromCart = (productId) => {
    const itemToRemove = cart.find(item => item.id === productId);
    const confirm=window.confirm(`Are you sure you want to remove ${itemToRemove.name} from your cart?`);
    if(confirm){
    removeFromCart(productId);
    }
    return;
  };
  
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b border-gray-300 py-2">
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="bg-blue-500 text-white py-1 px-2 rounded-full mr-2 hover:bg-blue-600"
                    onClick={() => handleQuantityChange(item.id, "+")}
                  >
                    +
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-2 rounded-full mr-2 hover:bg-red-600"
                    onClick={() => handleQuantityChange(item.id, "-")}
                  >
                    -
                  </button>
                  <button
                    className="bg-gray-500 text-white py-1 px-2 rounded-full hover:bg-gray-600"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <p className="text-gray-800 font-bold">
                ₹{(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-xl font-bold">Total: ₹{calculateTotal().toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
