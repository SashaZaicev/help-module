export const PROFILE_SET_NAME = "my-app/src/home/profile";

const initialState = {
name: ''
}
interface IProfileSetName{
    type: typeof PROFILE_SET_NAME;
    name: string;
}

export const profileReducer = (state = initialState , action: IProfileSetName) => {
    switch (action.type) {
        case PROFILE_SET_NAME: {
            return {
                ...state,
                    name: action.name
            }
        }

        default: {
            return state;
        }
    }
};
export const profileSetName = (name: string): IProfileSetName => ({
    type: PROFILE_SET_NAME, name
});