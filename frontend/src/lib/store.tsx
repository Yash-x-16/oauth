import axios from "axios" 

export const axiosInstance = axios.create({
    baseURL:"http:www.localhost:3000/api",
    withCredentials:true
})