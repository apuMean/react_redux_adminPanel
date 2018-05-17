import React, { Component } from "react";
import { connect } from "react-redux";
import * as addUserAction from "../actions/users";
import {bindActionCreators} from 'redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import validator from 'validator';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      contact: "",
      email: "",
      password: ""
    };
    this.submitData = this.submitData.bind(this);
  }

  submitData() {
    var formData = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      contact: this.state.contact,
      email: this.state.email,
      password: this.state.password
    };
    this.props.userAction.addUser(formData);
  }

  temp=[];
  componentWillReceiveProps(nextProps) {

    if (nextProps.addUserRes !== this.props.addUserRes) {
        this.temp = nextProps.addUserRes ? nextProps.addUserRes : [];
    }
    if(this.temp){
        
        toast.success("User Added Successfully!", {
            position: toast.POSITION.TOP_RIGHT
          });
      
    }
    else{
        toast.error("Error in Adding User !", {
            position: toast.POSITION.TOP_RIGHT
          });
          
    }
  }
  render() {
    return (
      <section className="section">
        <div className="row sameheight-container">
          <div className="col-md-6">
            <div className="card card-block sameheight-item">
              <div className="title-block">
                <h3 className="title"> Add New User </h3>
              </div>
              <form role="form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control underlined"
                    placeholder="Firstname"
                    value={this.props.firstname}
                    onChange={event =>
                      this.setState({ firstname: event.target.value })
                    }
                  />{" "}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control underlined"
                    placeholder="Lastname"
                    value={this.props.lastname}
                    onChange={event =>
                      this.setState({ lastname: event.target.value })
                    }
                  />{" "}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control underlined"
                    placeholder="Email"
                    value={this.props.email}
                    onChange={event =>
                      this.setState({ email: event.target.value })
                    }
                  />{" "}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control underlined"
                    placeholder="Password"
                    value={this.props.password}
                    onChange={event =>
                      this.setState({ password: event.target.value })
                    }
                  />{" "}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control underlined"
                    placeholder="Contact"
                    value={this.props.contact}
                    onChange={event =>
                      this.setState({ contact: event.target.value })
                    }
                  />{" "}
                </div>

                <button
                  type="button"
                  onClick={this.submitData}
                  className="btn btn-primary btn-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    );
  }
}
function mapStateToProps(state, props) {
    console.log("response",state);
    return {
      addUserRes: state.addUserReducer
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      userAction: bindActionCreators(addUserAction, dispatch)
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
  