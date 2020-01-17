export const FORGOT_PASS = "my-app/src/home/forgotPasswordPage";

const initialState = {

};

export const forgotPassReducer = (state = initialState , action: { type: any; }) => {
    switch (action.type) {
        case FORGOT_PASS: {
            return {
                ...state,

            }
        }

        default: {
            return state;
        }
    }
};
export const forgotPass = () => ({
    type: FORGOT_PASS,
});