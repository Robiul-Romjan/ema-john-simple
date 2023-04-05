import React from 'react';
import "./OrderItem.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const OrderItem = ({ product, handleRemoveFromSingleProduct }) => {
    // console.log(product)
    const { img, name, price, shipping, id } = product;
    return (
        <div className='product-item'>
            <img src={img} alt="" />
            <div className="product-details">
                <h4>{name}</h4>
                <p>Price: $</p>
                <p>shipping</p>
            </div>
            <button onClick={()=> handleRemoveFromSingleProduct(id)} className='product-delete'> <FontAwesomeIcon icon={faTrashAlt} /> </button>
        </div>
    );
};

export default OrderItem;