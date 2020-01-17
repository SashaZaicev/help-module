import React from 'react';
import {NavLink} from "react-router-dom";
import {SIGN_IN, SIGN_UP} from "../Routes";

const ForgotPasswordPage = () => {
    return (
        <div>
            <div>Память уже не та :)</div>
            <div><NavLink to={SIGN_UP}>Registration</NavLink></div>
            <div><NavLink to={SIGN_IN}>Sign in</NavLink></div>

        </div>
    );
};

export default ForgotPasswordPage;