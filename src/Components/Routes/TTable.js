import React, { useState } from 'react'
import './style.css';
import {Form, Col, Button,Badge,Table} from 'react-bootstrap';

function TTable() {
    return (

<div className="tablediv" id="table">
<Table striped bordered hover>
    <thead>
        <tr>
            <th>#</th>
            <th>Company Name</th>
            <th>Status</th>
            <th>Remarks</th>
            <th>Products Qualified</th>
            <th>Technical Score</th>
        </tr>
    </thead>
    <tbody>
        
        
    </tbody>
    </Table>
    </div>
    )
}

export default TTable;