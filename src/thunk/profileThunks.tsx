import {API} from "../DAL/API";
import { profileSetName } from "../home/profile/profileReducer";

export const logoutUser =
    (name: string) =>
        async (dispatch: any) => {
            // console.log()
            try {
            // const response = await API.postLogin(email, password, rememberMe);

                dispatch(profileSetName(''));
                console.log('Neko Sign-in Success!')

            } catch (e) {


            console.log('Neko Sign-in Error!')

        }}