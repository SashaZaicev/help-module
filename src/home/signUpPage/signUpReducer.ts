import {API} from "../../DAL/API";

export const SIGN_UP = "my-app/src/home/SIGN_UP";
export const SIGN_ERROR = 'SIGN_ERROR';


interface ISignUpState {
    email: string;
    password: string;
    errorMessage: string;
    isAuth: boolean;
}

interface ISignUpAction {
    type: typeof SIGN_UP;
    email: string;
    password: string;
}

interface ISignErrorAction {
    type: typeof SIGN_ERROR,
}

const initialState: ISignUpState = {
    email: '',
    password: '',
    errorMessage: '',
    isAuth: false,
};

export const signUpTC = (email: string, password: string) => async (dispatch: any) => {
    const result: any = await API.login(email, password);
    if (result.ok) {

        // await repository.saveToken(result.token);
        // await repository.saveUserName(username);
        dispatch(signUp(email, password))
    } else {
        dispatch(signError())
    }
};

export const signUpReducer = (state = initialState , action: ISignUpAction | ISignErrorAction) => {
    switch (action.type) {
        case SIGN_UP: {
            return {
                ...state,
                email: action.email,
                password: action.password,
                isAuth: true,
            }
        }
        case SIGN_ERROR: {
            return {
                ...state,
                errorMessage: 'Wrong email or password'
            }
        }

        default: {
            return state;
        }
    }
};

export const signUp = (email: string, password: string): ISignUpAction => ({type: SIGN_UP, email, password});
export const signError = () => ({type: SIGN_ERROR});