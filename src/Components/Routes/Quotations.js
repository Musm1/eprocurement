import React from 'react'
import './style.css'
import {Badge, Form, Col, Button, Table, Pagination} from 'react-bootstrap';


function Quotations() {
    return (
        <div className="contents">
            <div className="topmenu">   
            <h4><Badge variant="primary">Search</Badge></h4>   
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Title</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Calender Year</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Status</Form.Label>
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
                        <th>Title</th>
                        <th>Calender Year</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Quotation 1</td>
                        <td>2017-2018</td>
                        <td>Approved</td>
                        <td><a href="#">View</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Quotation 2</td>
                        <td>2018-2019</td>
                        <td>Rejected</td>
                        <td><a href="#">View</a></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Quotation 3</td>
                        <td>2019-2020</td>
                        <td>Approved</td>
                        <td><a href="#">View</a></td>
                    </tr>
                </tbody>
                </Table>
            </div>            
        </div>
    )
}

export default Quotations;