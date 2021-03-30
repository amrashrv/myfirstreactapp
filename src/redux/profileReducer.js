import { profileAPI } from "../api/api";

const add_post = 'Add-post';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';


let initialState = {//default object
    posts: [
        { id: 1, message: "First Post", likesCount: 5 },
        { id: 2, message: "Second Post", likesCount: 105 },
        { id: 3, message: "Third post", likesCount: 26 }
    ],
    profile: null,
    status: "",
    isFetching: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case add_post: {
            let newPost = {
                id: 4,
                message: action.newPostBody,
                likesCount: 0
            };
            return { ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
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
export const addPostActionCreator = (newPostBody) => ({
    type: add_post, newPostBody
});
export const deletePost = (postId) => ({
    type: DELETE_POST, postId
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});
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