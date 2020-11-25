import React from 'react';
import {Navbar,Nav,Form,Button,FormControl,FormLabel,FormGroup,Col,Row,NavDropdown} from 'react-bootstrap';
import {register} from "../../services/UserService";


export class ApplyJobComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            jobPosition: '',
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
        if(
            this.state.agreed === true
            && this.state.firstName !== null
            && this.state.lastName !== null
            && this.state.email !== null
            && this.state.jobPosition !== null
            && this.state.add1 !== null
            && this.state.city !== null
            && this.state.state !== null
            && this.state.zip !== null){
            this.setState({valid: true});
        }
    }

    handleApplyJob(applier){
        console.log(applier);
        this.checkValidity();
        if (this.state.valid){
            console.log("it is valid");
            register(applier)
                .then(newApplier => console.log(newApplier))
        }
    }

    render() {
        return(
            <div className="container">
                <h1>ApplyJob</h1>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>Your First Name*</Form.Label>
                            <Form.Control
                                name="firstname"
                                placeholder="Enter Your First Name"
                                value={this.state.firstName}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Your Last Name*</Form.Label>
                            <Form.Control name="lastname" placeholder="Enter Your Last Name"
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
                        <Form.Group as={Col} controlId="formGridJobPosition">
                            <Form.Label>Job Position*</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..."
                                          name="jobPosition"
                                          value={this.state.jobPosition}
                                          onChange={(e) => this.handleChange(e)}>
                                <option>Companion/Sitter</option>
                                <option>Certified Nursing Assistant I & II</option>
                                <option>Personal Care Assistant</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label>Address*</Form.Label>
                            <Form.Control name="add1"
                                          placeholder="1234 Main St"
                                          value={this.state.add1}
                                          onChange={(e) => this.handleChange(e)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control name="add2"
                                          placeholder="Apartment, studio, or floor"
                                          value={this.state.add2}
                                          onChange={(e) => this.handleChange(e)}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City*</Form.Label>
                            <Form.Control name="city"
                                          value={this.state.city}
                                          onChange={(e) => this.handleChange(e)}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State*</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..."
                                          name="state"
                                          value={this.state.state}
                                          onChange={(e) => this.handleChange(e)}>
                                <option value>- Select -</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                                <option value="AA">AA - Armed Forces Americas</option>
                                <option value="AE">AE - Armed Forces Africa</option>
                                <option value="AE">AE - Armed Forces Canada</option>
                                <option value="AE">AE - Armed Forces Europe</option>
                                <option value="AE">AE - Armed Forces Middle East</option>
                                <option value="AP">AP - Armed Forces Pacific</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip*</Form.Label>
                            <Form.Control name="zip"
                                          value={this.state.zip}
                                          onChange={(e) => this.handleChange(e)}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group>
                        <Form.File
                            id="file"
                            label="Please upload your resume"
                            custom
                        />
                    </Form.Group>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Agree to our all terms and conditions"
                                    name="agreed"
                                    value={this.state.agreed}
                                    onChange={(e) => this.setState({agreed: true})}/>
                    </Form.Group>

                    <Button variant="primary" type="submit"
                            onClick={() => this.handleApplyJob(this.state)}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
