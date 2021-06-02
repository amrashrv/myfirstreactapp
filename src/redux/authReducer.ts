import { stopSubmit } from "redux-form";
import { authAPI, ResultCodeEnum, ResultCodeForCaptcha, securityAPI } from "../api/api";

const SET_USER_DATA = 'samurai-network/auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';



let initialState = {
    userId: null as number| null,
    email: null as string| null,
    login: null as string| null,
    isAuth: false as boolean,
    captchaUrl: null as string| null
};
export type InitialStateType = typeof initialState;
const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                usrId: "any string",
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
type setAuthUserDataPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type setAuthUserDataType = {
    type: typeof SET_USER_DATA,
    payload: setAuthUserDataPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataType => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });

type GetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl: string}
}
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

export const getAuthUserData = () => async (dispatch: any) => {
    let authData = await authAPI.getHeader()
    
    if (authData.resultCode === ResultCodeEnum.success) {
        let { id, login, email } = authData.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}
export const login = (email: string, password: string , rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    let loginData = await authAPI.login(email, password, rememberMe, captcha)
    if (loginData.resultCode === 0) {
        //success, getAuthData
        dispatch(getAuthUserData())
    } else {
        if (loginData.resultCode === ResultCodeForCaptcha.captchaIsRequired) {
            dispatch(getCaptchaUrl());
        }
        let message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
    }

}
export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}
export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    }

}
export default authReducer;