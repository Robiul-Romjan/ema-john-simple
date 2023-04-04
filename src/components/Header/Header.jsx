import React from 'react';
import './Header.css'
import headerImg from "../../images/Logo.svg"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className="header-content">
            <div>
                <img src={headerImg} alt="" />
            </div>
            <div className='header-item'>
              <Link to="/">Shop</Link>
              <Link to="/order">Order</Link>
              <Link to="/inventory">Inventory</Link>
              <Link to="login">Login</Link>
            </div>
            </div>
        </div>
    );
};

export default Header;