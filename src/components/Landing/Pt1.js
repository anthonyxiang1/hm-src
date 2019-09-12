import React from 'react';
import {Button} from 'react-bootstrap';

class Pt1 extends React.Component {
  render() {
  return (

    <div className="center" id="about-box">
      <div className="pt1">
        <h1>
          Hacker Matcher
        </h1>

        <img
          alt="gif"
          id="gif"
          src={require("./assets/landing_demo.gif")}
        />

        <h3>
          
          Find your perfect hackathon team
        </h3>
        <br></br>

        <Button className="btn btn-primary btn-lg" id="scrollToSignup" onClick={()=>window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}>
          Try It Now!
        </Button>
      </div>
    </div>
  );
  }
}

export default Pt1;