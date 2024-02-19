import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
    const { cartProducts, removeFromCart, updateCart } = useContext(CartContext);

    const handleQuantityChange = (productId, quantity) => {
        if (quantity < 1) {
            removeFromCart(productId);
        } else {
            updateCart(productId, quantity);
        }
    };

    const calculateSubtotal = (price, quantity) => {
        return price * quantity;
    };

    const calculateGrandTotal = () => {
        return cartProducts.reduce((total, product) => total + calculateSubtotal(product.price, product.quantity), 0);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center my-8">Shopping Cart</h1>
            <div className="grid grid-cols-1 gap-4">
                {cartProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                        <p className="text-gray-700">Price: ${product.price}</p>
                        <div className="flex items-center justify-between">
                            <div>
                                Quantity:
                                <button onClick={() => handleQuantityChange(product.id, product.quantity - 1)} className="mx-2 px-2 bg-gray-200">-</button>
                                {product.quantity}
                                <button onClick={() => handleQuantityChange(product.id, product.quantity + 1)} className="mx-2 px-2 bg-gray-200">+</button>
                            </div>
                            <button onClick={() => removeFromCart(product.id)} className="text-red-600">Remove</button>
                        </div>
                        <p className="text-gray-700">Subtotal: ${calculateSubtotal(product.price, product.quantity)}</p>
                    </div>
                ))}
            </div>
            <div className="text-xl font-semibold mt-4">Grand Total: ${calculateGrandTotal()}</div>
        </div>
    );
}

export default Cart;
