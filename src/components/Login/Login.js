import React from 'react';
import './Login.css';
import googleLogin from '../../images/google-logo.png';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();

    return (
        <div className="user_login">
            <div className="container login_inner">
                <h1>Login</h1>
                <div onClick={signInWithGoogle} className="login_with_google">
                    <img src={googleLogin} alt="" />
                    <span>Login with Google</span>
                </div>
            </div>
        </div>
    );
};

export default Login;