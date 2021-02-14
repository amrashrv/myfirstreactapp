import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
//combine all reducers into one with the help of Redux.
let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer    
});
//создание нового Store через Redux
let store = createStore(reducers);
//export store to index.js
export default store;