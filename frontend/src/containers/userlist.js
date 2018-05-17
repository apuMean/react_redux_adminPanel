import React, { Component } from "react";
import { connect } from "react-redux";
import * as userlistAction from "../actions/users";
import { bindActionCreators } from "redux";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: null,
      pageCount: 10
    };
  }
  temp = [];
  res = [];
  componentDidMount() {
    this.props.listAction.getUserList();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.users !== this.props.users) {
      this.temp = nextProps.users ? nextProps.users : [];
    }
    //toaster on delete User
    if (nextProps.delResponse !== this.props.delResponse) {
      this.res=nextProps.delResponse.status?1:2;
    }
  
  if(this.res){
    if (this.res==1) {
      toast.success("User Deleted Successfully!", {
        position: toast.POSITION.TOP_RIGHT
      });
    
    } else if(this.res==2) {
      toast.error("Error in Deleting User !", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }
  }

  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.state.perPage);
  
    this.setState({ offset: offset }, () => {
      // var  data= {limit: this.props.perPage, offset: this.state.offset}
      this.props.listAction.getUserList();
    });
  };
  render() {
    var btnStyle = {
      borderRadius: 50
    };
    const temp = this.props.users;
    const deleteuser = this.props.deleteAction.deleteUser;
    const data = this.temp.map(function(user) {
      return (
        <tr key={user.id}>
          <td>{user.firstname}</td>
          <td>{user.lastname}</td>
          <td>{user.email}</td>
          <td>{user.contact}</td>
          <td>
            <button
              type="button"
              style={btnStyle}
              className="btn btn-warning fa fa-edit"
              data-toggle="modal" data-target="#exampleModal"
            />
            <button
              type="button"
              style={btnStyle}
              className="btn btn-danger fa fa-trash-o"
              onClick={() => deleteuser(user.id)}
            />
          </td>
        </tr>
      );
    });
    return (
      <div>
        <table className="table table-bordered table-hover">
          <tbody>
            <tr>
              <th>
                <strong>FIRSTNAME</strong>
              </th>
              <th>
                <strong>LASTNAME</strong>
              </th>
              <th>
                <strong>EMAIL</strong>
              </th>
              <th>
                <strong>CONTACT</strong>
              </th>
              <th>
                <strong>EDIT/DELETE</strong>
              </th>
            </tr>
            {data}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={<a >...</a>}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"myPage"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
        <ToastContainer />
        
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  // debugger;
  console.log(state.delUserReducer,"state.delUserReducer")
  return {
    users: state.usersReducer,
    delResponse: state.delUserReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    listAction: bindActionCreators(userlistAction, dispatch),
    deleteAction: bindActionCreators(userlistAction, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
