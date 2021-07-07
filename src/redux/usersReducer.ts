import { Dispatch } from 'redux';
import { responseType } from '../api/api';
import { usersAPI } from '../api/usersAPI';
import { usersType } from '../types/types';
import { updateObjectInArray } from '../utils/objectHelpers';
import { appStateType, BaseThunkType, InferActionsType } from './reduxStore';


let initialState = {
    users: [] as Array<usersType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false,
    followingInProgress: [] as Array<number>, //array of usersId
    filter: {
        term: ''
    }
}


export const usersReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {

        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
            }
        case "SET_USERS": {
            return { ...state, users: action.users }//!!!!
        }
        case "SET_CURRENT_PAGE": {
            return { ...state, currentPage: action.currentPage }
        }
        case "SET_TOTAL_USERS_COUNT": {
            return { ...state, totalUsersCount: action.count }
        }
        case "TOGGLE_IS_FETCHING": {
            return { ...state, isFetching: action.isFetching }
        }
        case "TOGGLE_FOLLOWING_IN_PROSGRESS": {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        case "SN/USERS/SET_FILTER": {
            return {...state, filter: action.payload}
        }
        default:
            return state;
    }
}



export const actions = {
    followSuccess: (userId: number) => ({ type: "FOLLOW", userId } as const),
    unfollowSuccess: (userId: number) => ({ type: "UNFOLLOW", userId } as const),
    setUsers: (users: Array<usersType>) => ({ type: "SET_USERS", users } as const),
    setCurrentPage: (currentPage: number) => ({ type: "SET_CURRENT_PAGE", currentPage } as const),
    setTotalUsersCount: (totalUsersCount: number) => ({ type: "SET_TOTAL_USERS_COUNT", count: totalUsersCount } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: "TOGGLE_IS_FETCHING", isFetching } as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({ type: "TOGGLE_FOLLOWING_IN_PROSGRESS", isFetching, userId } as const),
    setFilter: (term: string) => ({ type: "SN/USERS/SET_FILTER", payload:{term} } as const)
}



export const requestUsers = (page: number, pageSize: number, term: string): ThunkType => async (dispatch: DispatchType, getState: GetStateType) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));
    dispatch(actions.setFilter(term))

    let data = await usersAPI.requestUsers(page, pageSize, term);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
}
// common method for follow and unfollow
const _followUnfollowFlow = async (
    dispatch: DispatchType, 
    userId: number, 
    apiMethod: (userId: number) => Promise<responseType>, 
    actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}
export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess);
    }
}
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess);
    }
}
export default usersReducer;

//types
export type initialStateType = typeof initialState;
export type FilterType = typeof initialState.filter;
type ActionsTypes = InferActionsType<typeof actions>
type GetStateType = () => appStateType;
type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = BaseThunkType<ActionsTypes>