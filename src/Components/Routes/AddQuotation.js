import React,{useState} from 'react';
import './style.css';
import {Form, Col, Button, Modal} from 'react-bootstrap';
import axios from 'axios';

import UpdateQuotation from './UpdateQuotation';
 
function AddQuotation() {

  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(true);
  const [showQuotations, setShowQuotations] = useState(false);
  const [Error,setError] = useState('');

  const handleClose = () => setShow(false);
  const handleCloseShowQuotations = () => setShowQuotations(false);

  const handleClick = event =>
  {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }  
    setValidated(true);
  };

  const handleSubmit = event =>
  {
    const subPassCode = document.getElementById("pa").value;
    axios.post('http://localhost:4000/quotation-pass-code', {pass_code_value:subPassCode}).then(response => {
      if(response.data === "Passcode Matched"){
        setShow(false);
        setShowQuotations(true);
        }
        else {
          alert("try a valid Passcode");
        }    
    }).catch(error => {
       if (error.response.status === 401) setError(error.response.data.message);
       else setError("Something went wrong. Please try again later.");
       });

  };
  
    const handleUpdate = event => {
      window.location.assign("/UpdateQuotation");
      setShow(false);
      setShowQuotations(true);
     };

     const handleCreate = event => {
      window.location.assign("/CreateQuotations");
      setShow(false);
      setShowQuotations(true);
     };


    return (
      <div className="contents">
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Quotation Services</Modal.Title>
          </Modal.Header>
      
          <Modal.Body>    
            <Form noValidate validated={validated} onSubmit={handleClick}>
              <label>Enter The Supplied Passcode</label>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Control name="Passcode" type="number" id="pa" placeholder="Passcode" required />
                    <Form.Control.Feedback type="invalid">
                      Please Enter a Passcode.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="3" >
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Form.Group>
                  <Form.Group as={Col} md="3" >
                    <Button variant="primary" onClick={handleClick} >
                      Submit
                    </Button>
                  </Form.Group>
                </Form.Row>
            </Form>
            <label>If you don't have a Passcode, cantact Health Department at 0921334</label>
           
          </Modal.Body>
            
          <Modal.Footer>
            <Button variant="success" onClick={handleSubmit} >
                      Proceed
                    </Button>
          </Modal.Footer>
        </Modal>


        <Modal show={showQuotations} onHide={handleCloseShowQuotations}>
        <Modal.Header closeButton>
          <Modal.Title>Select Option</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Row>
            <Form.Group as={Col} md="6" >      
              <Button variant="primary" onClick={handleUpdate}>
                Update Basic Info
              </Button>
            </Form.Group>
            <Form.Group as={Col} md="6" >      
              <Button variant="primary" onClick={handleCreate}>
                Create New Quotation
              </Button>
            </Form.Group>
          </Form.Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseShowQuotations}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

      </div>
    );
  }
  
export default AddQuotation;