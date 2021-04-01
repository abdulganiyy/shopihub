import React, { Component } from "react";
import classes from "./ProductCard.module.scss";
import Button from "../../UI/Button/Button";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/actions/actions";
import Modal from "../../UI/Modal/Modal";

class ProductCard extends Component {
  state = {
    showModal: false,
  };
  handleCart = () => {
    if (!this.props.isAuthenticated) {
      this.setState({
        ...this.state,
        showModal: true,
      });
    } else {
      this.props.onAddToCart(this.props.id);
    }
  };
  render() {
    return (
      <>
        <Modal show={this.state.showModal}>You are not yet logged in</Modal>
        <div className={classes.productcard}>
          <img src={this.props.img} alt={this.props.name} />
          <span>₦{parseInt(this.props.price).toLocaleString()}</span>
          <span>{this.props.name}</span>
          <Button clickHandler={this.handleCart}>Add to cart</Button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
