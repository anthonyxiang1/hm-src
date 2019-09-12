
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Col, Button, Image, Row, ButtonToolbar } from 'react-bootstrap';
import UserCard from './UserCard'
import TeamCard from './TeamCard'

import axios from 'axios';

class Sec1 extends React.Component {
    constructor(props) {
        super(props);
        this.showAvailable = this.showAvailable.bind(this);
        this.myFunction = this.myFunction.bind(this);

        this.state = {
            hackName: "stuyhacks",
            about: "hellohello",
            address: "100 Nichols Road",
            startDate: "Sept 20",
            endDate: "Jan 28",
            hackLoc: "Stony Brook, NY",
            school: "Stony Brook University",
            propic: "",
          members: [],
          teams:  []   
        };
      }

      componentDidMount(){
          
           var hackathonName = this.props.match.params.name;
           console.log(hackathonName);
           var url = 'https://arcane-fjord-29308.herokuapp.com/hackathons/'+hackathonName;
          axios.get(url)
          .then((res) =>{
              console.log(res);
              var hackathon = JSON.parse(res.data['hackathon']);
              this.setState({
                hackName: hackathon['name'],
                about: hackathon['about'],
                address:hackathon['address'],
                startDate:hackathon['start_date'],
                endDate:hackathon['end_date'],
                hackLoc: hackathon['city']+', '+hackathon['state'],
                school:hackathon['school'],
                propic:hackathon['logo']
            });
          })
        }

    render() {
        
        const {members} = this.state;
        const {teams} = this.state;

        return (
            <div className="sec1">
                <div className="rectanglehack" ></div>

                <Container>
                    <Row>
                        <Col id="namebox " className="namebox col-12" ><strong>{this.state.hackName} @ {this.state.school}</strong></Col>
                    </Row>
                </Container> 
                <Container className="flexbox" >

                    <Row>
                         <Col xs={{span:12}} sm={{span:12}} md={{span:4, order:2}} lg={{span:4, order:2}} xl={{span:4, order:2}}>
                            <img id="hackathonImg"
                                alt="hackathonImg"
                                src={this.state.propic}
                                className="hackathonImg">
                            </img>
                        </Col>
                        <Col id="date" xs={{span:12}} sm={{span:12}} md={{span:4, order:1}} lg={{span:4, order:1}} xl={{span:4, order:1}} className="date">{this.state.startDate}-{this.state.endDate}</Col>
                        <Col id="location" xs={{span:12}} sm={{span:12}} md={{span:4, order:3}} lg={{span:4, order:3}} xl={{span:4, order:3}} className="location">{this.state.hackLoc}</Col>
                    </Row>
                </Container>

                <br></br>

                <Container className="flexbox" >
                    {this.state.about}
                </Container>

                <Container className="addbtn" >
                    <Row className="justify-content-center addtxt">
                        <Col>
                            <center>
                                <h1 className="addyourself">Add Yourself To This Matching Pool!</h1>
                            </center>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col>
                            <img
                                id="downarr"
                                src={require("./downarrow.png")}
                                alt="clickme"
                                className="downarr">

                            </img>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col>
                            <center>
                                <Button type="button" id="addme" className="addme" variant="primary" size="lg" onClick={this.myFunction.bind(this)}>I'm Going!</Button>
                            </center>
                        </Col>
                    </Row>
                </Container>
                <ButtonToolbar className="btn-duo justify-content-center">
                    <Button type="button" id="matchme" 
                            className="matchme" variant="primary"  size="lg"
                            onClick={this.showAvailable.bind(this)} 
                            style={{display:"None"}} 
                            
                            >Match Me!
                    </Button>
                    <Button type="button" id="alreadymatched" 
                        className="alreadymatched" variant="secondary" size="sm"
                        onClick={this.showAvailable.bind(this)} 
                         
                        style={{display:"None"}} 
                        
                        >I Already Have A Team!</Button>
                      
                      
                      
    
                </ButtonToolbar>
                <center className="addedtxt" id="addedtxt" style={{display:"None"}} >
                    <h1>You Have Been Added!</h1>
                </center>
                
                <Container id="matchedUsers" className="matchedUsers" style={{display:"None"}}  >
                    <Row>
                    <Col xs={{span:12}} sm={{span:12}} md={{span:12}} lg={{span:6}} xl={{span:6}}>
                        <Row>
                            <h2><strong>Top Matched Users</strong></h2>
                        </Row>

                        {members.map((item, index) => ( 

                          <Row>
                            <UserCard firstname={item.firstname} lastname={item.lastname} school={item.school} major={item.major}
                            goals={item.goals}  tags={item.preferences} propic={item.propic} id={item.id}
                            />
                        </Row>
                      ))}

                        
                    </Col>
                    <Col xs={{span:12}} sm={{span:12}} md={{span:12}} lg={{span:6}} xl={{span:6}}>
                        <Row>
                            <h2><strong>Available Teams</strong></h2>
                        </Row>
                        {teams.map((item, index) => ( 
                        <Row>
                        <TeamCard name={item.name} goals={item.goals} propic={item.memberpics} id={item.id}
                        />
                        </Row>
                        ))}
 
                    </Col>
                    </Row>
                   
                    
                        
                
                
                    
                </Container>
                
            </div>
            
        );
    }
   
