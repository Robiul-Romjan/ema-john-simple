import React from 'react';
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({product, addToCart}) => {
    // console.log(addToCart)
    const {name, img, price, seller, ratings, id} = product;

   
    return (
        <div className='product'>
            <div className='product-img'>
              <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price} </p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings : {ratings} stars</p>
            </div>
                <button onClick={()=> addToCart(product)}>
                    Add To Cart
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;