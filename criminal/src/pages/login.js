import React, { useContext, useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { httpPostRequest } from '../helpers/networkRequestHelper';
import { AppContext } from '../store';
import { Row, Col, CardBody, Card, Label, Container, Form, Input } from "reactstrap"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formErrors, setFormErrors] = useState([])
  const [rememberMe, setRememberMe] = useState(false)
  const { state, setState } = useContext(AppContext)
  const history = useHistory()

  const handleLoginPress = async () => {
    setFormErrors([])

    let res = await httpPostRequest({
      url: 'user/login',
      body: {
        email: email,
        password: password,
      }
    })

    if (res.error) {
      setFormErrors(res.errors)
      console.log(res.error)
      return
    }
   
    startUserSession(res.data.token, res.data.user)
  }

  const startUserSession = (token, user) => {
    localStorage.setItem('TOKEN', token)
    setState({ user: user })
    history.push("/")
  }

  
  return (
    <React.Fragment>
      <div>
        <Container>
          <Row >
            <Col >
              <Card >
                <div >
                  <Row>
                    <Col >
                      <div >
                        <h5 >Welcome Back !</h5>
                        <p>Sign in to continue.</p>
                      </div>
                    </Col>

                  </Row>
                </div>
                <CardBody>

                  <div >
                    <Form
                     
                    ><div >
                        <Label>Email</Label>
                        <Input
                          name="email"
                          label="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}                     
                          placeholder="Enter email"
                          type="email"
                          required
                        />
                      </div>

                      <div >
                        <Label>Password</Label>
                        <Input
                          name="password"
                          label="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>
                      <div>
                        <input
                          type="checkbox"                        
                          id="customControlInline"
                          value={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label                        
                        >
                          Remember me
                        </label>
                      </div>                   
                      <div>
                        <button                      
                          type="button"
                          onClick={() => handleLoginPress()}
                        >
                          Log In
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

export default Login;
