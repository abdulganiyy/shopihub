import classes from "./Button.module.scss";
import React from "react";

const button = (props) => {
  return (
    <button className={classes.button} onClick={props.clickHandler}>
      {props.children}
    </button>
  );
};

export default button;
