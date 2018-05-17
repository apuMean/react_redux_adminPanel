import { combineReducers } from 'redux';
import usersReducer from './userlist';
import addUserReducer from './adduser';
import delUser from './deluser';
const rootReducer = combineReducers({
    usersReducer:usersReducer,
    addUserReducer:addUserReducer,
    delUserReducer:delUser
})

export default rootReducer;
