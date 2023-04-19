import React, { useContext } from 'react';
import './Header.css'
import headerImg from "../../images/Logo.svg"
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut =()=> {
        logOut()
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

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
                    <Link to="/login">Login</Link>
                    <Link to="/signup">SignUp</Link>
                    {user ?
                        <div className='text-white'>
                            <span className='mt-3'>{user?.email}</span>
                            <button onClick={handleLogOut} className='ms-2 btn btn-primary'>SignOut</button>
                        </div>
                        : ""}
                </div>
            </div>
        </div>
    );
};

export default Header;