import classes from "./Cart.module.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getCart } from "../../redux/actions/actions";
import CartItem from "./CartItem/CartItem";
import FlutterPay from "../Payment/FlutterPay";
import { Link } from "react-router-dom";

class Cart extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    this.props.onMount();
    this.setState({
      ...this.state,
      cart: [...this.props.cart],
    });
  }

  render() {
    let cart = this.state.cart.map((item) => {
      return (
        <CartItem name={item.name} img={item.images[0]} price={item.price} />
      );
    });

    let totalAmount = this.state.cart.reduce((prev, item) => {
      return prev + parseInt(item.price);
    }, 0);

    return (
      <div className={classes.cart}>
        <h2>Shopping cart</h2>
        <div>{cart}</div>
        <div className={classes.cartfoot}>
          <span>
            <Link to="/products">
              <i style={{ padding: "0 .5rem" }} class="fas fa-arrow-left"></i>
              Continue shopping
            </Link>
          </span>
          <span>
            <span
              style={{
                padding: "0 .5rem",
              }}
            >
              Total:
            </span>
            ₦{totalAmount.toLocaleString()}
          </span>
          <span>
            <FlutterPay />
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.products.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: () => dispatch(getCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
