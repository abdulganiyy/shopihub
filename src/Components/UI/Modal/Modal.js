import classes from "./Modal.module.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Modal extends Component {
  render() {
    let modalClasses = [classes.modal];

    if (this.props.show) {
      modalClasses.push(classes.Open);
    }

    return (
      <div className={modalClasses.join(" ")}>
        {this.props.children}
        <p>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Login</Link>
        </p>
      </div>
    );
  }
}

export default Modal;
