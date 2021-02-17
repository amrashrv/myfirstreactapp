const add_post = 'Add-post';
const update_new_post_text = 'Update-new-post-text';

let initialState = {//default object
    posts: [
        { id: 1, message: "First Post", likesCount: 5 },
        { id: 2, message: "Second Post", likesCount: 105 },
        { id: 3, message: "Third post", likesCount: 26 }
    ],
    newPostText: "it-kamasutra.com"
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case add_post: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = { ...state }
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case update_new_post_text: {
            let stateCopy = { ...state }
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({
    type: add_post
});
export const updateNewPostTextActionCreator = (text) => ({
    type: update_new_post_text,
    newText: text
});

export default profileReducer;