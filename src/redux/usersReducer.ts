import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { usersAPI } from '../api/api';
import { usersType } from '../types/types';
import { updateObjectInArray } from '../utils/objectHelpers';
import { appStateType } from './reduxStore';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IN_PROSGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS'

let initialState = {
    users: [] as Array<usersType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false,
    followingInProgress: [] as Array<number>, //array of usersId
}
type initialStateType = typeof initialState;

export const usersReducer = (state = initialState, action: actionsTypes): initialStateType => {
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
            }
        case SET_USERS: {
            return { ...state, users: action.users }//!!!!
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_FOLLOWING_IN_PROSGRESS: {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

type actionsTypes = followSuccessType | unfollowSuccessType | setUsersType | setCurrentPageType | setTotalUsersCountType | toggleIsFetchingType | toggleFollowingProgressType;

type followSuccessType = { type: typeof FOLLOW, userId: number };
export const followSuccess = (userId: number): followSuccessType => ({ type: FOLLOW, userId });
type unfollowSuccessType = { type: typeof UNFOLLOW, userId: number }
export const unfollowSuccess = (userId: number): unfollowSuccessType => ({ type: UNFOLLOW, userId });
type setUsersType = { type: typeof SET_USERS, users: Array<usersType> }
export const setUsers = (users: Array<usersType>): setUsersType => ({ type: SET_USERS, users });
type setCurrentPageType = { type: typeof SET_CURRENT_PAGE, currentPage: number }
export const setCurrentPage = (currentPage: number): setCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage });
type setTotalUsersCountType = { type: typeof SET_TOTAL_USERS_COUNT, count: number }
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountType => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
type toggleIsFetchingType = { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean }
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({ type: TOGGLE_IS_FETCHING, isFetching });
type toggleFollowingProgressType = { type: typeof TOGGLE_FOLLOWING_IN_PROSGRESS, isFetching: boolean, userId: number }
export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressType => ({ type: TOGGLE_FOLLOWING_IN_PROSGRESS, isFetching, userId })

type GetStateType = () => appStateType;
type DispatchType = Dispatch<actionsTypes>;
type ThunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsTypes>
export const requestUsers = (page: number, pageSize: number): ThunkType => async (dispatch: DispatchType, getState: GetStateType) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let data = await usersAPI.requestUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}
// common method for follow and unfollow
const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number) => followSuccessType | unfollowSuccessType) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}
export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}
export default usersReducer;