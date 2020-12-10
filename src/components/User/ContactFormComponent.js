import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Button, Col, Modal} from 'react-bootstrap';
import "font-awesome/css/font-awesome.css";
import contactService from "../../services/ContactService";

export class ContactFormComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            zip: '',
            agreed: false,
            isOpen: false
            // nameError: "",
            // emailError: "",
            // passwordError: ""
        }
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => {
        this.setState({ isOpen: false })
        this.props.history.push('/')
    };

    //for input variables
    handleChange(event) {
        //console.log("new value", event.target.value);

        const isCheckbox = event.target.type === "checkbox";

        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    }

    handleContactUs(contact){
        console.log(contact);
        contactService.createContact(contact)
                .then(newContact => {
                    this.openModal();
                    console.log("newContact", newContact)
                })
    }

    render() {
        console.log(this.state)
        const { firstName,lastName, email, phoneNumber, zip, agreed } = this.state;

        const inEnabled = agreed
                            && firstName.length > 0
                            && lastName.length > 0
                            && email.includes("@")
                            && phoneNumber.length === 10
                            && zip.length === 5
        console.log("inEnabled: ", inEnabled)

        return (
            <div className="container">
                <h1 className="orange">K&J Total Care</h1>
                <br/>
                <p className="green"><i className="orange fa fa-phone" aria-hidden="true"></i>: <strong>336-457-1167</strong></p>
                <p className="green"><i className="orange fa fa-envelope-o" aria-hidden="true"></i>: <strong>kjtotalcare@gmail.com</strong></p>
                <p className="green"><i className="orange fa fa-internet-explorer" aria-hidden="true"></i>: <strong>kjtotalcare.com</strong></p>
                <br/>
                <br/>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>Your First Name*</Form.Label>
                            <Form.Control name="firstName"
                                          placeholder="Please Enter Your First Name"
                                          value={firstName}
                                          onChange={(e) => this.handleChange(e)}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Your Last Name*</Form.Label>
                            <Form.Control name="lastName" placeholder="Please Enter Your Last Name"
                                          value={lastName}
                                          onChange={(e) => this.handleChange(e)}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control name="email"
                                      placeholder="Please Enter Your Email"
                                      value={email}
                                      onChange={(e) => this.handleChange(e)}/>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPhoneNumber">
                            <Form.Label>Phone Number*</Form.Label>
                            <Form.Control name="phoneNumber"
                                          type="number"
                                          placeholder="Please Enter Your Phone Number"
                                          value={phoneNumber}
                                          onChange={(e) => this.handleChange(e)}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridZipCode">
                            <Form.Label>Zip Code Where Care Is Needed</Form.Label>
                            <Form.Control placeholder="Please Enter Your ZipCode"
                                          name="zip" value={zip}
                                          onChange={(e) => this.handleChange(e)}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Agree to our all terms and conditions"
                                    name="agreed"
                                    value={agreed}
                                    onChange={(e) => this.handleChange(e)}/>

                    </Form.Group>
                    <Button type="button"
                            className="orangeBg btn-success"
                            disabled={!inEnabled}
                            onClick={() => this.handleContactUs(this.state)}>
                        Submit
                    </Button>
                    <Modal show={this.state.isOpen} onHide={this.closeModal}>
                        <Modal.Header>
                            <Modal.Title>Hi there!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Thank you, we will contact you shortly!</Modal.Body>
                        <Modal.Body>May God Bless you!</Modal.Body>
                        <Modal.Footer>
                            <button onClick={this.closeModal}>Close</button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </div>
        );

    }
}
