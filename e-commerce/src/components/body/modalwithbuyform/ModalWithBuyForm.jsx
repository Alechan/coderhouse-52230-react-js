import {Button, Form, Modal} from "react-bootstrap"

import React, {useState} from "react";
import OverlaySpinner from "../overlayspinner/OverlaySpinner";

const ModalWithBuyForm = ({shouldShowModal, shouldShowSpinner, onSubmit, onCancel}) => {
    const [formData, setFormData] = useState({name: '', phone: '', email: '', emailConfirmation: ''});
    const [errors, setErrors] = useState({});
    const {name, phone, email, emailConfirmation} = formData;


    const handleSubmit = (e) => {
        e.preventDefault()
        // Validate form fields
        // TODO: sólo valido que no sean vacíos. La validación del email viene gratis pero del teléfono no
        const validationErrors = {};
        if (name.trim() === '') {
            validationErrors.name = 'El nombre es requerido';
        }
        if (phone.trim() === '') {
            validationErrors.phone = 'El teléfono es requerido';
        }
        if (email.trim() === '') {
            validationErrors.email = 'El email es requerido';
        }

        if (email !== emailConfirmation) {
            validationErrors.email = 'Los emails no coinciden';
        }

        // If there are validation errors, set them and stop form submission
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Clear validation errors
        setErrors({});

        // Submit form upwards
        onSubmit(formData);
    };

    const handleCancel = () => {
        onCancel();
    }

    return (
        <Modal className="justify-content-center align-items-center" centered show={shouldShowModal}>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Nombre y apellido</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre y apellido para la factura"
                            onChange={(e) =>
                                setFormData(prevState => ({...prevState, name: e.target.value}))
                            }
                            isInvalid={errors.name}
                        />
                    </Form.Group>

                    <Form.Group controlId="phone">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Teléfono"
                            onChange={(e) =>
                                setFormData(prevState => ({...prevState, phone: e.target.value}))
                            }
                            isInvalid={errors.phone}
                        />
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            onChange={(e) =>
                                setFormData(prevState => ({...prevState, email: e.target.value}))
                            }
                            isInvalid={errors.email}
                        />
                    </Form.Group>

                    <Form.Group controlId="emailConfirmation">
                        <Form.Label>Confirmar email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            isInvalid={errors.email}
                            onChange={(e) =>
                                setFormData(prevState => ({...prevState, emailConfirmation: e.target.value}))
                            }
                        />
                    </Form.Group>

                    <div className="d-flex justify-content-center">
                        <Button variant="primary" type="button" onClick={handleCancel} className="button-with-margin">
                            Volver a carrito
                        </Button>
                        <Button variant="success" type="submit" className="button-with-margin">
                            Finalizar compra
                        </Button>
                    </div>
                </Form>
                {shouldShowSpinner && <OverlaySpinner/>}
            </Modal.Body>
        </Modal>
    )
        ;
};


export default ModalWithBuyForm;

