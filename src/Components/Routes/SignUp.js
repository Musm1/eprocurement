import React,{useState} from 'react'
import './style.css';
import {Form, Col, Button, Card} from 'react-bootstrap';
import { Switch, Route, useHistory } from 'react-router-dom';
import SignIn from './SignIn';
import HealthLogo from '../Navbar/health1.ico';

import axios from 'axios'


function SignUp() {

    const [validated, setValidated] = useState(false);

    const [fullname,setfullname] = useState(null);
    const [username,setusername] = useState(null);
    const [dept,setdept] = useState(null);
    const [email,setemail] = useState(null);
    const [phone,setphone] = useState(null);
    const [password,setpassword] = useState(null);
    const [error, setError] = useState(null);

    let history = useHistory();

  const handleClick = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    setValidated(true);
  };

  
  const handlePharmaSubmit = event =>{  
    if((fullname != null) && (username != null) && (email != null) && (phone != null) && (dept != null) && (password != null))
    {      setError(null);
      axios.post('http://localhost:4000/signup/pharma', { fname: fullname, uname: username,dname: dept,email: email,pnumber: phone,pword: password }).then(response => {
        history.push('./SignIn');
      }).catch(error => {
        if (error.response.status === 401) setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
      
    }
    else{
      alert("Fields are required");
    }
  }

  const handleHealthSubmit = event =>{  
    if((fullname != null) && (username != null) && (email != null) && (phone != null) && (dept != null) && (password != null))
    {      setError(null);
      axios.post('http://localhost:4000/signup/health', { fname: fullname, uname: username,dname: dept,email: email,pnumber: phone,pword: password }).then(response => {
        history.push('./SignIn');
      }).catch(error => {
        if (error.response.status === 401) setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
      
    }
    else{
      alert("Fields are required");
    }
  }



    return (
        <div className="contentSignUp">
          <Card bg="light" border="dark" style={{ width: '80%'  }}>
          <Card.Header><img src={HealthLogo}/> User Accounts</Card.Header>
              <Card.Body>
                <center><Card.Title>Sign Up</Card.Title></center>
                <Card.Text>
                  <Form noValidate validated={validated} onSubmit={handleClick}>
                    <Form.Row>
                      <Form.Group as={Col} md="6">
                      <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Full Name"
                          onChange={(e) => {setfullname(e.currentTarget.value)}}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a Full Name.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        
                      <Form.Group as={Col} md="6">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="UserName"
                          onChange={(e) => {setusername(e.currentTarget.value)}}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a User name.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Department</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Department Name"
                          onChange={(e) => {setdept(e.currentTarget.value)}}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a Department Name.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                      <Form.Group as={Col} md="6">
                      <Form.Label>Email</Form.Label>
                        <Form.Control
                          required
                          type="email"
                          placeholder="abc@example.com"
                          onChange={(e) => {setemail(e.currentTarget.value)}}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Email Address.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        
                    </Form.Row>

                    <Form.Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          required
                          type="number"
                          placeholder="Phone Number"
                          onChange={(e) => {setphone(e.currentTarget.value)}}

                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a Phone Number.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                      <Form.Group as={Col} md="6">
                      <Form.Label>Password</Form.Label>
                        <Form.Control
                          required
                          type="password"
                          placeholder="Password"
                          onChange={(e) => {setpassword(e.currentTarget.value)}}

                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a Password.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        
                    </Form.Row>


                      <Form.Row>
                      <Form.Group as={Col} md="3"></Form.Group>
                      <Form.Group as={Col} md="4">
                      <Button type="submit" onClick={handlePharmaSubmit}>Pharma</Button>
                      </Form.Group>
                      <Form.Group as={Col} md="4">
                        <Button type="submit" onClick={handleHealthSubmit}>Health</Button>
                        </Form.Group>
                        <Form.Group as={Col} md="3"></Form.Group>
                        </Form.Row>
                      </Form>
                      <center><a href="/signIn">Already have Account? </a></center>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Switch>
                <Route path="/signIn" component={SignIn}/>
                </Switch>

        </div>
    )
}

export default SignUp;