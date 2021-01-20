import React from 'react';
import './header.css'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link className='header-link' to='/'>HOME</Link>
            <Link className='header-link' to='/top-places'>TOP PLACES</Link>
            <Link className='header-link' to='/about'>ABOUT PAGE</Link>
            <Link className='header-link' to='/log-in'>LOG IN</Link>
        </div>
    )
}

export default Header;
