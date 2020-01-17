import React from 'react';
import {NavLink} from "react-router-dom";
import {FORGOT_PASS, SIGN_UP} from "../Routes";

const SignInPage = (props) => {
    return (
        <div>
            <div><NavLink to={FORGOT_PASS}>Forgot password?</NavLink></div>
            <div>Введите свой логин и пароль!!!</div>
            <div><NavLink to={SIGN_UP}>Registration</NavLink></div>
        </div>
    );
};

export default SignInPage;