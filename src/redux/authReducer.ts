import { FormAction, stopSubmit } from "redux-form";
import { ResultCodeEnum, ResultCodeForCaptchaEnum } from "../api/api";
import { securityAPI } from "../api/securityAPI";
import { authAPI } from "../api/authAPI";
import { BaseThunkType, InferActionsType } from "./reduxStore";

let initialState = {
    userId: null as number| null,
    email: null as string| null,
    login: null as string| null,
    isAuth: false as boolean,
    captchaUrl: null as string| null
};
const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'samurai-network/auth/SET-USER-DATA':
        case 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS':
            return {
                usrId: "any string",
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({ type: 'samurai-network/auth/SET-USER-DATA', payload: { userId, email, login, isAuth } } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({ type: 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}} as const),

}
export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let authData = await authAPI.getHeader()
    
    if (authData.resultCode === ResultCodeEnum.success) {
        let { id, login, email } = authData.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}
export const login = (email: string, password: string , rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    let loginData = await authAPI.login(email, password, rememberMe, captcha)
    if (loginData.resultCode === ResultCodeEnum.success) {
        //success, getAuthData
        dispatch(getAuthUserData())
    } else {
        if (loginData.resultCode === ResultCodeForCaptchaEnum.captchaIsRequired) {
            dispatch(getCaptchaUrl());
        }
        let message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
    }

}
export const getCaptchaUrl = ():ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
}
export const logout = ():ThunkType => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    }

}
export default authReducer;

//types
export type InitialStateType = typeof initialState;
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>