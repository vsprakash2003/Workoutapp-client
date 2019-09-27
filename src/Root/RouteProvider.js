/* eslint-disable import/prefer-default-export */
import React, { Component, createContext } from "react";
import PropTypes from "prop-types";
import { Routes } from "./Routes";

export const { Provider, Consumer } = createContext();

export class RouteProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarContent: {
        sideBarName: this.sideBarName,
        sideBarIcon: this.sideBarIcon
      }
    };
  }

  componentWillMount() {
    this.getSideBarContent();
  }

  getSideBarContent = () => {
    const sideBarContent = Routes.map(route => ({
      sideBarName: route.navbarName,
      sideBarIcon: route.icon
    }));
    this.setState({ sideBarContent });
  };

  render() {
    const { sideBarContent } = this.state;
    const { children } = this.props;
    return <Provider value={sideBarContent}>{children}</Provider>;
  }
}

RouteProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired
};
