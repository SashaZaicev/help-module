export const SIGN_IN = "my-app/src/home/signInPage";

// interface ISignInState {
//     email: string;
//     password: string;
// }

interface ISignInAction { // blank
    type: typeof SIGN_IN;
    email: string;
    password: string;
    rememberMe: boolean;

}

const initialState = {
    email: "",
    password: "",
    rememberMe: false,
    isAuth: true,
}

export const signInReducer = (state = initialState, action: ISignInAction) => {
    switch (action.type) {
        case SIGN_IN: {
            return {
                ...state,
                email: action.email,
                password: action.password,
                rememberMe: action.rememberMe,
                isAuth: true,
            }
        }
        default: {
            return state;
        }
    }
};
export const signIn = (email: string, password: string, rememberMe: boolean): ISignInAction => ({
    type: SIGN_IN, email, password, rememberMe,
});