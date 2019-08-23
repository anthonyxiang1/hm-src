import React from "react";
import {Form, Button, Col, Row, Container} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import ReactSearchBox from 'react-search-box'

class Add1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.handleAddChange = this.handleAddChange.bind(this);
    this.deleteName = this.deleteName.bind(this);

    this.state = {
      errMsg: "",
      hackathonchoice: "",
      hackathons: [{hackathon: "hackcewit", name: "404 found"}, {hackathon: "sbuhacks", name: "another name found"}],
      memberList: [{value: "Brooklyn Zhang"}],
      available: [
        
          {id: "5d5f8177c7e5b84e5e9a4d11", value: "Olga Vega"},
          {id: "5d5f7f98090899056c18639b", value: "Jeff Montgomery"},
          {id: "5d5f818cc7e5b84e5e9a4d24", value: "Vildan Erkekli"},
          {id: "5d5f81da22ca71c2e147da34", value: "Julia Watts"},
          {id: "5d5f8176c7e5b84e5e9a4d10", value: "Tony Carroll"},
          {id: "5d5f81e022ca71c2e147da3b", value: "Aiden Skjelstad"},
          {id: "5d5f816cc7e5b84e5e9a4d07", value: "Tilde Kristensen"},
          {id: "5d5f818fc7e5b84e5e9a4d26", value: "Lison Lefevre"},
          {id: "5d5f81de22ca71c2e147da39", value: "Florence Murray"},
          {id: "5d5f8190c7e5b84e5e9a4d27", value: "Niklas Wainio"},
          {id: "5d5f81cf22ca71c2e147da29", value: "Edith Vasquez"},
          {id: "5d5f8172c7e5b84e5e9a4d0d", value: "Carl Jensen"},
          {id: "5d5f818ec7e5b84e5e9a4d25", value: "Daniel Slawa"},
          {id: "5d5f7fb0090899056c1863b1", value: "Violet Wang"},
          {id: "5d5f81ca22ca71c2e147da25", value: "Necati Adal"},
          {id: "5d5f8185c7e5b84e5e9a4d1d", value: "Rosa Armstrong"},
          {id: "5d5f81df22ca71c2e147da3a", value: "Nathan Harcourt"},
          {id: "5d5f7f96090899056c186398", value: "Mark Adams"},
          {id: "5d5f81dd22ca71c2e147da38", value: "Amparo Soto"},
          {id: "5d5f7f97090899056c18639a", value: "Christian Johnston"},
          {id: "5d5f7f9c090899056c18639e", value: "Alena Duval"},
          {id: "5d5f8188c7e5b84e5e9a4d20", value: "Alejandro Ortega"},
          {id: "5d5f7fa0090899056c1863a1", value: "Anna Mendoza"}
        
      ]
    };
    this.baseState = this.state;
  }

  componentDidMount() {
    var url='https://arcane-fjord-29308.herokuapp.com/teams';
    var config = {
      headers: {'Authorization': 'Bearer ' + localStorage.auth_token.toString()}
    };
    axios.get(url, config)
      .then(res => {
        console.log(res);
      });
  }

  render() {
    const {errMsg} = this.state;
    const {available} = this.state;  // write query here for available people
    const {hackathons} = this.state; // get user's teams + hackathon name - list of objects
    const {memberList} = this.state; // get members on that team - 

    const MemberTags = ({vals}) => (
      <div>
      {
      vals.map((item, index) => ( 
          <Button key={index} variant="info" size="sm" disabled>{item.value}</Button>
          ))
      }
      </div>
      )

        return (
        <div className="add">
          <Container>      
          <h1>Add to Team</h1>
          <br></br>
          <small>{errMsg}</small>
          <br></br>
            <Col > 
              <Row >
              <Form className="crea" onSubmit={this.handleAddSubmit}>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Which Team?</Form.Label>
                  <Form.Control as="select" name="hackathonchoice" value={this.state.hackathonchoice} onChange={this.handleAddChange}>
                    <option>Choose...</option>
                      {hackathons.map((item, index) => ( 
                          <option>{item.name} - {item.hackathon}</option>
                      ))}
                  </Form.Control>
                </Form.Group>

                

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Choose Teammates (max 3) </Form.Label>
                    <br></br>
                    <small>(Note: they must select that they are attending this hackathon)</small>
                    <br></br>
                    <div class="search">
                      <span class="fa fa-search"></span>
                      <ReactSearchBox
                      placeholder="Teammate name"
                      data={available}
                      dropDownBorderColor="blue"
                      onFocus={(event) =>  event.target.value = null}
                      onSelect={(record) => {
                                    if (memberList.length < 3 && memberList.indexOf(record) === -1)
                                    this.setState({ memberList: this.state.memberList.concat(record) })}}
                    />
                    </div>
                    
                    <MemberTags vals={memberList}/>
                    <br></br>
                    <Button variant="outline-danger" size="sm" onClick={() => this.deleteName()}>Remove Last Added</Button>
                    </Form.Group>

                <Button variant="success" type="submit">
                  Add Teammates
                </Button>
              </Form> 
            </Row>
                
            </Col>
          </Container>
          <div className="bottom"></div>
        </div>
       
        );
      }

  handleAddChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAddSubmit(event){
    event.preventDefault();
    if (this.baseState.memberList.length < this.state.memberList.length && this.state.hackathonchoice != ""){
      //console.log(this.state)
      var hackathonSelected = "hackPrinceton";
      var url = "https://arcane-fjord-29308.herokuapp.com/teams/"+hackathonSelected+"add";
      var config = {
        headers: {'Authorization': 'Bearer ' + localStorage.auth_token.toString()}
      };
      var members = ['5d5ace37432fa135145b2c81'];
      var teamid = '5d5aeea6f347617e9abd48ae';
      var data = {
        'teamid': teamid,
        'members': members
      }
      axios.post(url, data, config)
        .then(res => {
          console.log(res);
        });
    }else{
      alert("fill in all fields");
    } 
  };

  deleteName(event){
    let memberList = this.state.memberList.slice();
      if (this.baseState.memberList.length < this.state.memberList.length) {
      memberList.splice(memberList.length-1, 1);
      this.setState({memberList}); 
      }
  };
}

export default withRouter(Add1);
