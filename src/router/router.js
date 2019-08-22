import React from "react";
import { Route } from "react-router-dom";
import Landing from '../pages/Landing';
import Account from '../pages/Account';

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Landing} />
        <Route path="/account" component={Account} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
