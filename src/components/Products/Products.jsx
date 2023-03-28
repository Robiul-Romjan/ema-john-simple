import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
               <Cart cart = {cart} />
            </div>
        </div>
    );
};

export default Products;