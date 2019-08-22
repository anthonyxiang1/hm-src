import React from "react";
import { Route } from "react-router-dom";
import Landing from '../pages/Landing';
import Account from '../pages/Account';
import Registration from '../pages/Registration';
import Add from '../pages/Add';
import Create from '../pages/Create';
import TeamPage from '../pages/TeamPage';
import Hackathon from '../pages/Hackathon';

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path='/' component={Landing} />
      <Route path="/account" exact component={Account} />
      <Route path="/register" exact component={Registration} />
      {/* <Route path="/home" exact component={Home} />
      
      <Route path="/profile/:id" exact component={Profile}/> */}
      <Route path="/hackathon/:name" exact component={Hackathon}/>
      <Route path="/create" exact component={Create}/>
      <Route path="/add" exact component={Add}/>
      <Route path="/teampage" exact component={TeamPage}/>
      </React.Fragment>
    );
  }
}

export default ReactRouter;
