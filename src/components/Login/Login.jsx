import React, { useContext, useState } from 'react';
import "./Login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState("");

    const {signInUser, user, setUser} = useContext(AuthContext);
    
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleSignIn = (event) => {
        event.preventDefault();
        setError("");
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        signInUser(email, password)
        .then(result => {
            console.log(result.user)
            setUser(result.user)
            navigate(from, {replace: true})
        })
        .catch(error => {
            // console.log(error.message)
            setError(error.message)
        })
    }
    return (
        <div className='form-container'>
            <h2 className='text-center mb-3'>Please Login</h2>
            <form onSubmit={handleSignIn} className='form'>
                <h4 className='mb-3'>Login</h4>
                <label htmlFor="email">Email</label><br />
                <input type="email" className='mb-4' name='email' placeholder='Enter your Email' required /> <br />
                <label htmlFor="password">Password</label><br />
                <input type="password" className='mb-5' name='password' placeholder='Enter Your Password' required />

                <input type="submit"  value="Login" />

                <p className='mt-2'>New to Ema-john ? <Link to="/signup">Please Register</Link></p>
                <div className='d-flex'>
                <hr /> <span className='px-3'>or</span> <hr />
                </div>
            </form>
        </div>
    );
};

export default Login;