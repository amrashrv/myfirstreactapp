const profileReducer = (state, action) =>{
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
    };
}