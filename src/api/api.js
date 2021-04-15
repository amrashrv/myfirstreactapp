import * as axios from "axios";



const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "71a41bf9-b907-497d-96c0-effe78a7b2c0"
    }
});

export const usersAPI = {
    requestUsers(currentPage = 1, pageSize = 10) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instanse.post(`follow/${userId}`);
        },
    unfollow(userId) {
        return instanse.delete(`follow/${userId}`);
    }
}
export const authAPI = {
    getHeader(){
        return instanse.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instanse.post(`auth/login`, {email, password, rememberMe});
    },
    logout(){
        return instanse.delete(`auth/login`);
    }
}
export const profileAPI = {
    getProfile(userId){
        return instanse.get(`profile/` + userId);
    },
    getStatus(userId){
        return instanse.get(`profile/status/` + userId);
    },
    updateStatus(status){
        return instanse.put(`profile/status`, {status: status});
    },
    saveProfile(profile){
        return instanse.put(`profile`, profile);
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append("image", photoFile);
        return instanse.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}
