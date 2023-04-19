import React, { useContext, useState } from 'react';
import "./SignUp.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');

    const {user, setUser, createUser} = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        setError("")
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;
        form.reset()
        if(password !== confirmPassword){
            setError("password didn't match")
            return;
        }
        else if(password.length <6){
            setError("password must be 6 characters or more");
            return;
        }

        createUser(email, password)
        .then(result => {
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error => {
            console.log(error.message)
            setError(error.message)
        })
        
    };

    return (
        <div className='form-container'>
            <h2 className='text-center mb-3'>Please SignUp</h2>
            <form onSubmit={handleSignUp} className='form'>
                <h4 className='mb-3'>SignUp</h4>
                {user && <h4>{user.email}</h4> }
                <label htmlFor="email">Email</label><br />
                <input type="email" className='mb-4' name='email' placeholder='Enter your Email' required /> <br />
                <label htmlFor="password">Password</label><br />
                <input type="password" className='mb-4' name='password' placeholder='Enter Your Password' required />
                <label htmlFor="password">Confirm Password</label><br />
                <input type="password" className='mb-5' name='confirm' placeholder='Enter confirm Password' required />

                <input type="submit"  value="Signup" />

                <p className='mt-2'>Have An account ? <Link to="/login">Please Login</Link></p>
                <p className='mt-2 text-danger'>{error}</p>
            </form>
        </div>
    );
};

export default SignUp;