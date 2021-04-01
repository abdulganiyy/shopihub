import React, { Component } from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import Layout from "./Containers/Layout/Layout";
import Landingpage from "./Components/LandingPage/LandingPage";
import SignUp from "./Components/Forms/SignUp/SignUp";
import Login from "./Components/Forms/Login/Login";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import { connect } from "react-redux";
import { checkAuthState } from "./redux/actions/actions";
import Logout from "./Components/Logout/Logout";

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.onMount();
  }
  render() {
    return (
      <>
        <Layout>
          <Switch>
            <Route path="/" exact component={Landingpage} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </Layout>
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
    onMount: () => dispatch(checkAuthState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
