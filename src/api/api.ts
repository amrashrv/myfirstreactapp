import axios from "axios";
import { usersType } from "../types/types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "71a41bf9-b907-497d-96c0-effe78a7b2c0"
    }
});

export enum ResultCodeEnum {
    success = 0,
    error = 1,
}
export enum ResultCodeForCaptchaEnum {
    captchaIsRequired = 10,
}
export type LoginResponseDataType = {

    userId: number,

}
export type getHeaderDataType = {
    id: number,
    email: string,
    login: string
}

export type getItemsType = {
    items: Array<usersType>
    totalCount: number
    error: string | null
}
export type responseType<D = {}, RC = ResultCodeEnum> = {
    data: D,
    messages: Array<string>,
    resultCode: RC
}
