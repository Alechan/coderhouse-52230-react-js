import {Button, Modal} from "react-bootstrap";
import React from "react";

const ModalWithPAndButtons = ({shouldShowModal, pMsg, buttons}) => {

    return (
        <Modal className="justify-content-center align-items-center" centered show={shouldShowModal}>
            <Modal.Body>
                <Modal.Body>
                    <div className="text-center">
                        <p>{pMsg}</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        {
                            buttons.map((button) => {
                                return <Button variant={button.variant} onClick={button.onClick} className="button-with-margin">
                                    {button.text}
                                </Button>
                            })
                        }
                    </div>
                </Modal.Body>
            </Modal.Body>
        </Modal>
    );
}

export default ModalWithPAndButtons;

