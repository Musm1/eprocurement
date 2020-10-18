import React, { useState } from 'react'
import './style.css';
import {Form, Col, Button,Badge,Table} from 'react-bootstrap';

function BERCreation() {

    const Companies = [
        { value: 'All'},
        { value: 'Abbott'},
        {  value: 'GSK'},
        {  value: 'Sami'},
        {  value: 'Sanofi'} 
      ];

      const Generics = [
        { value: 'Diclofenic Sodium'},
        {  value: 'Ibuprufin'},
        {  value: 'Aspirin'},
        {  value: 'Metrozindole'} 
      ];

      const Records = [
        { id:1, company: 'Abbott', status: 'Manufacturer',remarks: 'Recommended',productgeneric:'Diclofenic Sodium',productdosage:'Tab 200mg',technicalScore:'40'},
        { id:11, company: 'Abbott', status: 'Manufacturer',remarks: 'Recommended',productgeneric:'Diclofenic Sodium',productdosage:'Tab 200mg',technicalScore:'40'},
        { id:2, company: 'GSK', status: 'Manufacturer',remarks: 'Recommended',productgeneric:'Ibuprufin',productdosage:'Syp 200mg',technicalScore:'45'},
        { id:3, company: 'Sami', status: 'Manufacturer',remarks: 'Not Recommended',productgeneric:'Aspirin',productdosage:'Cap 250mg',technicalScore:'34'},
        { id:4, company: 'Sanofi', status: 'Manufacturer',remarks: 'Recommended',productgeneric:'Metrozindole',productdosage:'Tab 20mg',technicalScore:'45'} 
      ];

      const [firstdata,setfirstdata] = useState(true);

      const [data1,setdata1] = useState([]);
      const [output,setoutput] = useState([]);
   
      const [show,setshow] = useState(false);
      let getCompany = "";
      let getGeneric = "";  
      const handleCompany = event =>{
       getCompany=event.currentTarget.value;
      };
      
      const handleGenric = event =>{
         getGeneric=event.currentTarget;
      };

      const handleAddRecord = event =>{
        
        if( getCompany == "All")
        {
            setdata1(Records);
        }
            Records.map(r =>{
            if((getCompany === r.company))
            {
                if(firstdata === true)
                {
                    setdata1(data1 => [...data1,r]);
                    setfirstdata(false);
                }
                else
                {
                    if(r.id !== data1.id)
                    {setdata1(data1 => [...data1,r]);}
                        
                    else
                    {alert("record already present   :: rid : "+r.id+" data1 : "+data1.id)} 
                }
                 setoutput([...new Map(data1.map(o => [o.id, o])).values()]); 
                  
            }
        })
      };
      

    return (
        <div className="contents">
            <div className="Headings">
                <Badge variant="success" style={{ marginLeft:"200px" }}>
                    <h2>Bid Evaluation Report BER</h2>
                </Badge>
                <br/>
                <Form.Row>
                    <Form.Group as={Col}md="3" controlId="formGridState">
                        <Form.Label>Select Company</Form.Label>
                        <Form.Control as="select" onChange={handleCompany}>
                        {Companies.map((o,i) =><option key={i}>{o.value}</option>)}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}md="3" controlId="formGridState">
                        <Form.Label>Select Generics</Form.Label>
                        <Form.Control as="select" onChange={handleGenric}>
                        {Generics.map((o,i) =><option key={i}>{o.value}</option>)}
                        </Form.Control>
                    </Form.Group>

                </Form.Row>

                <Button variant="primary" onClick={handleAddRecord}>
                    Add Record in Report
                </Button>
                
            </div>
            <div className="tablediv">
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
                    {output.map(dat =>
                <tr><td>{dat.id}</td><td>{dat.company}</td><td>{dat.status}</td><td>{dat.remarks}</td><td>{dat.productgeneric}</td><td>{dat.productdosage}</td><td>{dat.technicalScore}</td></tr>)}
                </tbody>
                </Table>
                </div>
        </div>
    )
}

export default BERCreation;
