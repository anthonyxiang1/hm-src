import React from "react";
import {Form, Button, Col, Row, Container, Modal} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import ReactSearchBox from 'react-search-box'
import axios from 'axios';

class Create1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
    this.handleCreateChange = this.handleCreateChange.bind(this);
    this.deleteName = this.deleteName.bind(this);

    this.state = {
      modalPop: false,
      hack: "",
      idea: "",
      goal: "",
      name: "",
      members: [],
      hackathons: [],
      available: [
          {id: "5d5f8180c7e5b84e5e9a4d1a", value: "Brooklyn Zhang"},
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
  }

  componentDidMount() {
    var url='https://arcane-fjord-29308.herokuapp.com/hackathons/get';
    var config = {
      headers: {'Authorization': 'Bearer ' + localStorage.auth_token.toString()}
    };
    axios.get(url, config)
      .then(res => {
        console.log(res);
        var hackathons = res.data['hackathons'];
        this.setState({hackathons: hackathons})
      });
  }

  render() {
    const {errMsg, modalPop} = this.state;
    const {available} = this.state;  // write the query here, make a constant of available hackers

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
        <div className="create">
          <Container>      
          <h1>Create a Team</h1>
          <br></br>
          <small>{errMsg}</small>
          <br></br>
            <Col > 
              <Row >
              <Form className="crea" onSubmit={this.handleCreateSubmit}>
                  <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Which Hackathon?</Form.Label>
                        <Form.Control as="select" name="hack" value={this.state.hack} onChange={this.handleCreateChange}>
                          <option>Choose...</option>
                            {this.state.hackathons.map((item, index) => ( 
                              <option>{item}</option>
                          ))}
                        </Form.Control>
                    </Form.Group>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Project Idea</Form.Label>
                                    <textarea className="form-control" rows="5"
                                    type="text"
                                    name="idea"
                                    placeholder="What is your project about? What are you using to make it? What skill level are you looking
                                    for in a possible teammate?" 
                                    value={this.state.idea}
                                    onChange={this.handleCreateChange}
                                    ></textarea>
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
                                    if (this.state.members.length < 3 && this.state.members.indexOf(record) === -1)
                                    this.setState({ members: this.state.members.concat(record) })}}
                    />
                    </div>

                    <MemberTags vals={this.state.members}/>
                    <br></br>
                    <Button variant="outline-danger" size="sm" onClick={() => this.deleteName()}>Remove Last Added</Button>
                    </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>How important is winning the competition to your team?</Form.Label>
                    <Form.Control as="select" name="goal" value={this.state.goal} onChange={this.handleCreateChange}>
                        <option>Choose...</option>
                        <option>Not that important</option>
                        <option>A bit important</option>
                        <option>Somewhat important</option>
                        <option>Very important</option>
                        <option>The most important</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Team Name</Form.Label>
                    <Form.Control name="name" placeholder="405 Found" value={this.state.name} onChange={this.handleCreateChange}>
                        
                    </Form.Control>
                </Form.Group>

                <Button variant="success" type="submit">
                  Create
                </Button>
              </Form> 
            </Row>
                
            </Col>
          </Container>
          <div className="bottom"></div>
        </div>
       
        );
      }

      handleCreateChange(event){
        this.setState({
          [event.target.name]: event.target.value
        });
        
        var hackathonSelected = this.state.hack;
        console.log(this.state.hack)
        var url = "https://arcane-fjord-29308.herokuapp.com/hackathons/"+hackathonSelected+"/getmatch";
        var config = {
          headers: {'Authorization': 'Bearer ' + localStorage.auth_token.toString()}
        };
        axios.get(url, config)
          .then(res => {
            console.log(res);
            var hackers = res.data['hackers'];
            this.setState({available: hackers}) // doesnt work, reactsearchbox doesn't rerender on changing available hackers

            var queries = [];
            for(var i = 0; i < hackers.length; i++){
              var hacker = hackers[i];
              var query = {
                'key': i,
                'value': hacker['value']
              }
              queries.push(query);
            }
            this.setState({
              available: queries
            });
          });
      };

  handleCreateSubmit(event){
    event.preventDefault();
        //if (this.state.hack !== "" && this.state.idea !== "" && this.state.goal !== "" && this.state.name !== ""){
        //  console.log(this.state);
          console.log('create clicked - next is frontend fields');
          var hackathonSelected = this.state.hack;
          var url = "https://arcane-fjord-29308.herokuapp.com/teams/new";
          var config = {
            headers: {'Authorization': 'Bearer ' + localStorage.auth_token.toString()}
          };

          var members = this.state.members;
          var members_arr = [];
          for(var i = 0; i < members.length; i++){
            if(typeof members[i]['id'] == 'string'){
              members_arr.push(members[i]['id']);
            }
          }
          
          var data = {
            'hackathon': hackathonSelected,
            'members': members_arr || [],
            'name': this.state.name || '',
            'idea': this.state.idea || '',
            'goal': this.state.goal || '',
            'capacity': 4
            //'details': details
          }
          var teamId = JSON.parse(res.data)['team_id']
          console.log(data);

          
          axios.post(url, data, config)
            .then(res => {

              if (res.status_code === 402) {
                alert("one or more users are not registered for this hackathon or is in another team in this hackathon")
              }
              else{
              console.log(res);
              this.props.history.push("/team/" + teamId)

              }
            })
        //}
  }

  deleteName(event){
    let members = this.state.members.slice();  
      members.splice(members.length-1, 1);
      this.setState({members}); 
  };

}

export default withRouter(Create1);
