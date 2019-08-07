import React, { Component } from "react";
import { SideNavBar } from "../StyledComponents/SideNavBar";

export default class SideNav extends Component {
  loadSideNavBar = () => {
    return <SideNavBar />;
  };

  render() {
    return <div className="sidenav-bar-container">{this.loadSideNavBar()}</div>;
  }
}
