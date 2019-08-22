import React from "react";
import { Route } from "react-router-dom";
import Landing from '../pages/Landing';
import Account from '../pages/Account';
import Registration from '../pages/Registration';

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Landing} />
        <Route path="/account" component={Account} />
        <Route path="/register" exact component={Registration} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
