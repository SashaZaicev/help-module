import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import {forgotPassReducer} from "../home/forgotPasswordPage/forgotPassReducer";
import {profileReducer} from "../home/profile/profileReducer";
import {signUpReducer} from "../home/signUpPage/signUpReducer";
import {signInReducer} from "../home/signInPage/signInReducer";


let reducers = combineReducers({
    signIn: signInReducer,
    profile: profileReducer,
    signUp: signUpReducer,
    forgotPass: forgotPassReducer,
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export type IAppStore = ReturnType<typeof reducers>;

export default store