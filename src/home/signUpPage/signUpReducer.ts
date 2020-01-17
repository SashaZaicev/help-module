export const SIGN_UP = "my-app/src/home/signUpPage";

interface ISignUpState {
    email: string;
    password: string;
}

const initialState: ISignUpState = {
    email: 'olllenka@mail.ru',
    password: '123',
};

export const signUpReducer = (state = initialState , action: { type: any; }) => {
    switch (action.type) {
        case SIGN_UP: {
            return {
                ...state,

            }
        }

        default: {
            return state;
        }
    }
};
export const signUp = () => ({
    type: SIGN_UP,
});