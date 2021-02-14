import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "First Post", likesCount: 5 },
                { id: 2, message: "Second Post", likesCount: 105 },
                { id: 3, message: "Third post", likesCount: 26 }
            ],
            newPostText: "it-kamasutra.com"
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Andrey" },
                { id: 2, name: "Olga" },
                { id: 3, name: "Korney" },
                { id: 4, name: "Ksenia" },
                { id: 5, name: "Dima" }
            ],
            messages: [
                { id: 1, message: "Hey how are you" },
                { id: 2, message: "Im good" },
                { id: 3, message: "Cool" }
            ],
            newMessageBody: 'IT kamasutra'
        },
        sidebar: {}
    },
    _callSubsciber() {
        console.log("state is changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubsciber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        
        this._callSubsciber(this._state);
    },
};

window.store = store;
export default store;