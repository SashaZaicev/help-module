import {API} from "../DAL/API";
import {signIn} from "../home/signInPage/signInReducer";

export const logInUser = (email: string, password: string, rememberMe: boolean) =>
    async (dispatch: any) => {
        console.log()
        const response = await API.postLogin(email, password, rememberMe);
        // await dispatch(signIn());
        console.log(response)
    }