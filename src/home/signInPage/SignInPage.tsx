import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {FORGOT_PASS, SIGN_UP} from "../Routes";
import {connect} from "react-redux";
import {IAppStore} from "../../BLL/store";
import {signIn} from "./signInReducer";
import {API} from "../../DAL/API";
import {logInUser} from "../../thunk/logInThunks";

interface IPropsSignInPage {
    // loading: boolean;
    // error: string;
    // success: boolean;

    email: string;
    password: string;
    signIn: (email: string, password: string, rememberMe: boolean) => void;
    rememberMe: boolean;

    logInUser: any;
}


const SignInPage: React.FC<IPropsSignInPage> = (props: IPropsSignInPage) => {
    const [email, setEmail] = useState('test@email.nya');
    const [password, setPassword] = useState('ftc{.}mxy~gub%jzc');
    const [rememberMe, setRememberMe] = useState(false);

    /*const signInUser = () => {
        props.signIn(email, password)
        if (email !== '') {
            alert('Welcome brother')
        } else {
            alert('Error')
        }
    };*/
    const logInUser = () => {
        props.logInUser(email, password, rememberMe)
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
            <div><input type="checkbox"
                        checked={rememberMe}
                        onChange={e => setRememberMe(e.currentTarget.checked)}/>
                Remember me
            </div>
            <div>
                <button onClick={logInUser}>Sign in</button>
            </div>
            <div><NavLink to={SIGN_UP}>Registration</NavLink></div>
        </div>
    );
};

const mstp = (state: IAppStore) => {
    return {
        email: state.signIn.email,
        password: state.signIn.password,
        rememberMe: state.signIn.rememberMe,
    }
}

export default connect(mstp, {signIn, logInUser})(SignInPage);