import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import classes from "./Login.module.scss";
import { auth } from "../../../redux/actions/actions";
import { connect } from "react-redux";
class Login extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    formType: "login",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, formType } = this.state;
    this.props.onFormSubmit(name, email, password, formType);
  };

  inputHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  render() {
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p>{this.props.error}</p>;
    }

    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to="/products" />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={classes.formcontainer}>
          {authRedirect}
          {errorMessage}
          <h2>Login Form</h2>
          <div className={classes.inputcontainer}>
            <span className={classes.icon}>
              <i className="fa fa-envelope icon"></i>
            </span>
            <input
              className={classes.inputfield}
              type="text"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.inputHandler}
            />
          </div>

          <div className={classes.inputcontainer}>
            <span className={classes.icon}>
              <i className="fa fa-key icon"></i>
            </span>
            <input
              className={classes.inputfield}
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.inputHandler}
            />
          </div>
          <button type="submit" className={classes.btn}>
            Login
          </button>
          <span className={classes.switch}>
            Haven't signed up yet?<Link to="/signup">Signup</Link>
          </span>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.user.loading,
    error: state.user.error,
    isAuthenticated: state.user.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFormSubmit: (email, password, name, formType) =>
      dispatch(auth(email, password, name, formType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
