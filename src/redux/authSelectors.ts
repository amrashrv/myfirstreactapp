import { appStateType } from "./reduxStore";

export const selectIsAuth = (state: appStateType) => {
    return state.auth.isAuth;
}
export const selectCurrentLogin = (state: appStateType) => {
    return state.auth.login;
}
