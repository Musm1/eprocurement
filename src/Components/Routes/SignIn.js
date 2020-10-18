import React,{useState} from 'react'
import './style.css';
import HealthLogo from '../Navbar/health1.ico';

import {Form, Col, Button, Card} from 'react-bootstrap';
import { Switch, Route, useHistory } from 'react-router-dom';
import SignUp from './SignUp';

import axios from 'axios'


function SignIn() {
  const [loading, setLoading] = useState(false);

    const [validated, setValidated] = useState(false);
    const [islogin,setislogin] = useState(false);
    const [username,setusername] = useState(null);
    const [password,setpassword] = useState(null);
    const [error, setError] = useState(null);
    let history = useHistory();


    const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handlePharmaSubmit= event =>{  
    if((username != null) && (password != null))
    { 
      setLoading(true);     
      setError(null);
      axios.post('http://localhost:4000/login/pharma', { uname: username,pword: password }).then(response => {
        setLoading(true);
      alert(response.data);  
      window.location.assign("../Navbar/Navbar1");
      setislogin(true);
      setLoading(false);
      }).catch(error => {
        setLoading(false);
        if (error.response.status === 401) setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
      
    }
    else{
      alert("Fields are required");
    }
  }



    return (
        <div className="contentSignin">
          <Card bg="light" border="dark" style={{ width: '40%'  }}>
            <Card.Header><img src={HealthLogo}/> User Accounts</Card.Header><br/>
              <Card.Body>
                <center><Card.Title>Log In</Card.Title></center>
                <Card.Text>
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Row>
                      <Form.Group as={Col} md="1"></Form.Group>
                      <Form.Group as={Col} md="10">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="UserName"
                          onChange={(e) => {setusername(e.currentTarget.value)}}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid User name.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="1"></Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} md="1"></Form.Group>
                      <Form.Group as={Col} md="10">

                      <Form.Label>Password</Form.Label>
                        <Form.Control
                          required
                          type="password"
                          placeholder="Password"
                          onChange={(e) => {setpassword(e.currentTarget.value)}}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Password.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="1"></Form.Group>
                      </Form.Row>
                      <Form.Row>
                      <Form.Group as={Col} md="2"></Form.Group>
                      <Form.Group as={Col} md="4">
                        <Button type="submit" onClick={handlePharmaSubmit}>Pharma</Button>
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                        <Button type="submit">Health</Button>
                        </Form.Group>
                        <Form.Group as={Col} md="2"></Form.Group>
                        </Form.Row>
                      </Form>
                      <center><a href="/signUp">Create Account </a></center>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Switch>
                <Route path="/signUp" component={SignUp}/>
                </Switch>
        </div>
    )
}

export default SignIn;