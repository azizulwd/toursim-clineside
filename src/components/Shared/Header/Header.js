import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const {user, logOut} = useFirebase();

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
                    <span>{user?.displayName}</span>
                    {user.email ? <button className="logout_btn" onClick={logOut}>Logout</button> : <Link className="login" to="/login">Login</Link>}                           
                </div>
            </div>
        </div>
    );
};

export default Header;