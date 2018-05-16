import React, { Component } from "react";
import { connect } from "react-redux";
import * as userlistAction from "../actions/users";
import {bindActionCreators} from 'redux'
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  temp = [];
  componentDidMount() {
    this.props.userAction.getUserList();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.users !== this.props.users) {
      this.temp = nextProps.users ? nextProps.users : [];
    }
  }
  render() {
    const temp = this.props.users;
    // const selectuser = this.props.selectUser;
    const data = this.temp.map(function(user) {
      return (
           <tr key={user.id} >
           <td >{user.firstname}</td>
           <td>{user.lastname}</td>
           <td>{user.email}</td>
           <td>{user.contact}</td>
       </tr>
      );
    });
    return(
    <table className="table table-bordered table-hover" >
        <tbody >
        <tr >
             <th><strong>firstname</strong></th>
            <th><strong>lastname</strong></th>
            <th><strong>email</strong></th>
            <th><strong>contact</strong></th>
            </tr>
            {data}
        </tbody>
    </table>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    users: state.usersReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    userAction: bindActionCreators(userlistAction, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
