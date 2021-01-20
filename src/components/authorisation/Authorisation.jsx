import React from 'react';
import './login-form.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';

const LoginPage = () => {
    return (
        <div>
            <Header />
            <form className='authorisation'>
                <input className='login-input' type="email" placeholder='EMAIL'/>
                <input className='login-input' type="password" placeholder='PASSWORD'/>
                <input className='login-submit' type="submit" value='LOGIN'/>
            </form>
            <Footer />
        </div>
    )
}

export default LoginPage;
