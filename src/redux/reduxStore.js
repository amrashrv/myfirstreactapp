import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

//combine all reducers into one with the help of Redux.
let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer 
});
//создание нового Store через Redux
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
//export store to index.js
export default store;