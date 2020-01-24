export const FORGOT_PASS = "my-app/src/home/forgotPasswordPage";

interface IForgotPassAction { // blank
    type: typeof FORGOT_PASS;
    email: string;

}

const initialState = {
    email: '',
};

export const forgotPassReducer = (state = initialState, action: IForgotPassAction) => {
    switch (action.type) {
        case FORGOT_PASS: {
            return {
                ...state,
                email: action.email
            }
        }
        default: {
            return state;
        }
    }
};
export const forgotPass = (email: string): IForgotPassAction => ({
    type: FORGOT_PASS, email
});