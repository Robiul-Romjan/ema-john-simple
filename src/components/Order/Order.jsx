import React, { useState } from 'react';
import "./Order.css"
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import OrderItem from '../OrderItem/OrderItem';
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromSingleProduct = (id) => {
        const remainingProduct = cart.filter(product=> product.id !== id)
        setCart(remainingProduct)
        removeFromDb(id);
    }

    return (
        <div className='product-container'>
            <div className='product-items'>
                {
                    cart.map(product => <OrderItem key={product.id} product={product} handleRemoveFromSingleProduct={handleRemoveFromSingleProduct} />)
                }
            </div>
            <div className='order-summary'>
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Order; 