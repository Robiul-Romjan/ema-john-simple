import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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
    }, []);

   useEffect(()=> {
    const storedCart = getShoppingCart();
    // get id from local storage added products
    for(let id in storedCart){
        // console.log(id)
        // get the products by using id in local storage
        const savedCart = products.find(pd=> pd.id === id)
        // console.log(savedCart)
    }
   },[products])

    const addToCart = (product) => {
        let newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
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