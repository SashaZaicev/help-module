import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FORGOT_PASS, SIGN_UP} from "../Routes";
import {connect} from "react-redux";
import {IAppStore} from "../../BLL/store";
import {signIn} from "./signInReducer";

interface IPropsSignInPage {
    email: string;
    password: string;
    signIn: (email: string, password: string) => void;
}

const SignInPage: React.FC<IPropsSignInPage> = (props: IPropsSignInPage) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signInUser = () => {
        props.signIn(email, password)
        if (email !== ''){
            alert('Welcome brother')
        } else {
            alert('Error')
        }
    }
    return (
        <div className='container'>
            <div>Введите свой логин и пароль!</div>
            <div><input type="text"
                        placeholder='Login'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.currentTarget.value)
                        }}/></div>
            <div><input type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.currentTarget.value)
                        }}/></div>
            <div><NavLink to={FORGOT_PASS}>Forgot password?</NavLink></div>
            <div><input type="checkbox"/>Remember me</div>
            <div>
                <button onClick={signInUser}>Sign in</button>
            </div>
            <div><NavLink to={SIGN_UP}>Registration</NavLink></div>
        </div>
    );
};

const mstp = (state: IAppStore) => {
    return {
        email: state.signIn.email,
        password: state.signIn.password
    }
}

export default connect(mstp, {signIn})(SignInPage);