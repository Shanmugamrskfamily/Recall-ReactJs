import React, { useEffect, useState } from 'react';


function UseEffectFetch() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`HTTP Request Problem ${response.status}`);
        }
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="product-container">
      {productData.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-details">
            <p className="product-title">{product.title}</p>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UseEffectFetch;
