import {API} from "../DAL/API";

export const forgotPassUser = (email: string) =>
    async (dispatch: any) => {
        // console.log()
        const response = await API.postForgot(email);
        console.log(response)
    }