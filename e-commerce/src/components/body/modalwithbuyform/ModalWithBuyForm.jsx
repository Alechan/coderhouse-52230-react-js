import {Button, Form, Modal} from "react-bootstrap"

import React, {useState} from "react";

const ModalWithBuyForm = ({shouldShowModal}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the form data (e.g., submit to server)
        console.log('Name:', name);
        console.log('Phone:', phone);
        console.log('Email:', email);
        // Reset form fields
        setName('');
        setPhone('');
        setEmail('');
    };

    return (
        <Modal className="justify-content-center align-items-center" centered show={shouldShowModal}>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
)
    ;
};


export default ModalWithBuyForm;

