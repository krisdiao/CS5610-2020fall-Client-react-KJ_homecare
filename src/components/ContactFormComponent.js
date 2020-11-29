import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,Nav,Form,Button,FormControl,FormLabel,FormGroup,Col,Row,NavDropdown} from 'react-bootstrap';
import "font-awesome/css/font-awesome.css";
import {createContact} from "../services/ContactService";

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
            valid: false,
        }
    }

    handleChange(e) {
        //console.log("new value", e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    checkValidity(){
        if(
            this.state.agreed === true
            && this.state.firstName !== null
            && this.state.lastName !== null
            && this.state.email !== null
            && this.state.phoneNumber !== null
            && this.state.zip !== null){
            this.setState({valid: true});
        }
    }

    handleContactUs(contact){
        console.log(contact);
        this.checkValidity();
        // if (this.state.valid){
            console.log("it is valid");
            createContact(contact)
                .then(newContact => {
                    console.log("newContact", newContact)

                    //not really need this part
                    this.setState({
                        firstName: newContact.firstName,
                        lastName: newContact.label,
                        email: newContact.email,
                        phoneNumber: newContact.phoneNumber,
                        zip: newContact.zip,
                        agreed: newContact.agreed,
                        valid: newContact.valid,
                    })

                    alert("Thank you, we will contact you shortly!")

                    this.props.history.push('/')
                })
        // }
    }

    render() {
        console.log(this.state)
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
                                <Form.Control name="firstName"
                                              placeholder="Please Enter Your First Name"
                                              value={this.state.firstName}
                                              onChange={(e) => this.handleChange(e)}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label>Your Last Name*</Form.Label>
                                <Form.Control name="lastName" placeholder="Please Enter Your Last Name"
                                              value={this.state.lastName}
                                              onChange={(e) => this.handleChange(e)}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email"
                                          placeholder="Please Enter Your Email"
                                          value={this.state.email}
                                          onChange={(e) => this.handleChange(e)}/>
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPhoneNumber">
                                <Form.Label>Phone Number*</Form.Label>
                                <Form.Control name="phoneNumber"
                                              type="number"
                                              placeholder="Please Enter Your Phone Number"
                                              value={this.state.phoneNumber}
                                              onChange={(e) => this.handleChange(e)}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZipCode">
                                <Form.Label>Zip Code Where Care Is Needed*</Form.Label>
                                <Form.Control placeholder="Please Enter Your ZipCode"
                                              name="zip" value={this.state.zip}
                                              onChange={(e) => this.handleChange(e)}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Agree to our all terms and conditions"
                                        name="agreed"
                                        value={this.state.agreed}
                                        onChange={(e) => this.setState({agreed: true})}/>
                        </Form.Group>
                        <Button variant="primary" type="submit"
                                onClick={() => this.handleContactUs(this.state)}>
                            Submit
                        </Button>
                    </Form>
                </div>

        );
    }
}
