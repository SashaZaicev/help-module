export const SIGN_IN = "my-app/src/home/signInPage";

const initialState = {
    email: "text@mail.ru",
    password: "qwerty"
}

export const signInReducer = (state = initialState, action: { type: any; }) => {
    switch (action.type) {
        case SIGN_IN: {
            return {
                ...state,

            }
        }

        default: {
            return state;
        }
    }
};
export const signIn = () => ({
    type: SIGN_IN,
});