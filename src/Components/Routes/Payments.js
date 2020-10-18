import React from 'react'
import './style.css'
import {InputGroup, Form, Col, Button, Table, FormControl} from 'react-bootstrap';


function Payments() {
    return (
        <div className="contents">
            <div className="topmenu">   
                <Form>
                    <Form.Row>
                      
                    <Form.Group as={Col} md="3" controlId="formGridState">
                    <Form.Label>Payment Title</Form.Label>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search Title ....."
                                aria-label="Payment title"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-primary">Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridState">
                    <Form.Label>Payment Status</Form.Label>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search Status ....."
                                aria-label="Payment Status"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-primary">Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>

                    </Form.Row>
                </Form>
            </div>
            <div className="tablediv">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Payment Title</th>
                        <th>Order Title</th>
                        <th>Institution Name</th>
                        <th>Payment Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Payment1</td>
                        <td>Order1</td>
                        <td>LRH</td>
                        <td>Completed</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Payment2</td>
                        <td>Order2</td>
                        <td>KTH</td>
                        <td>In progress</td>
                    </tr>
                </tbody>
                </Table>
            </div>            
        </div>
    )
}

export default Payments;