import React, { Component } from "react";
import Toolbar from "../../Components/Toolbar/Toolbar";
import SideDrawer from "../../Components/SideDrawer/SideDrawer";

export default class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerHandler = () => {
    this.setState({
      ...this.state,
      showSideDrawer: !this.state.showSideDrawer,
    });
  };
  render() {
    return (
      <div>
        <Toolbar clicked={this.sideDrawerHandler} />
        <SideDrawer show={this.state.showSideDrawer} />
        <main>{this.props.children}</main>
      </div>
    );
  }
}
