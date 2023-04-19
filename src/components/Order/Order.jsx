import React, { useState } from 'react';
import "./Order.css"
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import OrderItem from '../OrderItem/OrderItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromSingleProduct = (id) => {
        const remainingProduct = cart.filter(product => product.id !== id)
        setCart(remainingProduct)
        removeFromDb(id);
    }

    const handleAllDelete = () => {
        deleteShoppingCart()
        setCart([])
    }

    return (
        <div className='product-container'>
            <div className='product-items'>
                {
                    cart.map(product => <OrderItem key={product.id} product={product} handleRemoveFromSingleProduct={handleRemoveFromSingleProduct} />)
                }
            </div>
            <div className='order-summary'>
                <Cart cart={cart} handleAllDelete={handleAllDelete}>
                    <button className='clearAll-btn'>
                        <Link to="/checkout">Proceed Checkout</Link>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default Order; 