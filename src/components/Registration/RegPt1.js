import React from "react";
import {Form, Button, Col, Row, Container, ProgressBar} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class RegPt1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegSubmit = this.handleRegSubmit.bind(this);
    this.handleNextSubmit = this.handleNextSubmit.bind(this);
    this.handleRegChange = this.handleRegChange.bind(this);
    this.handlePicChange = this.handlePicChange.bind(this);

    this.handleTechAdder = this.handleTechAdder.bind(this);
    this.handleLangAdder = this.handleLangAdder.bind(this);
    this.handleFieldAdder = this.handleFieldAdder.bind(this);
    this.handleInterestAdder = this.handleInterestAdder.bind(this);

    this.handleLANGChange = this.handleLANGChange.bind(this);
    this.handleLANG2Change = this.handleLANG2Change.bind(this);
    this.handleINTChange = this.handleINTChange.bind(this);
    this.handleTECHChange = this.handleTECHChange.bind(this);
    this.handleTECH2Change = this.handleTECH2Change.bind(this);
    this.handleURLChange = this.handleURLChange.bind(this);
    this.handleFIELDChange = this.handleFIELDChange.bind(this);
    this.handleGOALChange = this.handleGOALChange.bind(this);

    this.handleRemoveLANGForm = this.handleRemoveLANGForm.bind(this);
    this.handleRemoveFIELDForm = this.handleRemoveFIELDForm.bind(this);
    this.handleRemoveTECHForm = this.handleRemoveTECHForm.bind(this);
    this.handleRemoveINTERESTForm = this.handleRemoveINTERESTForm.bind(this);

    this.goBack = this.goBack.bind(this);
    this.state = {
      page: 1,
      errMsg: false,
      progress: 67,
      gender: "",
      school: "",
      major: "",
      year: "",
      education: "",
      hackCount: -1,
      goals: ["","",""],
      propic: "",
      languages: [],
      tech: [],
      interests: [],
      fields: [],
      url: ["", "", "", "", "", "", ""],
      similarInt: "",
      similarTech: "",
      similarLang: "",
      similarField: "",
      intList: ['AI', 'CV', 'ML', 'Theory', 'Bioinformatics','Cloud Computing','Data science', 'Big Data', 'Data Visualization', 'Block Chain', 'AR/VR', 'Robotics', 'Hardware','Mechanical Design', 'Electrical Engineering', 'UI/UX Design', 'Web Dev', 'iOS Dev', 'Android Dev', 'HCI', 'Graphics', 'Gaming', 'Networks', 'Database management', 'NoSQL', 'Game Development'],
	langList: ['Javascript', 'Jquery','Java', 'C#', 'PHP', 'Android', 'Python', 'HTML', 'CS', 'Swift', 'Ruby On Rails', 'SQL', 'C', 'C++', 'Go', 'Objective-C'],
	techList : ['Oculus', 'Apache', 'React Native', 'D3', 'React', 'Spark', 'Flask', 'Django', 'Node.js', 'MongoDB', 'ASP.net', 'Ruby', 'Objective-C', 'Angular', 'Vue.js', 'Laravel', 'Pandas', 'Oracle', 'Bootstrap', 'Azure', 'Tensorflow', 'Google-Cloud', 'Firebase', 'Google-Maps', 'Oracle', 'Xamarin', 'Ionic', 'Heroku'],
	fieldList : ['Finance', 'Health', 'Mental Health', 'Education', 'Environmental', 'Science', 'Social Networking', 'Astronomy', 'Human Assistance', 'Music', 'Art', 'Helping Developing Countries', 'Cars', 'Sports', 'Social conflicts', 'Disaster Relief']
    };
  }

  /// ********************** ADDERS
    handleLangAdder(event){
        if (this.state.languages.length < 5) {
            this.setState({ languages: this.state.languages.concat([{name: "select", skill: 0}]) });
            }
    };

    handleTechAdder(event){
        if (this.state.tech.length < 5) {
            this.setState({ tech: this.state.tech.concat([{name: "select", skill: 0}]) });
            }
        };
        
    handleFieldAdder(event){
        if (this.state.fields.length < 5) {
            this.setState({ fields: this.state.fields.concat(["select field"]) });
            }
        };

    handleInterestAdder(event){

        if (this.state.interests.length < 5) {
        this.setState({ interests: this.state.interests.concat(["select interest"]) });
        }
    };
    /// ********************** ADDERS

    // *****************REMOVE

    handleRemoveLANGForm(index){
        let languages = this.state.languages.slice();  
         languages.splice(index, 1);
         this.setState({languages}); 
        };

    handleRemoveTECHForm(index){
        let tech = this.state.tech.slice();  
        tech.splice(index, 1);
         this.setState({tech}); 
        };
     
    handleRemoveFIELDForm(index){
        let fields = this.state.fields.slice();  
        fields.splice(index, 1);
         this.setState({fields}); 
    };

    handleRemoveINTERESTForm(index){
        let interests = this.state.interests.slice();  
        interests.splice(index, 1);
         this.setState({interests}); 
    };

    // *****************REMOVE

    handleLANGChange(e, index) {
        this.state.languages[index].name = e.target.value;
        this.setState({ languages: this.state.languages})
    }

    handleLANG2Change(e, index) {
        this.state.languages[index].skill = e.target.value;
        this.setState({ languages: this.state.languages})
    }

    handleINTChange(e, index) {
        this.state.interests[index] = e.target.value;
        this.setState({ interests: this.state.interests})
    }

    handleTECHChange(e, index) {
        this.state.tech[index].name = e.target.value;
        this.setState({ tech: this.state.tech})
    }

    handleTECH2Change(e, index) {
        this.state.tech[index].skill = e.target.value;
        this.setState({ tech: this.state.tech})
    }

    handleURLChange(e, index) {
        this.state.url[index] = e.target.value;
        this.setState({ url: this.state.url})
    }

    handleFIELDChange(e, index) {
        this.state.fields[index] = e.target.value;
        this.setState({ fields: this.state.fields})
    }

    handleGOALChange(e, index) {
      this.state.goals[index] = e.target.value;
      this.setState({ goals: this.state.goals})
  }


  render() {
    const {page, errMsg} = this.state;

      if (page === 1) {
        return (
        <div className="registration">
          <Container>      
          <ProgressBar variant="success" animated now={1} />
          <br/>
          <h1>Register</h1>
          <br></br>
          <small>{errMsg}</small>
          <br></br>
            <Col > 
              <Row >
              <Form className="reg" onSubmit={this.handleNextSubmit}>
                  <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Gender<span>*</span></Form.Label>
                        <Form.Control as="select" name="gender" value={this.state.gender} onChange={this.handleRegChange}>
                          <option>Choose...</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </Form.Control>
                    </Form.Group>
                

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>School*</Form.Label>
                  <Form.Control placeholder="Type in your school here" name="school" value={this.state.school} onChange={this.handleRegChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Major<span>*</span></Form.Label>
                    <Form.Control as="select" name="major" value={this.state.major} onChange={this.handleRegChange}>
                      <option>Choose...</option>
                      <option>Computer Science</option>
                      <option>Information Systems</option>
                      <option>Mathematics</option>
                      <option>Biology</option>
                      <option>Chemistry</option>
                      <option>Physics</option>
                      <option>Statistics</option>
                      <option>Health Sciences</option>
                      <option>Computer Engineering</option>
                      <option>Electrical Engineering</option>
                      <option>Mechanical Engineering</option>
                      <option>Civil Engineering</option>
                      <option>Biomedical Engineering</option>
                      <option>Chemical Engineering</option>
                      <option>Finance</option>
                      <option>Economics</option>
                      <option>Business</option>
                      <option>Psychology</option>
                    </Form.Control>
                </Form.Group>

                <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Graduation Year<span>*</span></Form.Label>
                    <Form.Control as="select"  name="year" value={this.state.year} onChange={this.handleRegChange}>
                      <option>Choose...</option>
                     
                      <option>2018</option>
                      <option>2019</option>
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                      <option>2026</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Education Level<span>*</span></Form.Label>
                    <Form.Control as="select" name="education" value={this.state.education} onChange={this.handleRegChange}>
                      <option>Choose...</option>
                      <option>High School</option>
                      <option>Undergraduate</option>
                      <option>Graduate</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Number of Hackathons<span>*</span></Form.Label>
                    <Form.Control as="select" name="hackCount" value={this.state.hackCount} onChange={this.handleRegChange}>
                      <option>Choose...</option>
                      <option value="0">This is my first!</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                  Next
                </Button>
              </Form> 
            </Row>
                
            </Col>
          </Container>
          <div className="bottom"></div>
        </div>
       
        );
      }

          // PART 2 **************************************************** social media, interests, fields




    else if (page === 2) {
      return (
        <div className="registration">
        <Container>      
        <ProgressBar variant="success" animated now={33} label={`${33}%`}/>
        <br/>
        <h1>Register</h1>
        <br></br>
          <Col > 
            <Row >
            <Form className="reg" onSubmit={this.handleNextSubmit}>
            
            <Form.Group as={Col} controlId="formGridState">
               <Form.Label><h4>Show hackers what you know</h4><small>(you can fill this in later)</small></Form.Label>
               <br></br>
                    <Form.Label><strong>Programming Languages</strong></Form.Label>
                    {
                      this.state.languages.map((languages, index)=> {
                          return (
                          <div key={index}>
                              <Form.Group className="form-inline">
                              <Form.Label>Language #{index+1}.</Form.Label>
                              <Form.Control
                              as="select"
                              type="text"
                              onChange= {(e) => this.handleLANGChange(e, index)}
                              id={languages.name}
                              value={languages.name} 
                              className="name"
                              >
                                  <option>Choose...</option>
                                  {this.state.langList.map((item, index) => ( 
                                    <option>{item}</option>
                                ))}
                              </Form.Control>
                              <Form.Label>   Familiarity: </Form.Label>
                              <Form.Control
                              as="select"
                              type="text"
                              onChange= {(e) => this.handleLANG2Change(e, index)}
                              id={languages.skill}
                              value={languages.skill} 
                              className="name"
                              >
                                  <option>{languages.skill}</option>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                  <option>6</option>
                                  <option>7</option>
                                  <option>8</option>
                                  <option>9</option>
                                  <option>10</option>
                              </Form.Control>
                              
                              <Button variant="danger" onClick={() => this.handleRemoveLANGForm(index)}>-</Button>
                              </Form.Group>
                          </div>
                          )
                      })
                      }
                        <br/>
                        <Button variant="outline-primary" onClick={this.handleLangAdder}>Add</Button>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label><strong>Libraries/Frameworks</strong></Form.Label>
                    {
                      this.state.tech.map((tech, index)=> {
                          return (
                          <div key={index}>
                              <Form.Group className="form-inline">
                              <Form.Label>Technology #{index+1}.</Form.Label>
                              <Form.Control
                              as="select"
                              type="text"
                              onChange= {(e) => this.handleTECHChange(e, index)}
                              id={tech.name}
                              value={tech.name} 
                              className="name"
                              >
                                  <option>Choose...</option>
                                  {this.state.techList.map((item, index) => ( 
                                    <option>{item}</option>
                                ))}
                              </Form.Control>
                              <Form.Label>   Familiarity: </Form.Label>
                              <Form.Control
                              as="select"
                              type="text"
                              onChange= {(e) => this.handleTECH2Change(e, index)}
                              id={tech.skill}
                              value={tech.skill} 
                              className="name"
                              >
                                  <option>{tech.skill}</option>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                  <option>6</option>
                                  <option>7</option>
                                  <option>8</option>
                                  <option>9</option>
                                  <option>10</option>
                              </Form.Control>
                              
                              <Button variant="danger" onClick={() => this.handleRemoveTECHForm(index)}>-</Button>
                              </Form.Group>
                              
                          </div>
                          )
                      })
                      }
                        <br/>
                        <Button variant="outline-primary" onClick={this.handleTechAdder}>Add</Button>
                  </Form.Group>
                
              <Form.Group as={Col} controlId="formGridState">
                    <Form.Label><strong>Programming Interest (max 5)</strong></Form.Label>
                    {
                        this.state.interests.map((interests, index)=> {
                            return (
                                <Form.Group className="form-inline">
                                <Form.Control
                                as="select"
                                type="text"
                                onChange= {(e) => this.handleINTChange(e, index)}
                                id={interests}
                                value={interests} 
                                >
                                    <option>Choose...</option>
                                  {this.state.intList.map((item, index) => ( 
                                    <option>{item}</option>
                                ))}
                                </Form.Control>
                                <span>  </span>
                                <Button variant="danger" onClick={() => this.handleRemoveINTERESTForm(index)}>-</Button>
                                </Form.Group>
                            )
                        })
                        }
                        <br/>
                        <Button variant="outline-primary" onClick={this.handleInterestAdder}>Add</Button>
                  </Form.Group>


                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label><strong>Tracks (max 5)</strong></Form.Label>
                    {
                        this.state.fields.map((fields, index)=> {
                            return (
                            <div key={index}>
                                <Form.Group className="form-inline">
                                <Form.Control
                                as="select"
                                type="text"
                                onChange= {(e) => this.handleFIELDChange(e, index)}
                                id={fields}
                                value={fields} 
                                className="name"
                                >
                                    <option>Choose...</option>
                                  {this.state.fieldList.map((item, index) => ( 
                                    <option>{item}</option>
                                ))}

                                    
                                </Form.Control>
                                
                                <Button variant="danger" onClick={() => this.handleRemoveFIELDForm(index)}>-</Button>
                                </Form.Group>
                            </div>
                            )
                        })
                        }
                        <br/>
                        <Button variant="outline-primary" onClick={this.handleFieldAdder}>Add</Button>
                  </Form.Group>
              
              <Button variant="primary" onClick={this.goBack}>
                Back
              </Button>
              <span>   </span>
              <Button variant="primary" type="submit">
                Next
              </Button>
            </Form> 
          </Row>
              
          </Col>
        </Container>
        <div className="bottom"></div>
      </div>

      )}
                // PART 3 **************************************************** languages, technologies, similar




    else if (page === 3) {
      return (
        <div className="registration">
        <Container>  
        <ProgressBar variant="success" animated now={this.state.progress} label={`${this.state.progress}%`}/>
        <br/>
        <h1>Register</h1>
        <br></br> 
        <small>{errMsg}</small>
        <br></br>
          <Col > 
            <Row >
            <Form className="reg" onSubmit={this.handleRegSubmit}>
              

              <Form.Label><h3>Help hackers connect with you</h3><small>(you can fill this in later)</small></Form.Label>
              <br></br>

                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Phone Number</Form.Label>
                      {/* <Form.Control
                          type="text"
                          placeholder="Facebook link"
                          value={this.state.url[2]}
                          onChange= {(e) => this.handleURLChange(e,2)}
                          className="name"
                          /> */}
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Facebook</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder="Facebook link"
                          value={this.state.url[2]}
                          onChange= {(e) => this.handleURLChange(e,2)}
                          className="name"
                          />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Linkedin</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Linkedin link"
                            value={this.state.url[6]}
                            onChange= {(e) => this.handleURLChange(e,6)}
                            className="name"
                            />
                    </Form.Group>

                  <Form.Group controlId="formGridAddress1">
                      <Form.Label>Github</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Github link"
                        value={this.state.url[0]}
                        onChange= {(e) => this.handleURLChange(e,0)}
                        className="name"
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Website</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Website link"
                          value={this.state.url[1]}
                          onChange= {(e) => this.handleURLChange(e,1)}
                          className="name"
                          />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Devpost</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Devpost link"
                            value={this.state.url[5]}
                            onChange= {(e) => this.handleURLChange(e,5)}
                            className="name"
                            />
                    </Form.Group>

                  <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                        Profile Picture
                        </span>
                    </div>
                    <div className="custom-file">
                        <form value={this.state.propic} onChange={this.handleRegChange}>
                        <div class="form-group">
                            <label for="exampleFormControlFile1"></label>
                            <Form.Control
                                  id="fileUpload"
                                  type="file"
                                  name="propic"
                                  onChange={this.handleRegChange}
                              />
                        </div>
                        </form>
                    </div>
                </div>
              <br></br>

              <Form.Label><h3>Add some more information to help us match you better!</h3></Form.Label>
              
              <Form.Label>How much do you care about these when looking for a teammate?*</Form.Label>
              <Form.Label><br></br></Form.Label>
                  <Form.Row>
                  <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Similar Interests</Form.Label>
                      <Form.Control as="select" name="similarInt" value={this.state.similarInt} onChange={this.handleRegChange}>
                        <option>Choose...</option>
                        <option value='0'>Not important</option>
                        <option value='1'>A little important</option>
                        <option value='2'>Somewhat important</option>
                        <option value='3'>Pretty important</option>
                        <option value='4'>Most important</option>
                      </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Similar Languages</Form.Label>
                      <Form.Control as="select" name="similarLang" value={this.state.similarLang} onChange={this.handleRegChange}>
                        <option>Choose...</option>
                        <option value='0'>Not important</option>
                        <option value='1'>A little important</option>
                        <option value='2'>Somewhat important</option>
                        <option value='3'>Pretty important</option>
                        <option value='4'>Most important</option>
                      </Form.Control>
                  </Form.Group>
                  </Form.Row>

                  <Form.Row>
                  <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Similar Technologies</Form.Label>
                      <Form.Control as="select" name="similarTech" value={this.state.similarTech} onChange={this.handleRegChange}>
                        <option>Choose...</option>
                        <option value='0'>Not important</option>
                        <option value='1'>A little important</option>
                        <option value='2'>Somewhat important</option>
                        <option value='3'>Pretty important</option>
                        <option value='4'>Most important</option>
                      </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Similar Fields</Form.Label>
                      <Form.Control as="select" name="similarField" value={this.state.similarField} onChange={this.handleRegChange}>
                        <option>Choose...</option>
                        <option value='0'>Not important</option>
                        <option value='1'>A little important</option>
                        <option value='2'>Somewhat important</option>
                        <option value='3'>Pretty important</option>
                        <option value='4'>Most important</option>
                      </Form.Control>
                  </Form.Group>
                  </Form.Row>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>What are the top 3 things you want to get out of a hackathon?*</Form.Label>
                    {
                        this.state.goals.map((goals, index)=> {
                            return (
                                <Form.Group >
                                <Form.Control
                                as="select"
                                type="text"
                                onChange= {(e) => this.handleGOALChange(e, index)}
                                id={goals}
                                value={goals} 
                                >
                                    <option>{index+1}.</option>
                                    <option>win something</option>
                                    <option>learn new things</option>
                                    <option>make friends</option>
                                    <option>grow professional network</option>
                                    <option>work on personal projects</option>
                                    <option>relax</option>
                                    <option>travel to a new place</option>
                                    <option>visit friends</option>
                                </Form.Control>

                                </Form.Group>
                            )
                        })
                        }
                        </Form.Group>
                  

              <Button variant="primary" onClick={this.goBack}>
                Back
              </Button>
              <span>   </span>
              <Button variant="success" type="submit" >
                Submit
              </Button>
            </Form> 
          </Row>
              
          </Col>
        </Container>
        <div className="bottom"></div>
      </div>

      )}
  }

  handlePicChange(event){
    this.setState({
      [event.target.name]: event.target.files[0]
    });
  };

  handleRegChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleRegSubmit(event){
    event.preventDefault();
    if (this.state.similarField !== "" && this.state.similarInt !== "" && this.state.similarLang !== "" && this.state.similarTech !== "" && this.state.goals[0] !== ""){
    this.setState({
      progress: 100,
    });
    console.log(this.state)
    var profile = {
      'gender': this.state.gender,
      'school': this.state.school,
      'major': this.state.major,
      'gradYear': this.state.year,
      'numOfHackathons': this.state.hackCount
    }
    // var preferences = {
    //   'interests': this.state.interests || [],
    //   'fields': this.state.fields || [],
    //   'technologies': this.state.tech || [],
    //   'languages': this.state.languages || [],
    //   'goals': this.state.goals
    // }
    var social = this.state.url;
    // var social = {
    //   'website': links[1],
    //   'devpost': links[5],
    //   'linkedin': links[6],
    //   'github': links[0],
    //   //'slack': links[],
    //   'facebook': links[2],
    //   'slack':links[3],
    //   'instagram': links[4]
    // } 
    function validatePreferences(constant, preferences, toggle){
      const filtered = [];
      if (toggle){
        for(var i = 0; i < preferences.length; i++){
          if(constant.includes(preferences[i]['name'])){
            filtered.push(preferences[i]);
          }
        }
      }else{
        for(var i = 0; i < preferences.length; i++){
          if(constant.includes(preferences[i])){
            filtered.push(preferences[i]);
          }
        }
      }
    }

    var interestsConstants = ['AI', 'CV', 'ML', 'Theory', 'Bioinformatics','Cloud Computing','Data science', 'Big Data', 'Data Visualization', 'Block Chain', 'AR/VR', 'Robotics', 'Hardware','Mechanical Design', 'Electrical Engineering', 'UI/UX Design', 'Web Dev', 'iOS Dev', 'Android Dev', 'HCI', 'Graphics', 'Gaming', 'Networks', 'Database management', 'NoSQL', 'Game Development', 'Android Development']
    var languagesConstants = ['Javascript', 'Jquery','Java', 'C#', 'PHP', 'Android', 'Python', 'HTML', 'CS', 'Swift', 'Ruby On Rails', 'SQL', 'C', 'C++', 'Go', 'Objective-C']
    var technologiesConstants = ['Oculus', 'Apache', 'React Native', 'D3', 'React', 'Spark', 'Flask', 'Django', 'Node.js', 'MongoDB', 'ASP.net', 'Ruby', 'Objective-C', 'Angular', 'Vue.js', 'Laravel', 'Pandas', 'Oracle', 'Bootstrap', 'Azure', 'Tensorflow', 'Google-Cloud', 'Firebase', 'Google-Maps', 'Oracle', 'Xamarin', 'Ionic', 'Heroku']
    var fieldsConstants = ['Finance', 'Health', 'Mental Health', 'Education', 'Environmental', 'Science', 'Social Networking', 'Astronomy', 'Human Assistance', 'Music', 'Art', 'Helping Developing Countries', 'Cars', 'Sports', 'Social conflicts', 'Disaster Relief']
    var filteredInterests = validatePreferences(interestsConstants, this.state.interests, false);
    var filteredLanguages = validatePreferences(languagesConstants, this.state.languages, true);
    var filteredtechnologies = validatePreferences(technologiesConstants, this.state.tech, true);
    var filteredFields = validatePreferences(fieldsConstants, this.state.fields, false);

    var preferences = {
      'interests': filteredInterests || [],
      'fields': filteredFields || [],
      'technologies': filteredtechnologies || [],
      'languages': filteredLanguages || [],
      'goals': this.state.goals
    }

    var careScores = {
      'interests': this.state.similarInt,
      'languages': this.state.similarLang,
      'technologies': this.state.similarTech,
      'fields': this.state.similarTech
    }

    var postData = {
      'profile_pic': '',
      'profile': profile,
      'preferences': preferences,
      'social': social,
      'carescores': careScores
    }
    console.log(postData);
    var config = {
      headers: {'Authorization': 'Bearer ' + localStorage.auth_token.toString()}
    };
    axios.post('https://arcane-fjord-29308.herokuapp.com/auth/register', postData, config).then(res => {
        console.log(res);
        console.log(res.data);
    }).then(res => {this.props.history.push("/home");})
    } 
  else {
    alert("fill in all required fields")
  }
  };

  handleNextSubmit(event){
    event.preventDefault(); 
    if (this.state.school !== "" && this.state.gender !== "" 
        && this.state.major !== "" && this.state.year !== "" && this.state.education !== "" && this.state.hackCount !== -1) {
    this.setState({
      page: this.state.page+1,
      errMsg: true
    });
  }
    else {
      alert("fill in all required fields")
    }
    
  };

  goBack(event) {
    this.setState({
      page: this.state.page-1
    });

  }

}

export default withRouter(RegPt1);
