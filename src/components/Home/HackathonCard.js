import React from 'react';
import { Container, Col, Button, Image, Row, ButtonToolbar } from 'react-bootstrap';
class HackathonCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hackInfo: (props.hackInfo != null) ? props.hackInfo: '------', 
            
        };
      }

      componentDidMount() {
        console.log(this.state)
      }

    render() {
        
        return (

            <div className="content row">
            <div className="hackcard col-md-5 offset-md-1">
                <div className="firstinfo">
                  <a href={`/hackathon/${this.state.hackInfo.name}`}><img className="hackImg d-block mx-auto rounded-circle img-fluid" src={this.state.hackInfo.logo}></img></a>
                  <div className="profileinfo">
                      <a href={`/hackathon/${this.state.hackInfo.name}`}><h1>{this.state.hackInfo.name}</h1></a>
                      <i>{this.state.hackInfo.school}</i>
                      <p className="bio">{this.state.hackInfo.start_date} - {this.state.hackInfo.end_date}</p>
                      <p className="bio">{this.state.hackInfo.city}, {this.state.hackInfo.state}</p>
                  </div>
                </div>
            </div>
          </div>

            // <div className="hackathoncard" id="hackathoncard">
            //     <Container>
            //         <Row >
            //             <Col>
            //                 <div className="card shadow">
            //                     <div className="card-body">
            //                         <Row className="align-items-center">
            //                             <div className="hackathonpic">
            //                             <Col className="text-nowrap text-center">
            //                                 <a href={`/hackathon/${this.state.id}`}>
            //                                     <img className="d-block mx-auto rounded-circle img-fluid" src={require("./graysquare.png")}></img>
            //                                 </a>
            //                             </Col>
            //                             </div>
            //                             <Col className="text-center text-lg-left">
            //                                 <h3><strong>{this.state.hackInfo.name} @ {this.state.hackInfo.school}</strong></h3>
            //                                 <br></br>
            //                                 {this.state.hackInfo.num} going
            //                                 <br></br>
            //                                 {this.state.hackInfo.start_date}-{this.state.hackInfo.end_date}
            //                                 <br></br>
            //                                 {this.state.hackInfo.city}, {this.state.hackInfo.state}
            //                             </Col>

            //                         </Row>
            //                     </div>
            //                 </div>
            //             </Col>
            //         </Row>
            //     </Container>
            // </div>
        )
    }

}

export default HackathonCard 