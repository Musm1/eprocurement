import React from 'react'
import './style.css'
import {InputGroup, Form, Col, Button, Table, FormControl} from 'react-bootstrap';


function Orders() {
    return (
        <div className="contents">
            <div className="topmenu">   
                <Form>
                    <Form.Row>
                    <Form.Group as={Col} md="3" controlId="formGridState">
                    <Form.Label>Quotation Title</Form.Label>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search Title ....."
                                aria-label="Quotation title"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-primary">Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridState">
                    <Form.Label>Order Title</Form.Label>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search Title ....."
                                aria-label="Order title"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-primary">Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridState">
                    <Form.Label>Calender Year</Form.Label>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search Year ....."
                                aria-label="Calender Year"
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
                        <th>Order Title</th>
                        <th>Institution Name</th>
                        <th>Issued Date</th>
                        <th>Due Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Order1</td>
                        <td>Sanofi</td>
                        <td>20/1/2019</td>
                        <td>31/1/2019</td>
                        <td><a href="#">View</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Order2</td>
                        <td>Sami</td>
                        <td>13/4/2019</td>
                        <td>24/4/2019</td>
                        <td><a href="#">View</a></td>
                    </tr>
                </tbody>
                </Table>
            </div>            
        </div>
    )
}

export default Orders;