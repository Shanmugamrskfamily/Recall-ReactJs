import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext'; 

function Navbar() {
    const { cartProducts } = useContext(CartContext);

    const cartQuantity = cartProducts.reduce((total, product) => total + product.quantity, 0);

    return (
        <nav className="bg-gray-800 py-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" className="text-white text-2xl font-bold">My Store</Link>
                <div className="relative">
                    <Link to="/cart" className="text-white mr-4 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M2 5a2 2 0 012-2h.586a1 1 0 01.707.293l.707.707h11.414l.707-.707a1 1 0 01.707-.293H18a2 2 0 012 2v1a1 1 0 01-1 1H3a1 1 0 01-1-1V5zm16 2v1H2V7h16zm-4 6a2 2 0 11-4 0 2 2 0 014 0zM6 13a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                        </svg>
                        {cartQuantity > 0 && <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">{cartQuantity}</span>}
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
