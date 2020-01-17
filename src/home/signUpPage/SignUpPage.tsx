import React, {useState} from 'react';
import {SIGN_IN} from "../Routes";
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import {IAppStore} from "../../BLL/store";
import {signUp} from "./signUpReducer";


interface IPropsSignUpPage {
    email: string;
    password: string;
    signUp: (email: string, password: string) => void;
}

const SignUpPage: React.FC<IPropsSignUpPage> = (props: IPropsSignUpPage) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');


    const signUpCallback = (e: any) => {
        if(password === password1){
            props.signUp(email, password);

        }else{
            alert('ERROR')
        }
    };

    return (
        <div className='container'>
            <div>Ну напишите сюда номер своей карты и пин код, для регистрации</div>
            <div><input type="text" placeholder='email' value={email} onChange={(e) => {
                setEmail(e.currentTarget.value)}}/></div>
            <div><input type="password" placeholder='password' value={password}
                        onChange={(e) => {setPassword(e.currentTarget.value)}}/></div>
            <div><input type="password" placeholder='confirm password' value={password1}
                        onChange={(e) => {setPassword1(e.currentTarget.value)}}/></div>
            <div>
                <button onClick={signUpCallback}>Register</button>
            </div>
            <div><NavLink to={SIGN_IN}>Sign in</NavLink></div>

        </div>
    );
};

const mapStateToProps = (state: IAppStore) => {
    return {
        email: state.signUp.email,
        password: state.signUp.password,
    }
};

export default connect(mapStateToProps, {signUp})(SignUpPage);