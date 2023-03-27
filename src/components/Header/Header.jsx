import React from 'react';
import './Header.css'
import headerImg from "../../images/Logo.svg"

const Header = () => {
    return (
        <div className='header'>
            <div className="header-content">
            <div>
                <img src={headerImg} alt="" />
            </div>
            <div className='header-item'>
              <a href="">Order</a>
              <a href="">Order Review</a>
              <a href="">Manage Inventory</a>
              <a href="">Login</a>
            </div>
            </div>
        </div>
    );
};

export default Header;