import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FORGOT_PASS, PROFILE, SIGN_IN, SIGN_UP} from "./home/Routes";

const Header: React.FC = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='headerBlock'>
            <button onClick={() => setShow(!show)}>
                {show ? 'hide menu' : 'show menu'}</button>
            {show && <NavLink to={SIGN_IN}>sign-in</NavLink>}
            {show && <NavLink to={SIGN_UP}>sign-up</NavLink>}
            {show && <NavLink to={FORGOT_PASS}>forgot-pass</NavLink>}
            {show && <NavLink to={PROFILE}>profile</NavLink>}
            {show && <button onClick={() => setShow(!show)}>{show ? 'hide menu' : 'show menu'}</button>}
        </div>
    );
};

export default Header;