import {userLoginTypes,userListTypes} from "./usersTypes";
import {createAction} from "redux-actions";
import {loginApi,userListApi} from "api/user"
import {message} from "antd"
export const loginAsyncAction = (username,password)=>{
    let loginAction = createAction(userLoginTypes,data=>data)
   
    return async (dispatch)=>{
        let data = await loginApi(username,password);

        if(data.data.code == 1){
            message.success("登陆成功",1.5)
            sessionStorage.setItem("userInfo",JSON.stringify({name:data.data.data.name,urlPic:data.data.data.urlPic}))
            dispatch(loginAction(data.data.data));

            return data.data.code;
        }else{
            message.error(data.data.info)
        }   
    }
}

export const userListAsyncAction = ()=>{
    let userListAction = createAction(userListTypes,(total,userList)=>({total,userList}))
    return async (dispatch)=>{
        let data = await userListApi();
        sessionStorage.setItem("total",data.data.data[1]);
        sessionStorage.setItem("userList",JSON.stringify(data.data.data[0]))
        dispatch(userListAction(data.data.data[1],data.data.data[0]))
    }
}