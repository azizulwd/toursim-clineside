import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="container header_inner">
                <div className="logo">
                    <Link to="/home"><h1>TixGig</h1></Link>
                </div>
                <div className="navigate_menu">
                    <Link to="/home">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/booking">Booking</Link>
                    <Link to="/blog">Blog</Link>                
                    <Link className="login" to="/login">Login</Link>                
                    <Link className="order" to="/orders">My Order</Link>                
                </div>
            </div>
        </div>
    );
};

export default Header;