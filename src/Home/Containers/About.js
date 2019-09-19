import React, { Component } from "react";
import { withRouter } from "react-router";

// eslint-disable-next-line react/prefer-stateless-function
class About extends Component {
  render() {
    return (
      <div className="container">
        <h4 className="center"> My Workout App</h4>
        <p>lorem ipsum</p>
      </div>
    );
  }
}

export default withRouter(About);
