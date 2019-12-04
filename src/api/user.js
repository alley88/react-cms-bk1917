import http from "utils/request";

export const loginApi = (username,password)=>http.post({
    url:"/ajax/users/login",
    method:"POST",
    data:{username,password}
})