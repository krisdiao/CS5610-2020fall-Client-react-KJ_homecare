import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form,Button,Col} from 'react-bootstrap';
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
            // nameError: "",
            // emailError: "",
            // passwordError: ""
        }
    }

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
        this.setState({isValid: false});
        contactService.createContact(contact)
                .then(newContact => {

                    alert("Thank you, we will contact you shortly! May God Bless you!")

                    console.log("newContact", newContact)
                    this.setState({
                        firstName: newContact.firstName,
                        lastName: newContact.label,
                        email: newContact.email,
                        phoneNumber: newContact.phoneNumber,
                        zip: newContact.zip,
                    })
                    this.props.history.push('/')
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
                <h1>K&J Total Care</h1>
                <br/>
                <p><i className="fa fa-phone" aria-hidden="true"></i>: 336-457-1167</p>
                <p><i className="fa fa-envelope-o" aria-hidden="true"></i>: kjtotalcare@gmail.com</p>
                <p><i className="fa fa-internet-explorer" aria-hidden="true"></i>: kjtotalcare.com</p>
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
                    <Button variant="primary" type="button"
                            disabled={!inEnabled}
                            onClick={() => this.handleContactUs(this.state)}>
                        Submit
                    </Button>
                </Form>
            </div>

        );

    }
}
