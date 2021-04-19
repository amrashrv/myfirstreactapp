import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const add_post = 'Add-post';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SET_PHOTO = 'SET-PHOTO';


let initialState = {//default object
    posts: [
        { id: 1, message: "First Post", likesCount: 5 },
        { id: 2, message: "Second Post", likesCount: 105 },
        { id: 3, message: "Third post", likesCount: 26 }
    ],
    profile: null,
    status: "",
    file: null,
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
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case DELETE_POST: {
            return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case SET_PHOTO: {
            return {...state, profile: {...state.profile, photos: action.photos}}
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
export const setPhoto = (photos) => ({
    type: SET_PHOTO, 
    photos
});


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}
export const getStatus = (status) => async (dispatch) => {
    let response = await profileAPI.getStatus(status)
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    try{
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    } 
    } catch(error){
        alert("403")
    }
}
export const savePhoto = (file) => async (dispatch) =>{
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0){
        dispatch(setPhoto(response.data.data.photos))
    }
}
export const saveProfile = (profile) => async(dispatch, getState) =>{
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
         dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0]);
    }
}
export default profileReducer;