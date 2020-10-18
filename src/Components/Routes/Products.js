import React from 'react'
import './style.css'
import {InputGroup, Form, Col, Button, Table, FormControl} from 'react-bootstrap';

function Products() {
    return (
        <div className="contents">
        <div className="topmenu">   
            <Form>
                <Form.Row>
                    <Form.Group as={Col} md="5" controlId="formGridState">
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
                    <Form.Group as={Col}md="3" controlId="formGridState">
                    <Form.Label>Catagory</Form.Label>
                    <Form.Control as="select">
                        <option>Choose Product Catagory...</option>
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
                    <th>Product Name </th>
                    <th>Catagory</th>
                    <th>Volume</th>
                    <th>Dosage</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Panadol</td>
                    <td>Biologicals</td>
                    <td>200</td>
                    <td>200mg</td>
                </tr>
                <tr>
                <td>2</td>
                    <td>Flygyl</td>
                    <td>IV Infusion</td>
                    <td>350</td>
                    <td>200mg/ml</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Cooton</td>
                    <td>Cottons and Realated Gruop</td>
                    <td>1000</td>
                    <td>----</td>
                </tr>
            </tbody>
            </Table>
        </div>      
    </div>
    )
}

export default Products;