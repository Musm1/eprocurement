import React,{useState,useEffect} from 'react';
import './style.css'
import {Form, Col,ButtonToolbar, Button, Modal} from 'react-bootstrap';
import axios from 'axios';

function CreateQuotations() {
    let linkTo = "";

    const [Show, setShow] = useState(true);
    const [validated, setValidated] = useState(false);
    
    const [GotProductName,setGotProductName] = useState(null);
    const [GotProductGeneric,setGotProductGeneric] = useState(null);
    const [GotProductCatagory,setGotProductCatagory] = useState(null);
    const [GotApplier,setGotApplier] = useState(null);

    const [allGenerics,setallGenerics] = useState([]);
    const [allProducts,setallProducts] = useState([]);
    const [allCatagories,setallCatagories] = useState([]);


    const handleProductName= event => {
        setGotProductName(event.currentTarget.value);
    };

    const handleProductGeneric= event => {
        setGotProductGeneric(event.currentTarget.value);
    };

    const handleProductCatagory= event => {

        switch(event.currentTarget.value)
        {
            case 'General Medicines':
                setGotProductCatagory('General');
                break;

            case 'I/V Fluids':
                setGotProductCatagory('IVFluids');
                break;

            case 'Biological drugs':
                setGotProductCatagory('Biologicals');
                break;
            
            case 'Medical Devices':
                setGotProductCatagory('Medical');
                break;
            
            case 'Cardiac Stents':
                setGotProductCatagory('Cardiac');
                break;
            
            case 'Non drug items (NDIs)':
                setGotProductCatagory('NonDrug');
                break;
            
            case 'Cotton & Realted Goods':
                setGotProductCatagory('Cotton');
                break;
            case 'Powdered Injectables':
                setGotProductCatagory('Powdered');
                break;                                                                                        
        }
};

    const handleApplier = event => {
        setGotApplier(event.currentTarget.value);
    };

    const handleProceed = event => {
        if((GotProductCatagory != null) && (GotApplier != null) && (GotProductGeneric != null) && (GotProductName != null))
        {
            linkTo = "./"+GotProductCatagory+GotApplier;
            window.location.assign(linkTo);
        }
        else
        {
            setValidated(true);
        }       
    }


    useEffect(() => {
       
        axios
        .get('http://localhost:4000/create-quotation-product-generic')
        .then( (res) => {
            setallGenerics(res.data);
        });
    
        axios
        .get('http://localhost:4000/create-quotation-product')
        .then( (res) => {
            setallProducts(res.data);
        });

        axios
        .get('http://localhost:4000/create-quotation-product-category')
        .then( (res) => {
            setallCatagories(res.data);
        });
    
    });
    

    return (
        <div className="container">
            <Modal
                size="lg"
                show={Show}
                onHide={() => setShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                Create New Quotations
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleProceed}>
                <label> 1. Select Product Credentials</label><br/> 
                    <Form.Row>
                        <Form.Group as={Col} md="5">    
                        <Form.Label>Name</Form.Label>               
                                      
                            <Form.Control name="Product Name" type="text" id="productName" placeholder="Product Name" onChange={handleProductName} required />
                                <Form.Control.Feedback type="invalid">
                                    Enter Product Name.
                                </Form.Control.Feedback> 
                        </Form.Group>
                    </Form.Row>
      
                    <Form.Row>
                        <Form.Group as={Col} md="5" controlId="formGridState">
                            <Form.Label>Product Generic</Form.Label>
                            <Form.Control as="select" onChange={handleProductGeneric}>
                                <option> Select Product Generic</option>
                                <option> Paracetamol</option>
                                <option> Ciproflaxacin</option>
                                <option> Cifixime</option> 
                                <option> Aspirin</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="5" controlId="formGridState">
                            <Form.Label>Product Catagory</Form.Label>
                            <Form.Control as="select" onChange={handleProductCatagory}>
                                <option>Please Select Catagory</option>
                                {allCatagories.map((o,i) =><option key={i} value={o.categoryName}>{o.categoryName}</option>)}
{/* 
                                <option name="Biologicals" value="Biologicals">Biologicals</option>
                                <option name="Cardaic Stents" value="CardaicStents">Cardaic Stents</option>
                                <option name="Cotton and Related Goods" value="cottonAndRelatedGoods">Cotton and Related Goods</option>
                                <option name="General Medicine" value="generalMedicine">General Medicine</option>
                                <option name="General Medicine IV Fluids" value="generalMedicineIVFluids">General Medicine IV Fluids</option>
                                <option name="Medical Devices" value="medicalDevices">Medical Devices</option>
                                <option name="NDI" value="NDI">NDI</option>
                                <option name="Powdered Injectables" value="powderedInjectables">Powdered Injectables</option>                                 */}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label>Are you Applying as</Form.Label>
                    </Form.Row>

                    <Form.Row>
                        <Form.Check
                            required
                            inline
                            type="radio"
                            name="Applyer"
                            onChange = {handleApplier}
                            label="Importer"
                            value="Importer"
                            id="validationFormik0"
                        />
                        <Form.Check
                            required
                            type="radio"
                            name="Applyer"
                            onChange = {handleApplier}
                            label="Manufecturer"
                            value="Manufecturer"
                            id="validationFormik0"
                        />
                        <Form.Check
                            required
                            type="radio"
                            onChange = {handleApplier}
                            name="Applyer"
                            label="Both"
                            value="Both"
                            id="validationFormik0"
                        />
                    </Form.Row>
                   <br/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Modal.Footer>
                <Button variant="success" onClick={handleProceed} >
                    Proceed
                </Button>
          </Modal.Footer>
          
        </Modal.Footer>
            </Modal>
        </div>
    );
  }
      
export default CreateQuotations;