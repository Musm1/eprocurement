import React from 'react'
import './style.css'
import {InputGroup, Form, Col, Button, Table, FormControl} from 'react-bootstrap';


function ApprovedProductList() {
    return (
        <div className="contents">
            <div className="topmenu">   
                <Form>
                    <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formGridState">
                    <Form.Label>Search</Form.Label>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Product Name ....."
                                aria-label="Product name"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-primary">Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>
                        <Form.Group as={Col} md="3" controlId="formGridState">
                        <Form.Label>Quotation Title</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="formGridState">
                        <Form.Label>Calender Year</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </div>
            <div className="tablediv">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Generic Name</th>
                        <th>Catagory</th>
                        <th>Calender Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Cipesta 500mg</td>
                        <td>Ciproflaxacin</td>
                        <td>Gen Medicine</td>
                        <td>2017-2018</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Piodine Solution</td>
                        <td>Piodine</td>
                        <td>Gen Medicine</td>
                        <td>2018-2019</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Esso 40mg</td>
                        <td>Esomeprazole</td>
                        <td>Gen Medicine</td>
                        <td>2019-2020</td>
                    </tr>
                </tbody>
                </Table>
            </div>            
        </div>
    )
}

export default ApprovedProductList;