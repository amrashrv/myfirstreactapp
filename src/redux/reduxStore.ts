import { Action, applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";
import dialogsReducer from "./dialogsReducer";
import chatReducer from "./chatReducer";



//combine all reducers into one with the help of Redux.
let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    chat: chatReducer
});



//connection to chrome Redux extention
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
//@ts-ignore
window.__store__ = store;
//export store to index.js
export default store;

//types
type rootReducerType = typeof rootReducer; //(state: globalstate) => globalstate
export type appStateType = ReturnType<rootReducerType>

export type InferActionsType<T> = T extends {[keys: string]: (...args: any[]) => infer U}? U : never
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, appStateType, unknown, A>