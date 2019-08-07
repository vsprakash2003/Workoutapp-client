import React from "react";
import { Route, IndexRoute, Redirect } from "react-router";
import Home from "./Home/Home";
import WorkoutList from "./features/WorkoutList/Containers/Workout";

export default (
  <Route path="/" component={Home}>
    <IndexRoute component={WorkoutList} />
    <Route path="workout" component={WorkoutList} />
    <Redirect from="*" to="workout" />
  </Route>
);
