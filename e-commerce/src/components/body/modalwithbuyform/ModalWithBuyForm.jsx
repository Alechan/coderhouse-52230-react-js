import {Button, Form, Modal} from "react-bootstrap"

import React, {useState} from "react";

const ModalWithBuyForm = ({shouldShowModal, onSubmit}) => {
    const [formData, setFormData] = useState({name: '', phone: '', email: ''});

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData);
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
                            onChange={(e) =>
                                setFormData(prevState => ({...prevState, name: e.target.value}))
                            }
                        />
                    </Form.Group>

                    <Form.Group controlId="phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your phone number"
                            onChange={(e) =>
                                setFormData(prevState => ({...prevState, phone: e.target.value}))
                            }
                        />
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            onChange={(e) =>
                                setFormData(prevState => ({...prevState, email: e.target.value}))
                            }
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

