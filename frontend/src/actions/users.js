import axios from 'axios';
import * as ActionType from "../constants/constants";
import thunk from 'redux-thunk';



export function getUserList() {
  return function(dispatch, getState) {
    axios.get("http://localhost:4000/api/users/getUsers")
      .then(res => {
        return dispatch({ type: ActionType.USER_LIST, payload: res.data.data });
      })
      .catch(error => {
        throw error;
      });
  };
}
