let rerenderEntireTree = () => {
    console.log("state is changed");
}

let state = {
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
};
window.state = state;
export const addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export const addMessage = () => {
    let newTextMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.push(newTextMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}
export const updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}
export default state;