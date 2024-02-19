import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Products() {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                console.log('Response: ', response.data); //Data Showing correctly
                
                setProducts(response.data);

                console.log('Products: ',products); //Showing: []
                setLoading(false); 
            } catch (error) {
                console.log(error);
                setLoading(false); 
            }
            finally{
                console.log('Final Products: ',products);
            }
        }
        fetchProducts();
    }, [products]);

    console.log('Outside useEffect: ', products);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
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
                            <Slider {...settings}>
                                {product.images.map((image, index) => (
                                    <img key={index} src={image} alt={product.title} className="w-full h-48 object-cover" />
                                ))}
                            </Slider>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                                <p className="text-gray-700">{product.description}</p>
                                <p className="text-gray-700">Category: {product.category}</p>
                                <p className="text-gray-700">Price: {product.price}</p>
                                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add To Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Products;
