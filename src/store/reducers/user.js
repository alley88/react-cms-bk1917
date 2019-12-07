import {handleActions} from "redux-actions";
import {userLoginTypes,userListTypes} from "actions/user/usersTypes"
const defaultState = {
    userInfo: JSON.parse(localStorage.getItem('userInfo'))||{},
    total:0,
    userList: JSON.parse(sessionStorage.getItem('userList'))||[]
}

export default handleActions({
    [userLoginTypes]:(state,action)=>{
        let userState = Object.assign({},state);
        userState.userInfo = {name:action.payload.name,urlPic:action.payload.urlPic}
        return userState;
    },
    [userListTypes]:(state,action)=>{
        let listState = JSON.parse(JSON.stringify(state));
        listState.total = action.payload.total;
        listState.userList = action.payload.userList;
        return listState;
    }
},defaultState)