import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authLogout } from "../../redux/actions/actions";

class Logout extends Component {
  componentDidMount() {
    this.props.onMount();
  }
  render() {
    return <Redirect to="/products" />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: () => dispatch(authLogout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
