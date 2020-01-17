import React from 'react';
import {SIGN_IN} from "../Routes";
import {NavLink} from "react-router-dom";

const SignUpPage = () => {
    return (
        <div>
            <div>Ну напишите сюда номер своей карты и пин код, для регистрации</div>
            <div><NavLink to={SIGN_IN}>Sign in</NavLink></div>

        </div>
    );
};

export default SignUpPage;