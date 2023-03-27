import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])

    const addToCart = (product) => {
        let newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='product-container'>
            <div className='products'>  
                {
                    products.map((product) => <Product product={product} addToCart={addToCart} key={product.id} />)
                }
            </div>
            <div className='order-summary'>
                <h2>Order Summary</h2>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Products;