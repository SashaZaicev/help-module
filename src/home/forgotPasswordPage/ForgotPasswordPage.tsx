import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {SIGN_IN, SIGN_UP} from "../Routes";
import { connect } from 'react-redux';
import {IAppStore} from "../../BLL/store";
import {forgotPassUser} from "../../thunk/forgotPassThunks";
import {forgotPass} from "./forgotPassReducer";

interface IPropsForgotPassPage {
    // loading: boolean;
    // error: string;
    // success: boolean;
    forgotPass: (email: string) => void;
    email: string;
    forgotPassUser: (email: string) => void;
}

const ForgotPasswordPage: React.FC<IPropsForgotPassPage> = (props: IPropsForgotPassPage) => {
    const [email, setEmail] = useState('');
    const forgotPass = () => {
        props.forgotPassUser(email)
    }

    return (
        <div className='container'>
            <div>Память уже не та :)</div>
            <div><input type="text"
                        placeholder='email'
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
            /></div>
            <div>
                <button onClick={forgotPass}>Send email</button>
            </div>
            <div><NavLink to={SIGN_UP}>Registration</NavLink></div>
            <div><NavLink to={SIGN_IN}>Sign in</NavLink></div>

        </div>
    );
};
const mstp = (state: IAppStore) =>{
    return {
        email: state.forgotPass.email,
    }
}

export default connect(mstp,{forgotPass, forgotPassUser})(ForgotPasswordPage);