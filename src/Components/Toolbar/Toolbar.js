import React, { Component } from "react";
import classes from "./Toolbar.module.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Toolbar extends Component {
  state = {};
  render() {
    return (
      <div className={classes.Toolbar}>
        <div className={classes.Logo}>
          <Link to="/">I-HUB</Link>
        </div>
        <div className={classes.Icon} onClick={this.props.clicked}>
          <i class="fas fa-align-justify"></i>
        </div>
        <div className={classes.Nav}>
          <ul className={classes.NavigationItems}>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Policy</Link>
            </li>
            <li>
              <Link>Contact us</Link>
            </li>
            {this.props.isAuthenticated ? (
              <>
                <li>
                  <Link to="/cart">
                    <i class="fas fa-shopping-cart"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/logout">logout</Link>
                </li>
              </>
            ) : (
              <>
                {" "}
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

export default connect(mapStateToProps)(Toolbar);
