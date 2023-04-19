import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // get id from local storage
        for (let id in storedCart) {
            // get product by using id 
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                // get quantity set by id
                const quantity = storedCart[id];
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            };
            // console.log(savedCart)
        };
        setCart(savedCart)
    }, [products]);


    const addToCart = (product) => {
        let newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    };

    const handleAllDelete = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='product-container'>
            <div className='products'>
                {
                    products.map((product) => <Product product={product} addToCart={addToCart} key={product.id} />)
                }
            </div>
            <div className='order-summary'>
                <Cart cart={cart} handleAllDelete={handleAllDelete}>
                    <button className='clearAll-btn'>
                        <Link to="/order">Review Order</Link>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default Products;