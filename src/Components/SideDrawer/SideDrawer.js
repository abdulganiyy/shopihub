import classes from "./SideDrawer.module.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SideDrawer extends Component {
  render() {
    let sideDrawerClasses = [classes.SideDrawer];

    if (this.props.show) {
      sideDrawerClasses.push(classes.Open);
    }
    return (
      <div className={sideDrawerClasses.join(" ")}>
        <div>I-HUB</div>
        <div>
          <ul>
            <li>About</li>
            <li>Policy</li>
            <li>FAQ</li>
            {this.props.isAuthenticated ? (
              <>
                <li>
                  <Link to="/cart">cart</Link>
                </li>
                <li>
                  <Link to="/logout">logout</Link>
                </li>
              </>
            ) : (
              <>
                <li className={classes.Login}>
                  <Link to="/login">LOGIN</Link>
                </li>
                <li className={classes.Signup}>
                  <Link to="/signup">SIGN UP</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.token !== null,
  };
};

export default connect(mapStateToProps)(SideDrawer);
