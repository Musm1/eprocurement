import React,{useState} from 'react';
import {Form,Container,Row,Image, Col,ButtonToolbar, Button, Modal} from 'react-bootstrap';


function UpdateQuotation() {
    const [lgShow, setLgShow] = useState(true);
    const [validated, setValidated] = useState(false);

    
    const [ShowNewOwner,setShowNewOwner] = useState(false);
    const [ShowNewManager,setShowNewManager] = useState(false);
    const [ShowNewFocal,setShowNewFocal] = useState(false);

    const handleClose = () => setLgShow(false);
   
    const handleClick = event => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }  
      setValidated(true);
    };

    const handleSubmit = event => {
      setValidated(true);
    };

    
    return (
      <div className="contents">
        <ButtonToolbar>   
          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Update Quotation
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="Headings">
                <h2>Update Information</h2><br/>
              </div>
              <Form noValidate validated={validated} onSubmit={handleClick}>      
                <Form.Label>Select Owner/Proprietor of the Firm </Form.Label>  
                  <Form.Row>
                    <Form.Group as={Col} md="4">   
                      <Form.Control as="select">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="5">  
                    </Form.Group>
                    <Form.Group as={Col}md="3" controlId="formGridState">
                          <Button variant="primary" onClick={() => {setShowNewOwner(true); setLgShow(false);}}>
                              Create Owner
                          </Button>
                      </Form.Group>
                </Form.Row>
                <Form.Label>Select Manager/Director of the Firm </Form.Label>  
                  <Form.Row>
                    <Form.Group as={Col} md="4">   
                      <Form.Control as="select">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="5">  
                    </Form.Group>
                    <Form.Group as={Col}md="3" controlId="formGridState">
                          <Button variant="primary" onClick={() => {setShowNewManager(true); setLgShow(false);}}>
                              Create Manger
                          </Button>
                      </Form.Group>
                </Form.Row>
                <Form.Label>Select Focal person of the Firm </Form.Label>  
                  <Form.Row>
                    <Form.Group as={Col} md="4">   
                      <Form.Control as="select">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="5">  
                    </Form.Group>
                    <Form.Group as={Col}md="3" controlId="formGridState">
                          <Button variant="primary" onClick={() => {setShowNewFocal(true); setLgShow(false)}}>
                              Create Focal Person
                          </Button>
                      </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="6">    
                    <Form.Label>Enter Head Office Address</Form.Label>                                     
                    <Form.Control as="textarea" name="Head Office Address" type="address" id="headOfficeAddress" placeholder="Head Office Address" required/>
                      <Form.Control.Feedback type="invalid">
                        Enter Head Office Address.
                      </Form.Control.Feedback> 
                  </Form.Group>
                  <Form.Group as={Col} md="6">    
                    <Form.Label>Enter WareHouse Address</Form.Label>                                     
                    <Form.Control as="textarea" name="WareHouse Address" type="address" id="wareHouseAddress" placeholder="WareHouse Address" required />
                      <Form.Control.Feedback type="invalid">
                        Enter WareHouse Address.
                      </Form.Control.Feedback> 
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Enter LandLine Phone Number</Form.Label>
                    <Form.Control name="LandLine Phone Number" type="number" id="landLinePhoneNo" placeholder="LandLine Phone No." required />
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Enter Fax Number</Form.Label>
                    <Form.Control name="Fax Number" type="number" id="faxNo" placeholder="Fax No." required />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Enter Focal Person Number</Form.Label>
                    <Form.Control name="Focal Person Number" type="number" id="focalPersonNo" placeholder="Focal Person No." required />
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Enter Focal Person CNIC Number</Form.Label>
                    <Form.Control name="Focal Person CNIC Number" type="number" id="focalPersonCNICNo" placeholder="Focal Person CNIC No." required />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Enter Focal Person Email Address</Form.Label>
                    <Form.Control name="Focal Person Email" type="email" id="focalPersonEmail" placeholder="Focal Person Email Address" required />
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Enter Website URL</Form.Label>
                    <Form.Control name="Website URL" type="url" id="websiteURL" placeholder="Website URL" required />
                  </Form.Group>
                </Form.Row>
                <br/>
                <Form.Row>
                  <Form.Group as={Col} md="4">
                    <Form.Label>Enter Bid Security Amount</Form.Label>
                    <Form.Control name="Bid Security Amount" type="number" id="bidSecurityAmount" placeholder="Bid Security Amount" required />
                  </Form.Group>
                </Form.Row>
                <br/>
                <Form.Row>
                  <Form.Group as={Col} md="4">
                    <Form.Label>Enter NTN Number</Form.Label>
                    <Form.Control name="NTN Number" type="number" id="ntnNo" placeholder="NTN Number" required />
                  </Form.Group>
                  <Form.Group as={Col} md="2">
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Attached Last Income Tax Return Cirtificate</Form.Label>
                    <input type="file" id="incomeTaxCirtificate" className="browsefile" name="Income Tax Certificate" required/>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Attached Sale Tax Register Cirtificate</Form.Label>
                    <input type="file" id="saleTaxRegisterCirtificate" className="browsefile" name="Sale Tax Register Certificate" required/>
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Attached Professional Tax Cirtificate</Form.Label>
                    <input type="file" id="professionalTaxCirtificate" className="browsefile" name="Professional Tax Certificate" required/>
                  </Form.Group>
                </Form.Row>
                <br/>
                <Form.Row>
                <Form.Group>
          <Form.Check
            required
            label="I certify and affirm that I have attached/provided all the requisite mandatory documents/information including Bids Security with this Bid and that I fully understand that any document if not provided/missing shall result in the disqualification and declaring my bid as ineligible and thus non-responsive."
            feedback="You must agree before submitting."
          />
          </Form.Group>
                </Form.Row>
              </Form>       
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" onSubmit={handleSubmit}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </ButtonToolbar>
      
        <Modal show={ShowNewOwner} onHide={() =>{setShowNewOwner(false); setLgShow(true);}}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Owner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Name</Form.Label>
              <Form.Control name="New Owner Name" type="text" id="NewOwnerName" placeholder="Name" required />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Role</Form.Label>
              <Form.Control name="New Owner Role" type="text" id="NewOwnerRole" placeholder="Role" required />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control name="New Owner Number" type="number" id="NewOwnerNumber" placeholder="Number" required />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>CNIC Number</Form.Label>
              <Form.Control name="New Owner CNIC Number" type="number" id="NewOwnerCNIC" placeholder="CNIC No." required />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Email</Form.Label>
              <Form.Control name="New Owner Email" type="email" id="NewOwnerEmail" placeholder="Email" required />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Website URL</Form.Label>
              <Form.Control name="New Owner URL" type="text" id="NewOwnerURL" placeholder="Website URL" required />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Attach your recent Photograph</Form.Label>
              <input type="file" id="NewOwnerPhot" className="browsefile" name="New Owner Photo" required/>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Attach Your Valid CNIC Copy</Form.Label>
              <input type="file" id="newOwnerCNIC" className="browsefile" name="New Owner CNIC" required/>
            </Form.Group>
          </Form.Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() =>{setShowNewOwner(false); setLgShow(true);}}>
            Close
          </Button>
          <Button variant="primary">
            Save
          </Button>          
        </Modal.Footer>
      </Modal>

      <Modal show={ShowNewManager} onHide={() =>{setShowNewManager(false); setLgShow(true);}}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Manager</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Name</Form.Label>
              <Form.Control name="New Manager Name" type="text" id="NewManagerName" placeholder="Name" required />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Role</Form.Label>
              <Form.Control name="New Manager Role" type="text" id="NewManagerRole" placeholder="Role" required />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control name="New Manager Number" type="number" id="NewManagerNumber" placeholder="Number" required />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>CNIC Number</Form.Label>
              <Form.Control name="New Manager CNIC Number" type="number" id="NewManagerCNIC" placeholder="CNIC No." required />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Email</Form.Label>
              <Form.Control name="New Manager Email" type="email" id="NewManagerEmail" placeholder="Email" required />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Website URL</Form.Label>
              <Form.Control name="New Manager URL" type="text" id="NewManagerURL" placeholder="Website URL" required />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Attach your recent Photograph</Form.Label>
              <input type="file" id="NewManagerPhot" className="browsefile" name="New Manager Photo" required/>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Attach Your Valid CNIC Copy</Form.Label>
              <input type="file" id="newManagerCNIC" className="browsefile" name="New Manager CNIC" required/>
            </Form.Group>
          </Form.Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() =>{setShowNewManager(false); setLgShow(true);}}>
            Close
          </Button>
          <Button variant="primary">
            Save
          </Button>                    
        </Modal.Footer>
      </Modal>

      <Modal show={ShowNewFocal} onHide={() =>{setShowNewFocal(false); setLgShow(true);}}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Focal Person</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Name</Form.Label>
              <Form.Control name="New Focal Name" type="text" id="NewFocalName" placeholder="Name" required />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Role</Form.Label>
              <Form.Control name="New Focal Role" type="text" id="NewFocalRole" placeholder="Role" required />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control name="New Focal Number" type="number" id="NewFocalNumber" placeholder="Number" required />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>CNIC Number</Form.Label>
              <Form.Control name="New Focal CNIC Number" type="number" id="NewFocalCNIC" placeholder="CNIC No." required />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Email</Form.Label>
              <Form.Control name="New Focal Email" type="email" id="NewFocalEmail" placeholder="Email" required />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Website URL</Form.Label>
              <Form.Control name="New Focal URL" type="text" id="NewFocalURL" placeholder="Website URL" required />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Attach your recent Photograph</Form.Label>
              <input type="file" id="NewFocalPhot" className="browsefile" name="New Focal Photo" required/>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Attach Your Valid CNIC Copy</Form.Label>
              <input type="file" id="newFocalCNIC" className="browsefile" name="New Focal CNIC" required/>
            </Form.Group>
          </Form.Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() =>{setShowNewFocal(false); setLgShow(true);}}>
            Close
          </Button>
          <Button variant="primary">
            Save
          </Button>          
        </Modal.Footer>
      </Modal>


      </div>
    );
  }
      
export default UpdateQuotation;