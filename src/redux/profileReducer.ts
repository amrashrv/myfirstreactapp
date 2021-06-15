import { FormAction, stopSubmit } from "redux-form";
import { profileAPI } from "../api/profileAPI";
import { photosType, postsType, profileType } from "../types/types";
import { BaseThunkType, InferActionsType } from "./reduxStore";

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
const profileReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case 'sn/profile/Add-post': {
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
        case 'sn/profile/DELETE-POST': {
            return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }
        }
        case 'sn/profile/SET-USER-PROFILE': {
            return { ...state, profile: action.profile }
        }
        case 'sn/profile/SET-STATUS': {
            return { ...state, status: action.status }
        }
        case 'SET-PHOTO': {
            return {...state, profile: {...state.profile, photos: action.photos} as profileType}
        }
        default:
            return state;
    }
}
export const actions = {
    addPostActionCreator: (newPostBody: string) => ({type: 'sn/profile/Add-post', newPostBody} as const ),
    deletePost: (postId: number) => ({type: 'sn/profile/DELETE-POST', postId} as const ),
    setUserProfile: (profile: profileType) => ({type: 'sn/profile/SET-USER-PROFILE',profile} as const ),
    setStatus: (status: string) => ({type: 'sn/profile/SET-STATUS',status} as const ),
    setPhoto: (photos: photosType) => ({type: 'SET-PHOTO', photos} as const ),
}
//Thunk
export const getUserProfile = (userId: number):ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
}
export const getStatus = (status: number):ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(status)
    dispatch(actions.setStatus(data));
}
export const updateStatus = (status: string):ThunkType => async (dispatch) => {
    try{
        let data = await profileAPI.updateStatus(status);
        if (data.resultCode === 0) {
        dispatch(actions.setStatus(status));
    } 
    } catch(error){
        alert("403")
    }
}
export const savePhoto = (file: File):ThunkType => async (dispatch) =>{
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0){
        dispatch(actions.setPhoto(data.data.photos))
    }
}
export const saveProfile = (profile: profileType):ThunkType => async(dispatch, getState) =>{
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        if (userId != null){
            dispatch(getUserProfile(userId))
        } else {
            throw new Error("userId can't be null")
        }
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}))
        return Promise.reject(data.messages[0]);
    }
}
export default profileReducer;
// types
export type initialStateType = typeof initialState;
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>