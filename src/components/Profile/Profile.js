import React from "react";
import {Container, Row, Col, Button, Card, ProgressBar} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import axios from 'axios';

class Profile1 extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          username: "Bobby Fisher",
          educationLvl: "college",
          year: "2022",
          major: "Applied Mathematics",
          school: "Georgia Tech",
          propic: "http://api.randomuser.me/portraits/men/28.jpg",
          goals: ['to win the competition', 'make new friends', 'visit friends'],
          about: "Hey everyone! I am a frontend developer specializing in ReactJS and data visualizations with D3. I'd love to help any team that uses these in their project.",
          url: ["http://linkedin.com/in/jaketrent", "http://twitter.com", 'github.com', 'facebook.com'],
          languages: [{name: "Java", skill: 8}, {name: "Python", skill: 3}],
          tech: [{name: "Azure", skill: 8}, {name: "AWS", skill: 3}],
          fields: ["healthcare", "education technology"],
          interests: ["Data visualization", "Machine Learning"],
          hackathons: 4,
        };
        this.baseState = this.state;
      }

      componentDidMount() {
        var userId = this.props.match.params.id;
        axios.get(`https://arcane-fjord-29308.herokuapp.com/profile/`+userId)
          .then(res => {
            console.log(res);
            console.log(res.data);
            var data = JSON.parse(res.data.user);
            console.log(data)
            this.setState({
                gender: data['profile']['gender'],
                username: data['firstname']+ ' '+data['lastname'],
                year: data['profile']['gradYear'],
                major: data['profile']['major'],
                school: data['profile']['school'],
                languages: data['preferences']['languages'] || [],
                 tech: data['preferences']['technologies'] || [],
                 fields: data['preferences']['fields'] || [],
                 interests: data['preferences']['interests'] || [],
                 hackathons: data['profile']['numOfHackathons'] || 0,
                 goals: data['preferences']['goals'] || 0,
                 propic: data['profile_pic']
            });
          })
    } 
    
  render() {

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 2
            }}
        />
    );

    const SocialMedia = ({vals}) => (
        <div>
            {
            vals.map((item) => ( 
        <SocialIcon url={item} style={{ height: 50, width: 50}}/>
            ))
            }
        </div>
    );

    const MappingList = ({vals}) => (
        <div>
        {
            vals.map((item, index) => ( 
            <p>{index+1}. {item}</p> 
            ))
        }
        </div>
    )

    const Mapping = ({vals}) => (
            <div>
            {

            vals.map((item, index) => ( 
                <p key={index}> {index+1}. {item.name} <ProgressBar now={item.skill} label={`${item.skill}/10`} max={10}/></p> 
                ))
            }
            </div>
    )

        return (
            
        <div className="profile">
              {console.log(this.state) } 
        <Container className="boxes">      
            <Row >
                <Col className="info" sm={4}>
                    {/* <div className="accent">Interests</div> */}
                    <img
                        alt="propic"
                        src={this.state.propic}
                        className="avatar"
                    />
                    <h1 >{this.state.username}</h1>
                    <SocialMedia vals={this.state.url}/>
                    <br></br>
                    <div >
                    <Button variant="primary" onClick = {this.handleClick}>View Teams</Button>
                    </div>
                    <br></br>

                    {/* <Button variant="info" size="lg" onClick = {this.handleClick}>Start Messaging</Button> */}

                </Col>

                <Col className ="about">
                    <div className="texts">
                    <h4 className="left">Education:  {this.state.educationLvl}</h4><h4 className="right">Year: {this.state.year}</h4>​
                    <h3></h3>
                    <h4 className="left">Major:  {this.state.major}</h4><h4 className="right">School: {this.state.school}</h4>​
                    
                    <ColoredLine color="black"/>
                        <div className="text-center">
                        {this.state.goals[0]}, {this.state.goals[1]}, {this.state.goals[2]}
                        </div>
                    <ColoredLine color="black"/>
                    
                        {this.state.about}
                    </div>
                    
                </Col>
            </Row>

            <Row>
                <Col sm={4}>
                    <Card className="center w-75">
                    <Card.Header><strong>Languages</strong></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Mapping vals={this.state.languages}/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card className="center w-75">
                    <Card.Header><strong>Technologies</strong></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Mapping vals={this.state.tech}/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card className="center w-75">
                    <Card.Header><strong>Hackathons</strong></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {this.state.hackathons}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="preferences">
                <div className="accent">Interests</div>
                    <MappingList vals={this.state.interests}/>
                </Col>
                <Col className="preferences">
                <div className="accent">Fields</div>
                <MappingList vals={this.state.fields}/>
                    
                </Col>
            </Row>
        </Container>

            <div className="bottom"></div>

    </div>
        );
    }
    }

export default withRouter(Profile1);