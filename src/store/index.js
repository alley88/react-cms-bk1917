import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import user from "./reducers/user"
import books from "./reducers/books"
import {composeWithDevTools} from "redux-devtools-extension"

const reducers = combineReducers({
    user,
    books
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)));

export default store;