import  * as axios from "axios";


const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY" : "71a41bf9-b907-497d-96c0-effe78a7b2c0"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
    }
}
