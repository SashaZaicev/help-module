import React from 'react';
import {SIGN_IN} from "../Routes";
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import {IAppStore} from "../../BLL/store";

interface IPropsSignUpPage {
    email: string;
    password: string;
}

const SignUpPage: React.FC<IPropsSignUpPage> = (props: IPropsSignUpPage) => {
    return (
        <div className='container'>
            <div>Ну напишите сюда номер своей карты и пин код, для регистрации</div>
            <div><input type="text" placeholder='email' value={props.email}/></div>
            <div><input type="password" placeholder='password' value={props.password}/></div>
            <div><input type="password" placeholder='confirm password' value={props.password}/></div>
            <div>
                <button>Register</button>
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

export default connect(mapStateToProps, {})(SignUpPage);