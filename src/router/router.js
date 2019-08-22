import React from "react";
import { Route } from "react-router-dom";
import Landing from '../pages/Landing';

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Landing} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
