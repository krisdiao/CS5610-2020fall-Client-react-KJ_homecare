import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,Nav,Form,Button,FormControl,FormLabel,FormGroup,Col,Row,NavDropdown} from 'react-bootstrap';
import "font-awesome/css/font-awesome.css";

export class ContactFormComponent extends React.Component{
    render() {
        return (
                <div className="container">
                    <h1>K&J Home Care</h1>
                    <p><i className="fa fa-phone" aria-hidden="true"></i>: 336-457-1167</p>
                    <p><i className="fa fa-envelope-o" aria-hidden="true"></i>: kjtotalcare@gmail.com</p>
                    <p><i className="fa fa-internet-explorer" aria-hidden="true"></i>: kjtotalcare.com</p>

                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>Your First Name*</Form.Label>
                                <Form.Control type="FirstName" placeholder="Please Enter Your First Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label>Your Last Name*</Form.Label>
                                <Form.Control type="LastName" placeholder="Please Enter Your Last Name" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control placeholder="Please Enter Your Email" />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPhoneNumber">
                                <Form.Label>Phone Number*</Form.Label>
                                <Form.Control type="PhoneNumber" placeholder="Please Enter Your Phone Number" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZipCode">
                                <Form.Label>Zip Code Where Care Is Needed*</Form.Label>
                                <Form.Control type="ZipCode" placeholder="Please Enter Your ZipCode" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>

                            <Form.Group as={Col} id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Care For a Loved One" />
                            </Form.Group>
                            <Form.Group as={Col} id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Caregiver Opportunities" />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>

        );
    }
}
