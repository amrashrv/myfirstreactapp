import { instance, responseType, getHeaderDataType, LoginResponseDataType, ResultCodeForCaptchaEnum, ResultCodeEnum } from "./api";


export const authAPI = {
    getHeader() {
        return instance.get<responseType<getHeaderDataType>>(`auth/me`).then(res => res.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<responseType<LoginResponseDataType, ResultCodeEnum | ResultCodeForCaptchaEnum>>(`auth/login`, { email, password, rememberMe, captcha })
            .then(res => res.data);
    },
    logout() {
        return instance.delete(`auth/login`);
    }
};
