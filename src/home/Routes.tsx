import React from 'react';
import {Redirect, Route} from "react-router-dom";
import SignUpPage from "./signUpPage/SignUpPage";
import ForgotPasswordPage from "./forgotPasswordPage/ForgotPasswordPage";
import SignInPage from "./signInPage/SignInPage";
import ErrorPage from "./ErrorPage";
import Profile from './profile/Profile';


export const SIGN_IN = '/sign-in';
export const SIGN_UP = '/sign-up';
export const FORGOT_PASS = '/forgotPass';
export const PROFILE = '/profile';

const Routes: React.FC = () => {
    return (
        <React.Fragment>
            {/*//Switch задает жестко путь*/}
            {/*<Switch>*/}
            <Route exact path={'/'} render={() => <Redirect to={SIGN_IN}/>}/>
            <Route path={SIGN_IN} render={() => <SignInPage/>}/>
            <Route path={SIGN_UP} render={() => <SignUpPage/>}/>
            <Route path={FORGOT_PASS} render={() => <ForgotPasswordPage/>}/>

            <Route path={PROFILE} render={() => <Profile/>}/>
            {/*<Route path='*' render={() => <ErrorPage/>}/>*/}

            {/*</Switch>*/}
        </React.Fragment>
    );
};

export default Routes;