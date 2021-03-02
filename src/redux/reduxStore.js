import { combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
//combine all reducers into one with the help of Redux.
let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer   
});
//создание нового Store через Redux
let store = createStore(reducers);
window.store = store;
//export store to index.js
export default store;