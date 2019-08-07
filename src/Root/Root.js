import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import About from "../Home/About";
import WorkoutList from "../features/WorkoutList/Containers/Workout.Container";
/* import SideNav from '../features/SideNavBar/Containers/SideNav' */

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WorkoutList} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    );
  }
}
