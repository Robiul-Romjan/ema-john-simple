import React from 'react';
import './Cart.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Cart = ({cart, handleAllDelete, children}) => {

    let totalPrice = 0;
    let shippingCharge = 0;
    let quantity = 0;
    for(let product of cart){
        if(product.quantity === 0){
            product.quantity = 1;
        }
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        shippingCharge = shippingCharge + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    };
    
    let tax = (totalPrice * 5) / 100;
    let grandTotal = totalPrice + shippingCharge + tax;

  
    return (
        <div className='cart'>
            <h2 className='order-title'>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice} </p>
            <p>Total Shipping Charge: ${shippingCharge} </p>
            <p>Tax: ${tax} </p> 
            <h4>Grand Total: ${grandTotal} </h4>

            <button onClick={handleAllDelete} className='clearAll-btn'>
                <span>Clear All</span>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {
                children
            }
        </div>
    );
};

export default Cart;