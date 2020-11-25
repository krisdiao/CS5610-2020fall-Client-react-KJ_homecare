import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,Nav,Form,Button,FormControl,FormLabel,FormGroup,Col,Row,NavDropdown} from 'react-bootstrap';
import "font-awesome/css/font-awesome.css";
import {register} from "../../services/UserService";
import PhoneInput from 'react-phone-number-input'

export class RegisterComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            password: '',
            verifyPassword: '',
            email: '',
            phoneNumber: '',
            add1: '',
            add2: '',
            city: '',
            state: '',
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
        if(this.state.password === this.state.verifyPassword
            && this.state.agreed === true
            && this.state.firstName !== null
            && this.state.lastName !== null
            && this.state.password !== null
            && this.state.verifyPassword !== null
            && this.state.email !== null
            && this.state.add1 !== null
            && this.state.city !== null
            && this.state.state !== null
            && this.state.zip !== null){

            this.setState({valid: true});
        }
    }

    handleRegister(user){
        console.log(user);
        this.checkValidity();
        if (this.state.valid){
            console.log("it is valid");
            register(user)
            //here to check whether or not allow the user to login before
            //sending to profile page if log in successfully
                .then(newUser => this.props.history.push('/profile'))
        }
    }

    render() {
        console.log(this.state)
        return (
                <div className="container">
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>Your First Name*</Form.Label>
                                <Form.Control name="firstName" placeholder="Enter First Name"
                                              value={this.state.firstName}
                                              onChange={(e) => this.handleChange(e)}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label>Your Last Name*</Form.Label>
                                <Form.Control name="lastName" placeholder="Enter Last Name"
                                              value={this.state.lastName}
                                              onChange={(e) => this.handleChange(e)}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email*</Form.Label>
                                <Form.Control name="email" placeholder="Enter email"
                                              value={this.state.email}
                                              onChange={(e) => this.handleChange(e)}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPhoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="number" name="phoneNumber" placeholder="Enter Phone Number"
                                              value={this.state.phoneNumber}
                                              onChange={(e) => this.handleChange(e)}/>
                            </Form.Group>
                            {/*<PhoneInput*/}
                            {/*    country="US"*/}
                            {/*    name="phoneNumber"*/}
                            {/*    value={this.state.phoneNumber}*/}
                            {/*    onChange={(e) => this.handleChange(e)} />*/}

                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password*</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password"
                                              value={this.state.password}
                                              onChange={(e) => this.handleChange(e)}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridVerifyPassword">
                                <Form.Label>Password*</Form.Label>
                                <Form.Control type="password" name="verifyPassword" placeholder="Verify Password"
                                              value={this.state.verifyPassword}
                                              onChange={(e) => this.handleChange(e)}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Address*</Form.Label>
                                <Form.Control name="add1" placeholder="1234 Main St"
                                              value={this.state.add1}
                                              onChange={(e) => this.handleChange(e)}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control name="add2" placeholder="Apartment, studio, or floor"
                                              value={this.state.add2}
                                              onChange={(e) => this.handleChange(e)}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City*</Form.Label>
                                <Form.Control name="city" value={this.state.city}
                                              onChange={(e) => this.handleChange(e)}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State*</Form.Label>
                                <Form.Control as="select" defaultValue="Choose..." name="state"
                                              value={this.state.state}
                                              onChange={(e) => this.handleChange(e)}>
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip*</Form.Label>
                                <Form.Control name="zip" value={this.state.zip}
                                              onChange={(e) => this.handleChange(e)} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Agree to our all terms and conditions" name="agreed"
                                        value={this.state.agreed}
                                        onChange={(e) => this.setState({agreed: true})}/>
                        </Form.Group>

                        <Button variant="primary" type="submit"
                                onClick={() => this.handleRegister(this.state)}>
                            Register
                        </Button>
                    </Form>
                </div>
        );
    }
}
