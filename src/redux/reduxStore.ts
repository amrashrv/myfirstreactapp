import { Action, applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";
import dialogsReducer from "./dialogsReducer";



//combine all reducers into one with the help of Redux.
let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
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

type PropertiesType<T> = T extends {[key: string]: infer U} ? U: never 
export type InferActionsType<T extends {[key: string]:(...args: any[])=> any} > = ReturnType<PropertiesType<T>>

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, appStateType, unknown, A>