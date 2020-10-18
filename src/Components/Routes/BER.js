import React,{useState} from 'react';
import './style.css';
import {Form, Col, Button, Modal} from 'react-bootstrap';

function BER() {

    const [show, setShow] = useState(true);

    const handleBid = () =>
    {
        window.location.assign("/BERCreation");
    }

    const handleDraft = () =>
    {
        window.location.assign("/DraftCreation");
    }
    

    return (
        <div className="contents">
            <Modal show={show} onHide={() => setShow(false)} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Reports Generating Services</Modal.Title>
                </Modal.Header>
                <Modal.Body>    
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Button variant="primary" onClick={handleBid}>
                                Bid Evaluation Report
                            </Button>
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Button variant="primary" onClick={handleDraft}>
                                Draftman Report
                            </Button>
                        </Form.Group>
                    </Form.Row>
                </Modal.Body>            
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default BER;