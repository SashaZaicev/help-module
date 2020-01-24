import React from 'react';
import {Redirect} from "react-router-dom";
import {SIGN_IN} from "../Routes";
import {IAppStore} from "../../BLL/store";
import {connect} from 'react-redux';
// import {logoutUser} from "../../thunk/profileThunks";

interface IProfilePage {
    isAuth: boolean;
    name: string;
    // logoutUser: () => void;
}

const Profile: React.FC<IProfilePage> = (props: IProfilePage) => {
    if (!props.isAuth) return <Redirect to={SIGN_IN}/>
    // const logoutUser = () => {
    //     props.logoutUser()
    // }
    return (
        <div className='container'>
            <div>
                Здесь моя мордашка!!!
                {props.name}
                <button >logout</button>
            </div>

        </div>
    );
};
const mstp = (state: IAppStore) => {
    return {
        isAuth: state.signIn.isAuth,
        name: state.profile.name
    }
};
export default connect(mstp)(Profile);