import React from "react";
import classes from "./LandingPage.module.scss";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const landingpage = (props) => {
  return (
    <>
      <div className={classes.LandingPage}>
        <div className={classes.HeroContent}>
          <h1>Get Free Wristwatch when you purchase your first product</h1>
          <div>
            <Link to="/products">Shop Now</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default landingpage;
