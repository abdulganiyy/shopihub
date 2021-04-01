import React, { Component } from "react";
import ProductCard from "./ProductCard/ProductCard";
import classes from "./Products.module.scss";
import { connect } from "react-redux";
import { getProducts } from "../../redux/actions/actions";

class Products extends Component {
  state = {
    products: [],
    filteredProducts: [],
    search: "",
  };

  componentDidMount() {
    this.props.onMount();
    this.setState({
      ...this.state,
      products: [...this.props.products],
    });
  }

  handleInputFilter = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className={classes.container}>
        <div className={classes.searchcontainer}>
          <input
            type="text"
            name="search"
            placeholder="filter by name"
            value={this.state.name}
            onChange={this.handleInputFilter}
          />
        </div>
        <div className={classes.productslist}>
          {this.state.products
            .filter((item) => {
              return item.name
                .toLowerCase()
                .includes(this.state.search.toLowerCase());
            })
            .map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  img={product.images[0]}
                  name={product.name}
                  price={product.price}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: () => dispatch(getProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
