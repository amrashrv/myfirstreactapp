import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/profileAPI";
import { photosType, postsType, profileType } from "../types/types";

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
    ] as Array<postsType>,
    profile: null as profileType | null,
    status: "",
    newPostText: ''
};
export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): initialStateType => {
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
            return {...state, profile: {...state.profile, photos: action.photos} as profileType}
        }
        default:
            return state;
    }
}
type addPostActionCreatorType = {
    type: typeof add_post,
    newPostBody: string
}
export const addPostActionCreator = (newPostBody: string): addPostActionCreatorType => ({
    type: add_post, newPostBody
});
type deletePostType = {type: typeof DELETE_POST, postId: number}
export const deletePost = (postId: number): deletePostType => ({
    type: DELETE_POST, postId
});

type setUserProfileType = {type: typeof SET_USER_PROFILE, profile: profileType}
export const setUserProfile = (profile: profileType): setUserProfileType => ({
    type: SET_USER_PROFILE,
    profile
});

type setStatusType = {type: typeof SET_STATUS, status: string}
export const setStatus = (status: string): setStatusType => ({
    type: SET_STATUS,
    status
});

type setPhotoType ={type: typeof SET_PHOTO, photos: photosType}
export const setPhoto = (photos: photosType): setPhotoType => ({
    type: SET_PHOTO, 
    photos
});


export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
}
export const getStatus = (status: number) => async (dispatch: any) => {
    let data = await profileAPI.getStatus(status)
    dispatch(setStatus(data));
}
export const updateStatus = (status: string) => async (dispatch: any) => {
    try{
        let data = await profileAPI.updateStatus(status);
        if (data.resultCode === 0) {
        dispatch(setStatus(status));
    } 
    } catch(error){
        alert("403")
    }
}
export const savePhoto = (file: any) => async (dispatch: any) =>{
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0){
        dispatch(setPhoto(data.data.photos))
    }
}
export const saveProfile = (profile: profileType) => async(dispatch: any, getState: any) =>{
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
         dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}))
        return Promise.reject(data.messages[0]);
    }
}
export default profileReducer;