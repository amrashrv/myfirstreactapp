import axios from "axios";
import { profileType } from "../types/types";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "71a41bf9-b907-497d-96c0-effe78a7b2c0"
    }
});

export const usersAPI = {
    requestUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`);
        },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`);
    }
}

export enum ResultCodeEnum {
    success = 0,
    error = 1,
}
export enum ResultCodeForCaptcha {
    captchaIsRequired = 10, 
}
type LoginResponseType = {
    data: {
        userId: number,
    }
    resultCode: ResultCodeForCaptcha | ResultCodeEnum,
    messages: Array<string>
}
type getHeaderType = {
   data: {
       id: number,
       email: string,
       login: string
   },
   resultCode: ResultCodeEnum,
   messages: Array<string>
}
export const authAPI = {
    getHeader(){
        return instance.get<getHeaderType>(`auth/me`).then(res => res.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
        .then(res => res.data)
    },
    logout(){
        return instance.delete(`auth/login`);
    }
}

export const profileAPI = {
    getProfile(userId: number){
        return instance.get(`profile/` + userId);
    },
    getStatus(userId: any){
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string){
        return instance.put(`profile/status`, {status: status});
    },
    saveProfile(profile: profileType){
        return instance.put(`profile`, profile);
    },
    savePhoto(photoFile: any){
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}
export const securityAPI ={
    getCaptchaUrl(){
        return instance.get(`security/get-captcha-url`);
    } 
}
