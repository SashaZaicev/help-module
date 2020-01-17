export const SIGN_UP = "my-app/src/home/signUpPage";

interface ISignUpState {
    email: string;
    password: string;
}

interface ISignUpAction {
    type: typeof SIGN_UP;
    email: string;
    password: string;
}

const initialState: ISignUpState = {
    email: '',
    password: '',
};

export const signUpReducer = (state = initialState , action: ISignUpAction) => {
    switch (action.type) {
        case SIGN_UP: {
            return {
                ...state,
                email: action.email,
                password: action.password,
            }
        }

        default: {
            return state;
        }
    }
};

export const signUp = (email: string, password: string): ISignUpAction => ({type: SIGN_UP, email, password});