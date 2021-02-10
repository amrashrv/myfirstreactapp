const add_post = 'Add-post';
const update_new_post_text = 'Update-new-post-text';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"

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
        if (action.type === add_post) {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubsciber(this._state);
        } else if (action.type === update_new_post_text) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubsciber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.messages.push({
                id: 4,
                message: body
            });
            this._state.dialogsPage.newMessageBody = '';
            this._callSubsciber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubsciber(this._state);
        }
    },
};
export const addPostActionCreator = () => ({
     type: add_post 
});
export const updateNewPostTextActionCreator = (text) => ({ 
    type: update_new_post_text, 
    newText: text 
});
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
});
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body});
window.store = store;
export default store;