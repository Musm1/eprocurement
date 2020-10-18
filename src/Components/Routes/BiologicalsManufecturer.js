import React,{useState} from 'react'
import {Form,Button,Modal,Col,OverlayTrigger,Tooltip,Badge} from 'react-bootstrap'
import './style.css'
    

function BiologicalsManufecturer() {
    const [Show, setShow] = useState(true);
    const [validated, setValidated] = useState(false);
    const [Totalscore,setTotalscore] = useState(0);
    const [curstate,setcurstate] = useState("");

   
    let s1 = 0;
    let s2 = 0;
    let s3 = 0;
    let s4 = 0;
    let s5 = 0;
    let s6 = 0;
    let s7 = 0;
    let s8 = 0;
    let s9 = 0;
    let s10 = 0;
    let s11 = 0;
    let s12 = 0;
    let s13 = 0;
    let s14 = 0;
    let s15a = 0;
    let s15b = 0;
    let s16 = 0;
    let s17 = 0;
    let s18 = 0;
  
    const [Flag1,setFlag1] = useState(false);
    const [Flag2,setFlag2] = useState(false);
    const [Flag3,setFlag3] = useState(false);
    const [Flag4,setFlag4] = useState(false);
    const [Flag5,setFlag5] = useState(false);
    const [Flag6,setFlag6] = useState(false);
    const [Flag7,setFlag7] = useState(false);
    const [Flag8,setFlag8] = useState(false);
    const [Flag9,setFlag9] = useState(false);
    const [Flag10,setFlag10] = useState(false);
    const [Flag11,setFlag11] = useState(false);
    const [Flag12,setFlag12] = useState(false);
    const [Flag13,setFlag13] = useState(false);
    const [Flag14,setFlag14] = useState(false);
    const [Flag15,setFlag15] = useState(false);
    const [Flag16,setFlag16] = useState(false);
    const [Flag17,setFlag17] = useState(false);
    const [Flag18,setFlag18] = useState(false);
    
    const handleClick = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }  
        setValidated(true);
      };

    const handleOption1 = event => {
        if( (event.currentTarget.value.length > 0) && (Flag1 === false))
        {
            setFlag1(true);   
            s1 = 5;    
        }
        if((event.currentTarget.value.length === 0) && (Flag1 === true))
        {
            setFlag1(false);
            s1 = -5;    
        }
        setTotalscore(Totalscore+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15a+s15b+s16+s17+s18);
    };

    const handleOption2 = event => {
        if( (event.currentTarget.value.length > 0) && (Flag2 === false))
        {
            setFlag2(true);   
            s2 = 2;
        }
        if( (event.currentTarget.value.length === 0) && (Flag2 === true))
        {
            setFlag2(false);   
            s2 = -2;    
        }
        setTotalscore(Totalscore+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15a+s15b+s16+s17+s18);
    };

    const handleOption3 = event => {
        if( (event.currentTarget.value.length > 0) && (Flag3 === false))
        {
            setFlag3(true);   
            s3 = 2;    
        }
        if( (event.currentTarget.value.length === 0) && (Flag3 === true))
        {
            setFlag3(false);   
            s3 = -2;    
        }
        setTotalscore(Totalscore+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15a+s15b+s16+s17+s18);
    };

    const handleOption4 = event => {
        if( (event.currentTarget.value.length > 0) && (Flag4 === false))
        {
            setFlag4(true);   
            s4 = 2;
        }
        if( (event.currentTarget.value.length === 0) && (Flag4 === true))
        {
            setFlag4(false);   
            s4 = -2;
        }
        setTotalscore(Totalscore+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15a+s15b+s16+s17+s18);
    };

    const handleOption5 = event => {
        if( (event.currentTarget.value.length > 0) && (Flag5 === false))
        {
            setFlag5(true);   
            s5 = 5;
        }
        if( (event.currentTarget.value.length === 0) && (Flag5 === true))
        {
            setFlag5(false);   
            s5 = -5;
        }
        setTotalscore(Totalscore+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15a+s15b+s16+s17+s18);
    };

    const handleOption6 = event => {
        if( (event.currentTarget.value.length > 0) && (Flag6 === false))
        {
            setFlag6(true);   
            s6 = 4;
        }
        if( (event.currentTarget.value.length === 0) && (Flag6 === true))
        {
            setFlag6(false);   
            s6 = -4;
        }
        setTotalscore(Totalscore+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15a+s15b+s16+s17+s18);
    };

    const handleOption7 = event => {
        if( event.currentTarget.value.length > 0)
        {
            if((event.currentTarget.value === "yes") && (Flag7 === false))
            {
                setFlag7(true);
                s7 = 4;
            }
            else if((event.currentTarget.value === "no") && (Flag7 === true))
            {
                setFlag7(false);
                s7 = -4;
            }
            setTotalscore(Totalscore+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15a+s15b+s16+s17+s18);
        }
    };

    const handleOption8 = event => {
        if( event.currentTarget.value.length > 0)
        {
            if((event.currentTarget.value === "yes") && (Flag8 === false))
            {
                setFlag8(true);
                s8 = 4;
            }
            else if((event.currentTarget.value === "no") && (Flag8 === true))
            {
                setFlag8(false);
                s8 = -4;
            }
            setTotalscore(Totalscore+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15a+s15b+s16+s17+s18);
        }
    };

    const handleOption9 = event => {
        if((event.currentTarget.value === "yes") && (Flag9 === false))
            {
                setFlag9(true);
                s9 = 2;
            }
            else if((event.currentTarget.value === "no") && (Flag9 === true))
            {
                setFlag9(false);
                s9 = -2;
            }
            setTotalscore(Totalscore+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15a+s15b+s16+s17+s18);
    };

    const handleOption10 = event => {
        if((event.currentTarget.value === "yes") && (Flag10 === false))
        {
            setFlag10(true);
            s10 = 5;
        }
        else if((event.currentTarget.value === "no") && (Flag10 === true))
        {
            setFlag10(false);
            s10 = -5;
        }
        setTotalscore(Totalscore+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15a+s15b+s16+s17+s18);
    };

    const handleOption11 = event => {
        if( (event.currentTarget.value.length > 0) && (Flag11 === false))
        {
            setFlag11(true);   
            s11 = 5;
        }
        if( (event.currentTarget.value.length === 0) && (Flag11 === true))
        {
            setFlag11(false);   
            s11 = -5;
        }
            setTotalscore(Totalscore+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15a+s15b+s16+s17+s18);
};

    const handleOption12 = event => {
        if( (event.currentTarget.value.length > 0) && (Flag12 === false))
        {
            setFlag12(true);   
            s12 = 5;
        }
        if( (event.currentTarget.value.length === 0) && (Flag12 === true))
        {
            setFlag12(false);   
            s12 = -5;
        }
        setTotalscore(Totalscore+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15a+s15b+s16+s17+s18);
    };

    const handleOption13 = event => {
        if( (event.currentTarget.value.length > 0) && (Flag13 === false))
        {
            setFlag13(true);   
            s13 = 5;
        }
        if( (event.currentTarget.value.length === 0) && (Flag13 === true))
        {
            setFlag13(false);   
            s13 = -5;
        }
        setTotalscore(Totalscore+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15a+s15b+s16+s17+s18);
    };

    const handleOption14 = event => {
        if( (event.currentTarget.value.length > 0) && (Flag14 === false))
        {
            setFlag14(true);   
            s14 = 5;
        }
        if( (event.currentTarget.value.length === 0) && (Flag14 === true))
        {
            setFlag14(false);   
            s14 = -5;
        }
        setTotalscore(Totalscore+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15a+s15b+s16+s17+s18);
    };

    const handleOption15 = event => {
        if( event.currentTarget.value.length > 0)
        {
            if(Flag15 === false)
            {
                setcurstate(event.currentTarget.value);
                if((event.currentTarget.value === "better"))
                {
                    s15a = 4;
                }
                else if((event.currentTarget.value === "perType"))
                {
                    s15a = 2;
                }
                setTotalscore(Totalscore+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15a+s15b+s16+s17+s18);
                setFlag15(true)
            }
            else
            {
                if((event.currentTarget.value === "better") && (curstate === "better"))
                {
                    s15a = 0;
                }
                else if((event.currentTarget.value === "beter") && (curstate === "perType") )
                {
                    s15a = 2;
                }
                else if((event.currentTarget.value === "perType") && (curstate === "better") )
                {
                    s15a = -2;
                }
                else if((event.currentTarget.value === "perType") && (curstate === "perType") )
                {
                    s15a = 0;
                }
                setTotalscore(Totalscore+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15a+s15b+s16+s17+s18);  
            }
        }
    };

    const handleOption16 = event => {
        if( (event.currentTarget.value.length > 0) && (Flag16 === false))
        {
            setFlag16(true);   
            s16 = 3;
        }
        if( (event.currentTarget.value.length === 0) && (Flag16 === true))
        {
            setFlag16(false);   
            s16 = -3;
        }
        setTotalscore(Totalscore+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15a+s15b+s16+s17+s18);
    };

    const handleOption17 = event => {
        if( (event.currentTarget.value.length > 0) && (Flag17 === false))
        {
            setFlag17(true);   
            s17 = 3;
        }
        if( (event.currentTarget.value.length === 0) && (Flag17 === true))
        {
            setFlag17(false);   
            s17 = -3;
        }
        setTotalscore(Totalscore+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15a+s15b+s16+s17+s18);
    };

    const handleOption18 = event => {
        if( event.currentTarget.value.length > 0)
        {
            if(event.currentTarget.value === "1-20")
            {
                alert("1-20");
                s18 = 1;
            }
            else if(event.currentTarget.value === "21-40")
            {
                alert("21-40");
                s18 = 2;
            }
            else if(event.currentTarget.value === "41-60")
            {
                alert("41-60");
                s18 = 3;
            }
            else if(event.currentTarget.value === "61-80")
            {
                alert("61-80");
                s18 = 4;
            }
            else if(event.currentTarget.value === "above-80")
            {
                alert("above-80");
                s18 = 5;
            }
        }
        setTotalscore(Totalscore+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12+s13+s14+s15a+s15b+s16+s17+s18);
    };


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
            Prepare Quotation
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="Headings">
                <h2>Biologicals Manufecturer</h2><br/>

                <div className="Score">
                    <Button variant="primary">
                        Total Score : <Badge variant="light">{Totalscore}</Badge>
                        <span className="sr-only">unread messages</span>
                    </Button>
                </div>
            </div>
            <br/><br/>
            <Form noValidate validated={validated} onSubmit={handleClick}>      
                <Form.Row>
                    <Form.Group as={Col} md="7">   
                        <label> 1. Attach Valid Proof of Export by the Principal Manufacturer</label>
                    </Form.Group>
                    <Form.Group as={Col} md="1">   
                        <OverlayTrigger
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    Current export certificate from DRAP not older than one year (certificate duly attested by senior executive of the firm).
                                </Tooltip>
                                }
                        >
                            <Badge pill size="sm" variant="info">i</Badge>
                        </OverlayTrigger>{' '}              
                    </Form.Group>
                    <Form.Group as={Col} md="3">                  
                        <input type="file" id="file1" className="browsefile" name="currentExportCirtificate" onChange={handleOption1} /> 
                           <Form.Control.Feedback type="invalid">
                                Choose File.
                            </Form.Control.Feedback> 
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="7">   
                        <label> 2. Attach Valid ISO 18001 Certificate </label>
                    </Form.Group>
                    <Form.Group as={Col} md="1">   
                        <OverlayTrigger
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    Valid ISO 18001 certificate issued by PNAC accredited body (duly attested by senior executive of the firm).
                                </Tooltip>
                                }
                        >
                            <Badge pill size="sm" variant="info">i</Badge>
                        </OverlayTrigger>{' '}              
                    </Form.Group>
                    <Form.Group as={Col} md="3">                  
                        <input type="file" id="file2" className="browsefile" name="ValidISO18001Certificate" onChange={handleOption2}/> 
                           <Form.Control.Feedback type="invalid">
                                Choose File.
                            </Form.Control.Feedback> 
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="7">   
                        <label> 3. Attach Valid ISO 14001 Certificate </label>
                    </Form.Group>
                    <Form.Group as={Col} md="1">   
                        <OverlayTrigger
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    Valid ISO 14001 certificate issued by PNAC accredited body (duly attested by senior executive of the firm).
                                </Tooltip>
                                }
                        >
                            <Badge pill size="sm" variant="info">i</Badge>
                        </OverlayTrigger>{' '}              
                    </Form.Group>
                    <Form.Group as={Col} md="3">                  
                        <input type="file" id="file3" className="browsefile" name="ValidISO14001Certificate" onChange={handleOption3}/> 
                           <Form.Control.Feedback type="invalid">
                                Choose File.
                            </Form.Control.Feedback> 
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="7">   
                        <label> 4. Attach Valid ISO 9001 Certificate </label>
                    </Form.Group>
                    <Form.Group as={Col} md="1">   
                        <OverlayTrigger
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    Valid ISO 9001 certificate issued by PNAC accredited body (duly attested by senior executive of the firm).
                                </Tooltip>
                                }
                        >
                            <Badge pill size="sm" variant="info">i</Badge>
                        </OverlayTrigger>{' '}              
                    </Form.Group>
                    <Form.Group as={Col} md="3">                  
                        <input type="file" id="file4" className="browsefile" name="ValidISO9001Certificate" onChange={handleOption4}/> 
                           <Form.Control.Feedback type="invalid">
                                Choose File.
                            </Form.Control.Feedback> 
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="7">   
                        <label> 5. Attach Certificate from US-FDA </label>
                    </Form.Group>
                    <Form.Group as={Col} md="1">   
                        <OverlayTrigger
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    Valid accreditation of manufacturing unit or its relevant section/s by International Body (Certificate from US-FDA, WHO and/or other accrediting body from SRA country/ies duly attested by senior executive of the firm).
                                </Tooltip>
                                }
                        >
                            <Badge pill size="sm" variant="info">i</Badge>
                        </OverlayTrigger>{' '}              
                    </Form.Group>
                    <Form.Group as={Col} md="3">                  
                        <input type="file" id="file5" className="browsefile" name="CertificateFromUS-FDA" onChange={handleOption5}/> 
                           <Form.Control.Feedback type="invalid">
                                Choose File.
                            </Form.Control.Feedback> 
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="7">   
                        <label> 6. Attach Valid Calibration Certificate for Equipment in the Factory </label>
                    </Form.Group>
                    <Form.Group as={Col} md="1">   
                        <OverlayTrigger
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    Valid calibration certificate for equipment in the factory (duly attested by the senior executive of the firm).
                                </Tooltip>
                                }
                        >
                            <Badge pill size="sm" variant="info">i</Badge>
                        </OverlayTrigger>{' '}              
                    </Form.Group>
                    <Form.Group as={Col} md="3">                  
                        <input type="file" id="file6" className="browsefile" name="ValidCalibrationCertificate" onChange={handleOption6}/> 
                           <Form.Control.Feedback type="invalid">
                                Choose File.
                            </Form.Control.Feedback> 
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="7">   
                        <label> 7. Availability of Functional Stability Chamber </label>
                    </Form.Group>
                    <Form.Group as={Col} md="1">   
                        <OverlayTrigger
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    Availability of Functional Stability Chamber (evaluated at the time of inspection by the MCC expert/s, as non oning shall lead to disqualification of the firm).
                                </Tooltip>
                                }
                        >
                            <Badge pill size="sm" variant="info">i</Badge>
                        </OverlayTrigger>{' '}              
                    </Form.Group>
                    <Form.Group as={Col} md="3">
                        <Form.Row>                  
                            <Form.Check
                                required
                                inline
                                type="radio"
                                name="YesNo7"
                                onChange={handleOption7}
                                label="Yes"
                                value="yes"
                                id="validationFormik0"
                            />
                            <Form.Check
                                required
                                type="radio"
                                name="YesNo7"
                                onChange={handleOption7}
                                label="No"
                                value="no"
                                id="validationFormik0"
                            />
                        </Form.Row> 
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="7">   
                        <label> 8. Availability of Functional effective Cold Chain System </label>
                    </Form.Group>
                    <Form.Group as={Col} md="1">   
                        <OverlayTrigger
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    Availability of Functional Stability Chamber (evaluated at the time of inspection by the MCC expert/s, as non oning shall lead to disqualification of the firm).
                                </Tooltip>
                                }
                        >
                            <Badge pill size="sm" variant="info">i</Badge>
                        </OverlayTrigger>{' '}              
                    </Form.Group>
                    <Form.Group as={Col} md="3">                  
                    <Form.Row>                  
                            <Form.Check
                                required
                                inline
                                type="radio"
                                name="YesNo8"
                                onChange={handleOption8}
                                label="Yes"
                                value="yes"
                                id="validationFormik0"
                            />
                            <Form.Check
                                required
                                type="radio"
                                name="YesNo8"
                                onChange={handleOption8}
                                label="No"
                                value="no"
                                id="validationFormik0"
                            />
                        </Form.Row> 
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="7">   
                        <label> 9. Adequate Availability of Qualified and Relevant Human Resource </label>
                    </Form.Group>
                    <Form.Group as={Col} md="1">   
                        <OverlayTrigger
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    Adequate availability of qualified and relevant Human Resource (Certified by the senior executive of the firm and evaluated by MCC expert/s at the time of inspection, Non-availability of Adequate availability of qualified and relevant Human Resource shall lead to disqualification of the section or firm).
                                </Tooltip>
                                }
                        >
                            <Badge pill size="sm" variant="info">i</Badge>
                        </OverlayTrigger>{' '}              
                    </Form.Group>
                    <Form.Group as={Col} md="3">                  
                    <Form.Row>                  
                            <Form.Check
                                required
                                inline
                                type="radio"
                                name="YesNo9"
                                onChange={handleOption9}
                                label="Yes"
                                value="yes"
                                id="validationFormik0"
                            />
                            <Form.Check
                                required
                                type="radio"
                                name="YesNo9"
                                onChange={handleOption9}
                                label="No"
                                value="no"
                                id="validationFormik0"
                            />
                        </Form.Row> 
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="7">   
                        <label> 10. Availability of Functional HVAC </label>
                    </Form.Group>
                    <Form.Group as={Col} md="1">   
                        <OverlayTrigger
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    Availability of Functional HVAC (as evaluated by the MCC expert/s at the time of inspection). Non-availability or non-functionality of the HVAC system shall lead to Disqualification of the relevant section/firm.
                                </Tooltip>
                                }
                        >
                            <Badge pill size="sm" variant="info">i</Badge>
                        </OverlayTrigger>{' '}              
                    </Form.Group>
                    <Form.Group as={Col} md="3">                  
                        <Form.Row>                  
                            <Form.Check
                                required
                                inline
                                type="radio"
                                name="YesNo10"
                                onChange={handleOption10}
                                label="Yes"
                                value="yes"
                                id="validationFormik0"
                            />
                            <Form.Check
                                required
                                type="radio"
                                name="YesNo10"
                                onChange={handleOption10}
                                label="No"
                                value="no"
                                id="validationFormik0"
                            />
                        </Form.Row> 
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="7">   
                        <label> 11. Attach Goods Declaration Certificate </label>
                    </Form.Group>
                    <Form.Group as={Col} md="1">   
                        <OverlayTrigger
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    Goods Declaration certificate of imported API of the quoted item/s from Pakistan Customs, coupled with valid airway bill or Bill of Lading for the quoted item/s, not older than 01 Year on the cutoff date for submission of bids.
                                </Tooltip>
                                }
                        >
                            <Badge pill size="sm" variant="info">i</Badge>
                        </OverlayTrigger>{' '}              
                    </Form.Group>
                    <Form.Group as={Col} md="3">                  
                        <input type="file" id="file11" className="browsefile" name="GoodsDeclarationCertificate" onChange={handleOption11}/> 
                           <Form.Control.Feedback type="invalid">
                                Choose File.
                            </Form.Control.Feedback> 
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="7">   
                        <label> 12. Attach Valid cGMP Certificate from DRAP </label>
                    </Form.Group>
                    <Form.Group as={Col} md="1">   
                        <OverlayTrigger
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    API/s source accredited by WHO, US-FDA, EMA, MHRA, TGA, PMDA, Swiss Medic or Health Canada  or by other SRAs countries. In case of Pakistani source of API, valid cGMP certificate from DRAP shall be required.
                                </Tooltip>
                                }
                        >
                            <Badge pill size="sm" variant="info">i</Badge>
                        </OverlayTrigger>{' '}              
                    </Form.Group>
                    <Form.Group as={Col} md="3">                  
                        <input type="file" id="file12" className="browsefile" name="ValidcGMPCertificatefromDRAP" onChange={handleOption12}/> 
                           <Form.Control.Feedback type="invalid">
                                Choose File.
                            </Form.Control.Feedback> 
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="7">   
                        <label> 13. Attach Certificate of Analysis of API of the Quoted Item/s </label>
                    </Form.Group>
                    <Form.Group as={Col} md="1">   
                        <OverlayTrigger
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    Certificate of Analysis of API of the quoted item/s from the Principal Manufacturer as in column 16, duly attested by the senior executive of the firm.
                                </Tooltip>
                                }
                        >
                            <Badge pill size="sm" variant="info">i</Badge>
                        </OverlayTrigger>{' '}              
                    </Form.Group>
                    <Form.Group as={Col} md="3">                  
                        <input type="file" id="file13" className="browsefile" name="CertificateofAnalysisofAPI" onChange={handleOption13}/> 
                           <Form.Control.Feedback type="invalid">
                                Choose File.
                            </Form.Control.Feedback> 
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="7">   
                        <label> 14. Attach Valid WHO Prequalification Certificate of Qouted Products </label>
                    </Form.Group>
                    <Form.Group as={Col} md="1">   
                        <OverlayTrigger
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    Valid WHO prequalification certificate of qouted products
                                </Tooltip>
                                }
                        >
                            <Badge pill size="sm" variant="info">i</Badge>
                        </OverlayTrigger>{' '}              
                    </Form.Group>
                    <Form.Group as={Col} md="3">                  
                        <input type="file" id="file14" className="browsefile" name="ValidWHOPrequalificationCertificate" onChange={handleOption14}/> 
                           <Form.Control.Feedback type="invalid">
                                Choose File.
                            </Form.Control.Feedback> 
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="7">   
                        <label> 15. Attach Valid Certificate of the Type of Material used for the Immediate Container of the Quoted Item/s </label>
                    </Form.Group>
                    <Form.Group as={Col} md="1">   
                        <OverlayTrigger
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    Valid Certificate of the Type / class of material used for the immediate container of the quoted item/s, as issued by the manufacturer of this material: For material of immediate container as per type / class in quoted item's official monograph = 02 marks; For material of immediate container of type / class better than the material in official monograph = 04 marks (duly attested by the senior executive of the firm)
                                </Tooltip>
                                }
                        >
                            <Badge pill size="sm" variant="info">i</Badge>
                        </OverlayTrigger>{' '}              
                    </Form.Group>
                    <Form.Group as={Col} md="4">                  
                        <Form.Row>                  
                            <Form.Check
                                required
                                inline
                                type="radio"
                                name="Quality"
                                onChange={handleOption15}
                                label="As per type Monograph 2 marks"
                                value="perType"
                                id="validationFormik0"
                            />
                            <Form.Check
                                required
                                type="radio"
                                name="Quality"
                                onChange={handleOption15}
                                label="Better type Monograp 4 masrks"
                                value="better"
                                id="validationFormik0"
                            />
                        </Form.Row>  
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="7">   
                        <label> 16. Attach Stability Studies of Quoted Item/s </label>
                    </Form.Group>
                    <Form.Group as={Col} md="1">   
                        <OverlayTrigger
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    Stability studies of quoted item/s (duly attested by the Q.C incharge of the firm).
                                </Tooltip>
                                }
                        >
                            <Badge pill size="sm" variant="info">i</Badge>
                        </OverlayTrigger>{' '}              
                    </Form.Group>
                    <Form.Group as={Col} md="3">                  
                        <input type="file" id="file16" className="browsefile" name="StabilityStudiesofQuotedItem/s" onChange={handleOption16}/> 
                           <Form.Control.Feedback type="invalid">
                                Choose File.
                            </Form.Control.Feedback> 
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="7">   
                        <label> 17. Attach Studies on Efficacy of Products </label>
                    </Form.Group>
                    <Form.Group as={Col} md="1">   
                        <OverlayTrigger
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    Studies on efficacy of products  / Biosimilarity Studies  on pakistan population published in PMDC and or HEC recongnised journals
                                </Tooltip>
                                }
                        >
                            <Badge pill size="sm" variant="info">i</Badge>
                        </OverlayTrigger>{' '}              
                    </Form.Group>
                    <Form.Group as={Col} md="3">                  
                        <input type="file" id="file17" className="browsefile" name="StudiesonEfficacyofProducts" onChange={handleOption17}/> 
                           <Form.Control.Feedback type="invalid">
                                Choose File.
                            </Form.Control.Feedback> 
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="7">   
                        <label> 18. Market Share of Quoted Item/s in Pakistani Market </label>
                    </Form.Group>
                    <Form.Group as={Col} md="1">   
                        <OverlayTrigger
                            key='bottom'
                            placement='bottom'
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    Market Share of quoted item/s in Pakistani market as in the recent most data of IMS Health, for allocation of marks for share slabs:
                                                                                                                                                                                                                                                                    01-20% share = 01 mark
                                                                                                                                                                                                                                                                    21-40% share = 02 marks
                                                                                                                                                                                                                                                                    41-60% share = 03 marks
                                                                                                                                                                                                                                                                    61-80% share = 04 marks
                                                                                                                                                                                                                                                                    above 80% share = 05 marks
                                </Tooltip>
                                }
                        >
                            <Badge pill size="sm" variant="info">i</Badge>
                        </OverlayTrigger>{' '}              
                    </Form.Group>
                        <Form.Row>                  
                            <Form.Check
                                required
                                inline
                                type="radio"
                                name="Shares"
                                onChange={handleOption18}
                                label="1 - 20%"
                                value="1-20"
                                id="validationFormik0"
                            />

                            <Form.Check
                                required
                                inline
                                type="radio"
                                name="Shares"
                                onChange={handleOption18}
                                label="21 - 40%"
                                value="21-40"
                                id="validationFormik0"
                            />
                            <Form.Check
                                required
                                type="radio"
                                name="Shares"
                                onChange={handleOption18}
                                label="41 - 60%"
                                value="41-60"
                                id="validationFormik0"
                            />
                            <Form.Check
                                required
                                inline
                                type="radio"
                                name="Shares"
                                onChange={handleOption18}
                                label="61 - 80"
                                value="61-80"
                                id="validationFormik0"
                            />
                            <Form.Check
                                required
                                type="radio"
                                name="Shares"
                                onChange={handleOption18}
                                label="above 80%"
                                value="above-80"
                                id="validationFormik0"
                            />
                        </Form.Row>  
                </Form.Row>
               
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success" onSubmit={handleClick}>
                Submit
            </Button>
        </Modal.Footer>
        </Modal>
    </div>
);
}
  

export default BiologicalsManufecturer;