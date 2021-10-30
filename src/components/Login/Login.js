import React from 'react';
import './Login.css';
import googleLogin from '../../images/google-logo.png';

const Login = () => {
    return (
        <div className="user_login">
            <div className="container login_inner">
                <h1>Login</h1>
                <div className="login_with_google">
                    <img src={googleLogin} alt="" />
                    <span>Login with Google</span>
                </div>
            </div>
        </div>
    );
};

export default Login;