    myFunction() {
        const $ = window.$;
        console.log("called")
        $("#addme").fadeOut("fast");
        $("#downarr").fadeOut("fast");
        setTimeout(function(){
            $("#matchme").fadeIn("slow");
            $("#alreadymatched").fadeIn("slow");
            $("#addedtxt").fadeIn("fast");
            $('html,body').animate({
                scrollTop: $("#addedtxt").offset().top
             });
        },1000);
    }

    showAvailable(){
        const $ = window.$;
        if(localStorage.auth_token){
            var hackathonName = this.props.match.params.name;
            var config = {
                headers: {'Authorization': 'Bearer ' + localStorage.auth_token.toString()}
            };
            axios.get('https://arcane-fjord-29308.herokuapp.com/hackathons/'+hackathonName+'/addmatch', config)
            .then(res => {
                console.log(res)
                if(res.status === 200){
                    // add to pool success!
                }else if(res.status === 201){
                    // already in pool
                }
                axios.get('https://arcane-fjord-29308.herokuapp.com/hackathons/'+hackathonName+'/findmymatches', config)
                  .then(res => {
                    console.log(res);
                    console.log(res.data);
                    var hackers = res.data['hackers'];
                    console.log(JSON.parse(hackers[0]['hacker']))
                    for (var i=0;i<hackers.length;i++) {
                        this.setState({ members: this.state.members.concat([{firstname: JSON.parse(hackers[i]['hacker'])['firstname'],
                                                                    lastname: JSON.parse(hackers[i]['hacker'])['lastname'],
                                                                    goals: JSON.parse(hackers[i]['hacker'])['goals'],
                                                                    email: JSON.parse(hackers[i]['hacker'])['email'],
                                                                    id: JSON.parse(hackers[i]['hacker'])['id'],
                                                                    major: JSON.parse(hackers[i]['hacker'])['major'],
                                                                    school: JSON.parse(hackers[i]['hacker'])['school'],
                                                                    preferences: JSON.parse(hackers[i]['hacker'])['preferences'],
                                                                    propic: JSON.parse(hackers[i]['hacker'])['profile_pic']}]) });  
                    }
                    var teams = res.data['teams'];
                    //for team

                    console.log(JSON.parse(teams[0])['members'].length)
                    console.log(JSON.parse(JSON.parse(teams[0])['members'][0]))
                    console.log("PUT YOUR CODE HERE")
                    
                    console.log(JSON.parse(JSON.parse(teams[0])['members'][0])['profile_pic'])

                    for (var i=0;i<teams.length;i++) {
                        const memberArr = [];

                        for (var j=0;j<JSON.parse(teams[i])['members'].length; j++)  {
                            memberArr.concat(JSON.parse(JSON.parse(teams[i])['members'][j])['profile_pic'])
                        }
                        console.log(memberArr)

                        this.setState({ teams: this.state.teams.concat([{
                            name: JSON.parse(teams[i])['name'],
                            goals: JSON.parse(teams[i])['goals'],
                            id: JSON.parse(teams[i])['id'],
                            memberpics: memberArr
                        }])
                        })
                        
                    };

                    console.log("this is first team")
                    console.log(this.state.teams[0])
                    console.log(this.state.teams[0].memberpics)


                     })


            }).catch((err) =>{      //todo: handle error
                console.log(err);
            });
        }


        $("#matchedUsers").fadeIn("slow");
        $('html,body').animate({
            scrollTop: $("#matchedUsers").offset().top - 100
         });
    }
}
export default withRouter(Sec1);