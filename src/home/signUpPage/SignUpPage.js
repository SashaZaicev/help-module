import React from 'react';
import {SIGN_IN} from "../Routes";
import {NavLink} from "react-router-dom";

const SignUpPage = () => {
    return (
        <div className='container'>
            <div>Ну напишите сюда номер своей карты и пин код, для регистрации</div>
            <div><input type="text" placeholder='email'/></div>
            <div><input type="password" placeholder='password'/></div>
            <div><input type="password" placeholder='confirm password'/></div>
            <div>
                <button>Register</button>
            </div>
            <p>Оля прогульщица</p>
            <div><NavLink to={SIGN_IN}>Sign in</NavLink></div>

        </div>
    );
};

export default SignUpPage;