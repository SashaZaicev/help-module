import {API} from "../DAL/API";
import {signIn} from "../home/signInPage/signInReducer";
import { profileSetName } from "../home/profile/profileReducer";

export const logInUser =
    (email: string, password: string, rememberMe: boolean) =>
        async (dispatch: any) => {
            // console.log()
            try {
            const response = await API.postLogin(email, password, rememberMe);

                dispatch(profileSetName(response.data.name));
                console.log('Neko Sign-in Success!')

            } catch (e) {


            console.log('Neko Sign-in Error!')

        }}