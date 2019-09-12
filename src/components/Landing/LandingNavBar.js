import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import MyForm from './MyForm';

class NavigationBar extends React.Component {

  render() {
    return (
          <div className="NavBar">
            <Navbar fixed="top" bg="light" expand="lg">
              <Navbar.Brand href="/">
              <img
              alt=""
              src={require("./assets/favicon.png")}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <span>   </span>
            Hacker Matcher
              </Navbar.Brand>
              
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                </Nav>
                <MyForm/>
                
              </Navbar.Collapse>
            </Navbar>
          </div>
    );
  }
}

export default NavigationBar;