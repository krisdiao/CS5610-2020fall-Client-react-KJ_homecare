import React from "react";
import {Modal} from 'react-bootstrap';

const modalsPoppingComponent = (props) => {

    console.log("message: ", props.message)
    console.log("props: ", props)

    const onTrigger = () => {
        props.modalCallback();
    }

    return (
        <div>
            <Modal show={this.props.isOpen} onHide={() => onTrigger()}>
                <Modal.Header>
                    <Modal.Title>Hi there!</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.message}</Modal.Body>
                <Modal.Footer>
                    <button onClick={() => onTrigger()}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default modalsPoppingComponent;


