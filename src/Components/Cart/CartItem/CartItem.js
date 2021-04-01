import classes from "./CartItem.module.scss";
import React, { Component } from "react";

class CartItem extends Component {
  render() {
    return (
      <div className={classes.cartitem}>
        <img src={this.props.img} name alt={this.props.name} />
        <div>{this.props.name}</div>
        <div>₦{parseInt(this.props.price).toLocaleString()}</div>
      </div>
    );
  }
}

export default CartItem;
