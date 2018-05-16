import { combineReducers } from 'redux';
import usersReducer from './userlist'
const rootReducer = combineReducers({
    usersReducer:usersReducer
})

export default rootReducer;
