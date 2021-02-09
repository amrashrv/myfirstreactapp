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
        dialogsPage:{
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
            newMessageText: 'IT kamasutra'
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubsciber() {
        console.log("state is changed");
    },
    addPost() {
        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubsciber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubsciber(this._state);
    },
    addMessage() {
        let newTextMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(newTextMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubsciber(this._state);
    },
    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubsciber(this._state);
    },
    subscribe(observer) {
        this._callSubsciber = observer;
    },
};

window.store = store;
export default store;