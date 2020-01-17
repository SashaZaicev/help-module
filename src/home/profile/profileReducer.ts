export const PROFILE = "my-app/src/home/profile";

const initialState = {

}

export const profileReducer = (state = initialState , action: { type: any; }) => {
    switch (action.type) {
        case PROFILE: {
            return {
                ...state,

            }
        }

        default: {
            return state;
        }
    }
};
export const profile = () => ({
    type: PROFILE,
});