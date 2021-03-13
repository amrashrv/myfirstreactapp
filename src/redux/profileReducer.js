import { profileAPI } from "../api/api";

const add_post = 'Add-post';
const update_new_post_text = 'Update-new-post-text';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


let initialState = {//default object
    posts: [
        { id: 1, message: "First Post", likesCount: 5 },
        { id: 2, message: "Second Post", likesCount: 105 },
        { id: 3, message: "Third post", likesCount: 26 }
    ],
    newPostText: "it-kamasutra.com",
    profile: null,
    status: "",
    isFetching: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case add_post: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };
            return { ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case update_new_post_text: {
            return { ...state,
                newPostText: action.newText
            }
            
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
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
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})
export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}
export const getStatus = (status) => {
    return (dispatch) => {
        profileAPI.getStatus(status).then(response => {
            dispatch(setStatus(response.data));
        });
    } 
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    } 
}
export default profileReducer;