import React from 'react';
import SignInPage from "./home/signInPage/SignInPage";
import ForgotPasswordPage from "./home/forgotPasswordPage/ForgotPasswordPage";
import SignUpPage from "./home/signUpPage/SignUpPage";
import Profile from "./home/profile/Profile";

const Header = () => {
    return (
        <div>
            <SignInPage/>
            <SignUpPage/>
            <ForgotPasswordPage/>
            <Profile/>
        </div>
    );
};

export default Header;