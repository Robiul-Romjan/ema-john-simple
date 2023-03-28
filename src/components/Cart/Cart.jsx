import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    let totalPrice = 0;
    let shippingCharge = 0;
    for(let product of props.cart){
        totalPrice = totalPrice + product.price;
        shippingCharge = shippingCharge + product.shipping;
    };
    
    let tax = (totalPrice * 5) / 100;
    let grandTotal = totalPrice + shippingCharge + tax;
  
    return (
        <div className='cart'>
            <h2 className='order-title'>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice} </p>
            <p>Total Shipping Charge: ${shippingCharge} </p>
            <p>Tax: ${tax} </p>
            <h4>Grand Total: ${grandTotal} </h4>
        </div>
    );
};

export default Cart;