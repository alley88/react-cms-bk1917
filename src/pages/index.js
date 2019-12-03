import Loadable from "react-loadable"
import Loading from "common/loading";


export const Home = Loadable({
    loader:_=>import("./home"),
    loading:Loading
})

export const BooksList = Loadable({
    loader:_=>import("./books/booksList"),
    loading:Loading
})

export const AddBooks = Loadable({
    loader:_=>import("./books/addBooks"),
    loading:Loading
})

export const Login = Loadable({
    loader:_=>import("./login"),
    loading:Loading
})

export const UserList = Loadable({
    loader:_=>import("./users/userList"),
    loading:Loading
})

export const UserInfo = Loadable({
    loader:_=>import("./users/userInfo"),
    loading:Loading
})