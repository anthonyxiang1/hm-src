import React from "react";
import { Route } from "react-router-dom";
import Landing from '../pages/Landing';
import Account from '../pages/Account';
import Registration from '../pages/Registration';
import Add from '../pages/Add';
import Create from '../pages/Create';
import TeamPage from '../pages/TeamPage';
import Hackathon from '../pages/Hackathon';
import Profile from '../pages/Profile';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path='/' component={Landing} />
      <Route path="/account" exact component={Account} />
      <Route path="/register" exact component={Registration} />
      <Route path="/home" exact component={Home} />
      <Route path="/profile/:id" exact component={Profile}/>
      <Route path="/hackathon/:name" exact component={Hackathon}/>
      <Route path="/create" exact component={Create}/>
      <Route path="/add" exact component={Add}/>
      <Route path="/team/:id" exact component={TeamPage}/>
      <Route path="/team" exact component={NotFound}/>
      <Route path="/hackathon" exact component={NotFound} />
      <Route path="/profile" exact component={NotFound} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
