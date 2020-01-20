import React from 'react';
import {Redirect, Route} from "react-router-dom";
import SignUpPage from "./signUpPage/SignUpPage";
import ForgotPasswordPage from "./forgotPasswordPage/ForgotPasswordPage";
import Profile from "./profile/Profile";
import SignInPage from "./signInPage/SignInPage";


export const SIGN_IN = '/sign-in';
export const SIGN_UP = '/sign-up';
export const FORGOT_PASS = '/forgotPass';
export const PROFILE = '/profile';

const Routes: React.FC = () => {
    return (
        <React.Fragment>
            <Route exact path={'/'} render={() => <Redirect to={SIGN_IN}/>}/>

            <Route path={SIGN_IN} render={() => <SignInPage/>}/>
            <Route path={SIGN_UP} render={() => <SignUpPage/>}/>
            <Route path={FORGOT_PASS} render={() => <ForgotPasswordPage/>}/>
            <Route path={PROFILE} render={() => <Profile/>}/>
        </React.Fragment>
    );
};

export default Routes;
