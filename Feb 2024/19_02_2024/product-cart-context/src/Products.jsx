import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './CartContext';


function Products() {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart, removeFromCart,cartProducts } = useContext(CartContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                setLoading(false); 
            } catch (error) {
                console.log(error);
                setLoading(false); 
            }
        }
        fetchProducts();
    }, []);

    const isInCart = (productId) => {
        return cartProducts && cartProducts.some(product => product.id === productId);
    }

    const handleCartAction = (product) => {
        if (isInCart(product.id)) {
            removeFromCart(product.id);
        } else {
            addToCart(product);
        }
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center my-8">Products List</h1>
            {loading ? ( 
                <div className="text-center">Loading...</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products&&products.map(product => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                                <p className="text-gray-700">Category: {product.category}</p>
                                <p className="text-gray-700">Price: ${product.price}</p>
                                <div className='text-center content-end'>
                                    <button 
                                        onClick={() => handleCartAction(product)}
                                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    >
                                        {isInCart(product.id) ? "Remove From Cart" : "Add To Cart"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Products;
