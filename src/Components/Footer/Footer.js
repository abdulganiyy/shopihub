import classes from "./Footer.module.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className={classes.footer}>
        <div>
          <h3>Contact us</h3>
          <p>Plot 4 Muibi Oyebamiji Street,Akobo,Ibadan</p>
          <p>
            <span>
              <i class="fab fa-twitter"></i>
            </span>
            <span className={classes.insta}>
              <i class="fab fa-instagram"></i>
            </span>
          </p>
        </div>
        <div>
          <h3>Support</h3>
          <ul>
            <li>
              <Link>About us</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
