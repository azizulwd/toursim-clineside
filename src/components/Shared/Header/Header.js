import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();

    return (
        <div className="header">
            <div className="container header_inner">
                <div className="logo">
                    <Link to="/home"><h1>TixGig</h1></Link>
                </div>
                <div className="navigate_menu">
                    <Link to="/home">Home</Link>             
                    {user?.displayName ? <div> <Link className="order" to="/order">My Order</Link>
                    <Link className="manage_order" to="/manageorder">Manage Order</Link>
                    <Link className="add_new_service" to="/addservice">Add New Service</Link>
                    <span>{user?.displayName}</span>
                    <button className="logout_btn" onClick={logOut}>Logout</button>
                    </div> : <Link className="login" to="/login">Login</Link>}                           
                </div>
            </div>
        </div>
    );
};

export default Header;