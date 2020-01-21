import React from 'react';
import {Redirect} from "react-router-dom";
import {SIGN_IN} from "../Routes";
import {IAppStore} from "../../BLL/store";
import { connect } from 'react-redux';

interface IProfilePage {
    isAuth: boolean;
}
const Profile: React.FC<IProfilePage> = (props: IProfilePage) => {
    if (props.isAuth) return <Redirect to={SIGN_IN}/>
    return (
        <div className='container'>
            <div>
                Здесь моя мордашка!!!

            </div>

        </div>
    );
};
const mstp = (state: IAppStore) => {
    return {
        isAuth: state.signIn.isAuth
    }
}
export default connect(mstp)(Profile);