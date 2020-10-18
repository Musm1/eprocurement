import React,{useState,useEffect} from 'react'
import './style.css'
import {Modal, Form, Col, Button, Table, InputGroup,FormControl} from 'react-bootstrap';
import $ from 'jquery';

import axios from 'axios'


function Repository() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [showDel, setShowDel] = useState(false);
    const [showUpd, setShowUpd] = useState(false);
    const [delid,setdelid] = useState(0);

    const [doctype,setdoctype] = useState("");
    const [docexpiry,setdocexpiry] = useState("");
    const [docdes,setdocdes] = useState("");
    const [docfile,setdocfile] = useState("");
    const [AllData,setAllData] = useState([]);

    const handleClose = () => setShow(false);

    const handleClick = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }  
        setValidated(true);
      };
    
    const handleAddNewDocument = () =>{
        setShow(true);
    }

    const handlefile = event =>{
        event.preventDefault();
        alert("Path :: "+document.getElementById("Document").value)  
        setdocfile(event.currentTarget.files[0])
    }

    const handleSubmit = () => {
        if((docexpiry !== "") && (docdes !== ""))
        {
            const data = new FormData();
              if ( docfile ) 
              {
                data.append( 'profileImage', docfile, docfile.name);
                axios.post( 'http://localhost:4000/upload', data, 
                {
                    headers: 
                    {
                        'accept': 'application/json',
                        'Accept-Language': 'en-US,en;q=0.8',
                        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                    }
                }).then( ( response ) => {

                    if ( 200 === response.status ) 
                    {
                        // If file size is larger than expected.
                        if( response.data.error ) 
                        {
                            if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) 
                            {
                                ocShowAlert( 'Max size: 2MB', 'red' );
                            } 
                            else 
                            {
                                ocShowAlert( response.data.error, 'red' );
                            }
                        }
                        else 
                        {
                             axios.post('http://localhost:4000/docdata', {des:docdes,exp:docexpiry}).then(response => {
                               }).catch(error => {
                                 if (error.response.status === 401) setError(error.response.data.message);
                                 else setError("Something went wrong. Please try again later.");
                               });
                          // Success
                            ocShowAlert(' File Uploaded', '#3089cf' );
                            setShow(false);

                        }
                    }
                }).catch( ( error ) => {
                    // If another error
                    ocShowAlert( error, 'red' );
                    setShow(false);

                });
            } 
            else 
            {
             // if file not selected throw error
               ocShowAlert( 'Please upload file', 'red' );
               setShow(false);

            }
        }
        else 
        {
            ocShowAlert( 'Please Fill all the Fields', 'red' );
            setShow(false);

        }
    }


    // ShowAlert Function
    const ocShowAlert = ( message, background = '#3089cf' ) => {
        let alertContainer = document.querySelector( '#oc-alert-container' ),
        alertEl = document.createElement( 'div' ),
        textNode = document.createTextNode( message );
        alertEl.setAttribute( 'class', 'oc-alert-pop-up' );
        $( alertEl ).css( 'background', background );
        alertEl.appendChild( textNode );
        alertContainer.appendChild( alertEl );
        setTimeout( function () {
        $( alertEl ).fadeOut( 'slow' );
        $( alertEl ).remove();
        }, 3000 );
   };


   const handleDeleteConfirm = () =>{
    axios.post('http://localhost:4000/delete-row', {delete_element_value:delid}).then(response => {
    }).catch(error => {
    if (error.response.status === 401) setError(error.response.data.message);
    else setError("Something went wrong. Please try again later.");
    });
    setShowDel(false);
   }

   const handleUpdate = () =>{
    alert("Updated")
    setShowUpd(false);
}


   useEffect(() => {
       
    axios
    .get('http://localhost:4000/list-db-data')
    .then( (res) => {
        const mydata = [];

        res.data.forEach(element => {
            mydata.push(element);
        });
        setAllData(mydata);
    });
   });


    return (
        <div className="contents">
        <div className="topmenu">   
            <Form>
                <Form.Row>
                <Form.Group as={Col} md="5" controlId="formGridState">
                    <Form.Label>Search</Form.Label>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Document Name ....."
                                aria-label="Document name"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-primary">Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>
                    </Form.Row>
                <Form.Row>

                    <Form.Group as={Col} md="10" controlId="formGridState">
                    </Form.Group>
                    <Form.Group as={Col}md="2" controlId="formGridState">
                        <Button variant="secondary" onClick={handleAddNewDocument}>
                            Add New Document
                        </Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>
        <div className="tablediv">
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Document Name</th>
                    <th>Description</th>
                    <th>Date Added</th>
                    <th>Expiry Date</th>
                </tr>
            </thead>
            <tbody>
                {AllData.map((d,i) =>
                    <tr><td key={i}>{i+1}</td><td>{d.name}</td><td>{d.description}</td><td>{d.dateAdded.slice(0, 10)}</td><td>{d.expiryDate.slice(0, 10)}</td><td><a href={d.link}>view</a></td><td><a href="#"><li onClick={(e)=>{setShowDel(true);setdelid(e.currentTarget.value)}} value={d.id}>delete</li></a></td><td><a href="#" onClick={()=>setShowUpd(true)}>Update</a></td></tr>
                )}
            </tbody>
            </Table>
        </div>      

        <Modal show={show} onHide={handleClose} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Document</Modal.Title>
          </Modal.Header>
      
          <Modal.Body>    
            <Form noValidate validated={validated} onSubmit={handleClick}>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Document type</Form.Label>           
                        <Form.Control name="DocumentType" type="number" id="DocType" placeholder="Document Type" onChange={(e) =>{setdoctype(e.currentTarget.value)}} required />
                            <Form.Control.Feedback type="invalid">
                                Please Specify Document Type.
                            </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Expiry Date</Form.Label>         
                        <Form.Control name="DocumentExpiry" type="date" id="DocExpiry" placeholder="Expiry Date" onChange={(e) =>{setdocexpiry(e.currentTarget.value)}} required />
                            <Form.Control.Feedback type="invalid">
                              Please Mention Document Expiry.
                            </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                      <Form.Label>Document Description  </Form.Label>         
                        <Form.Control as="textarea" name="DocumentDescription" type="text" id="DocDes" placeholder="Document Description" onChange={(e) =>{setdocdes(e.currentTarget.value)}} required />
                            <Form.Control.Feedback type="invalid">
                              Please Add Short Description of Document.
                            </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                        <input type="file" id="Document" className="browsefile" name="DocumentAdded" onChange={handlefile} required/> 
                           <Form.Control.Feedback type="invalid">
                                Choose File.
                            </Form.Control.Feedback>
                            <p className="text-muted" style={{ marginLeft: '12px' }}>Upload Size: ( Max 2MB )</p>
                    </Form.Group>
                </Form.Row>
                <br/><div id="oc-alert-container"></div><br/>
                <Form.Row>
                <Form.Group as={Col} md="4">
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Form.Group>

                <Form.Group as={Col} md="4">
                    <Button variant="success" onClick={handleSubmit}>
                        Save
                    </Button>
                </Form.Group>
              </Form.Row>
            </Form>           
          </Modal.Body>
            
          <Modal.Footer>
          </Modal.Footer>
        </Modal>


        <Modal show={showUpd} onHide={()=>setShowUpd(false)} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Update Document</Modal.Title>
          </Modal.Header>
      
          <Modal.Body>    
            <Form noValidate validated={validated} onSubmit={handleClick}>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Document type</Form.Label>           
                        <Form.Control name="DocumentType" type="number" id="DocType" placeholder="Document Type" onChange={(e) =>{setdoctype(e.currentTarget.value)}} required />
                            <Form.Control.Feedback type="invalid">
                                Please Specify Document Type.
                            </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Expiry Date</Form.Label>         
                        <Form.Control name="DocumentExpiry" type="date" id="DocExpiry" placeholder="Expiry Date" onChange={(e) =>{setdocexpiry(e.currentTarget.value)}} required />
                            <Form.Control.Feedback type="invalid">
                              Please Mention Document Expiry.
                            </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                      <Form.Label>Document Description  </Form.Label>         
                        <Form.Control as="textarea" name="DocumentDescription" type="text" id="DocDes" placeholder="Document Description" onChange={(e) =>{setdocdes(e.currentTarget.value)}} required />
                            <Form.Control.Feedback type="invalid">
                              Please Add Short Description of Document.
                            </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                        <input type="file" id="Document" className="browsefile" name="DocumentAdded" onChange={handlefile} required/> 
                           <Form.Control.Feedback type="invalid">
                                Choose File.
                            </Form.Control.Feedback>
                            <p className="text-muted" style={{ marginLeft: '12px' }}>Upload Size: ( Max 2MB )</p>
                    </Form.Group>
                </Form.Row>
                <br/><div id="oc-alert-container"></div><br/>
                <Form.Row>
                <Form.Group as={Col} md="4">
                    <Button variant="secondary" onClick={() => setShowUpd(false)}>
                        Cancel
                    </Button>
                </Form.Group>

                <Form.Group as={Col} md="4">
                    <Button variant="success" onClick={handleUpdate}>
                        Update
                    </Button>
                </Form.Group>
              </Form.Row>
            </Form>           
          </Modal.Body>
            
          <Modal.Footer>
          </Modal.Footer>
        </Modal>


        <Modal show={showDel} onHide={()=>setShowDel(false)} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Document Delete Warning</Modal.Title>
          </Modal.Header>
      
          <Modal.Body>    
            <Form noValidate validated={validated} onSubmit={handleClick}>
                    <br/><Form.Label>Are you sure to delete the document?</Form.Label><br/><br/><br/>
                <Form.Row>
                <Form.Group as={Col} md="4">
                    <Button variant="success" onClick={()=>setShowDel(false)}>
                        Cancel
                    </Button>
                </Form.Group>

                <Form.Group as={Col} md="4">
                    <Button variant="danger" onClick={handleDeleteConfirm}>
                        Delete
                    </Button>
                </Form.Group>
              </Form.Row>
            </Form>           
          </Modal.Body>
            
          <Modal.Footer>
          </Modal.Footer>
        </Modal>


    </div>
    )
}

export default Repository;