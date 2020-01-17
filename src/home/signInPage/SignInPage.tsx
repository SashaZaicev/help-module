import React from 'react';
import {NavLink} from "react-router-dom";
import {FORGOT_PASS, SIGN_UP} from "../Routes";
import {connect} from "react-redux";

const SignInPage: React.FC = (props: any) => {
    return (
        <div className='container'>
            <div>Введите свой логин и пароль!</div>
            <div><input type="text" placeholder='Login' value={props.email}/></div>
            <div><input type="password" placeholder='Password' value={props.password}/></div>
            <div><NavLink to={FORGOT_PASS}>Forgot password?</NavLink></div>
            <div><input type="checkbox"/>Remember me</div>
            <div><button>Sign in</button></div>
            <div><NavLink to={SIGN_UP}>Registration</NavLink></div>
        </div>
    );
};
const mstp = (state: any)=>{
    return{
        email: state.signIn.email,
        password: state.signIn.password
    }
}

export default connect (mstp)(SignInPage);