import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      price: 10,
      offer: "Buy one get one free",
      quantity: 0 
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      price: 15,
      offer: "25% off",
      quantity: 0
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of Product 3",
      price: 20,
      offer: "Limited time offer",
      quantity: 0
    }
  ];

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    alert("Product added to cart!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded shadow p-4">
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-gray-800 font-bold mb-2">${product.price}</p>
            <p className="text-green-500 mb-4">{product.offer}</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
