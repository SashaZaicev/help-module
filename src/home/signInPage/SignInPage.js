import React from 'react';
import {NavLink} from "react-router-dom";
import {FORGOT_PASS, SIGN_UP} from "../Routes";

const SignInPage = (props) => {
    return (
        <div className='container'>
            <div>Введите свой логин и пароль!</div>
            <div><input type="text" placeholder='Login'/></div>
            <div><input type="password" placeholder='Password'/></div>
            <div><NavLink to={FORGOT_PASS}>Forgot password?</NavLink></div>
            <div><input type="checkbox"/>Remember me</div>
            <div><button>Sign in</button></div>
            <div><NavLink to={SIGN_UP}>Registration</NavLink></div>
        </div>
    );
};

export default SignInPage;