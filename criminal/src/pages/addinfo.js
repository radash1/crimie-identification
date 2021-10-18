import React, { useState, useContext } from 'react';
import { httpPostRequest } from '../helpers/networkRequestHelper';
import { Row, Col, CardBody, Card, Label, Container, Form, Input } from "reactstrap"
import { Link } from "react-router-dom";
import { AppContext } from '../store';

const SignUp = () => {
  const [Vname, setVname] = useState('')
  const [Vage, setVage] = useState('')
  const [Sname, setSname] = useState('')
  const [Sage, setSage] = useState('')
  const [Vrel, setVrel] = useState('')
  const [behaviour, setBehaviors] = useState('')
  const [evidence, setEvidence] = useState('')
  const [formErrors, setFormErrors] = useState([])
  const { state, setState } = useContext(AppContext)

  const handleSignUpClick = async () => {
    setFormErrors([])

    let res = await httpPostRequest({
      url: 'crime/add',
      body: {
        Vname: Vname,
        Vage: Vage,
        Sname: Sname,
        Sage: Sage,
        Vrel: Vrel,
        behaviour: behaviour,
        evidence: evidence
      }
    })

    if (res.error) {
      setFormErrors(res.errors)

      return
    }

  }



  return (
    <React.Fragment>
 
      <div >
        <Container>
          <Row >
            <Col >
              <Card >
                <div >
                  <Row>
                    <Col >
                      <div >
                
                      </div>
                    </Col>

                  </Row>
                </div>
                <CardBody >

                  <div >
                    <Form
                      
                    >
                      <div >
                        <Label>Suspect Name</Label>
                        <Input
                          name="Sname"
                          value={Sname}
                          onChange={(e) => setSname(e.target.value)}                        
                          placeholder="Enter Suspect name"
                          type="text"
                        />
                      </div>
                      <div >
                        <Label>Suspect Age</Label>
                        <Input
                          name="Sage"
                          label="Sage"
                          value={Sage}
                          onChange={(e) => setSage(e.target.value)}
                          placeholder="Enter Suspect age"
                          type="text"
                        />
                      </div>
                      <div >
                        <Label>Victim Name</Label>
                        <Input
                          name="Vname"
                          value={Vname}
                          onChange={(e) => setVname(e.target.value)}                        
                          placeholder="Enter Victim name"
                          type="text"
                        />
                      </div>
                      <div >
                        <Label>Suspect Age</Label>
                        <Input
                          name="Vage"
                          label="Vage"
                          value={Vage}
                          onChange={(e) => setVage(e.target.value)}
                          placeholder="Enter Victim age"
                          type="text"
                        />
                      </div>

                      <div >
                        <Label>Victim Relationship</Label>
                        <Input
                          name="Vrel"
                          value={Vrel}
                          onChange={(e) => setVrel(e.target.value)}                        
                          placeholder="Enter Victim Relationship"
                          type="text"
                        />
                      </div>

                      <div >
                        <Label>behaviour</Label>
                        <Input
                          name="behaviour"
                          value={behaviour}
                          onChange={(e) => setBehaviors(e.target.value)}                        
                          placeholder="Enter behaviour"
                          type="text"
                        />
                      </div>

                      <div >
                        <Label>Evidence</Label>
                        <Input
                          name="Evidence"
                          label="Evidence"
                          value={evidence}
                          onChange={(e) => setEvidence(e.target.value)}
                          placeholder="Enter Evidence"
                          type="text"
                        />
                      </div>

                     
                    
                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary btn-block waves-effect waves-light"
                          type="button"
                          onClick={() => handleSignUpClick()}
                        >
                          Check
                        </button>
                      </div>

                    </Form>
                  </div>
                </CardBody>
              </Card>

            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default SignUp;
