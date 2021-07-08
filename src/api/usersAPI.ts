import { getItemsType, instance, responseType } from "./api";

export const usersAPI = {
    requestUsers(currentPage = 1, pageSize = 10, term: string = '', friend: null | boolean = null) {
        return instance.get<getItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null? '': `&friend=${friend}`))
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<responseType>(`follow/${userId}`).then(res => res.data);
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<responseType>;
    }
}