import React from "react";
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap';

const modalsPoppingComponent = (props) => {

    console.log("message: ", props.message)
    console.log("props: ", props)

    debugger

    return (
        <div>
            <Modal
                show={props.show}
                onHide={props.handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Thank you!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    We will contact you shortly! May God Bless you!
                    {props.message}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Understood
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default modalsPoppingComponent;


