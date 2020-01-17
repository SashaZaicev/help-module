import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    signin: signInReducer,
    profile: profileReducer,
    singup: singUpReducer,
    forgotPass: forgotPassReducer,
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store