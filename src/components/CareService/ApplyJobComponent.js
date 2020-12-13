import React from 'react';
import {Form,Button,Col, Modal} from 'react-bootstrap';
import jobApplicationService from "../../services/JobApplicationService";
import History from "../../common/History";
// import FileUploadComponent  from "./fileUploadComponent"

export class ApplyJobComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            jobPosition: '',
            add1: '',
            add2: '',
            city: '',
            state: '',
            zip: '',
            resume: null,
            selectedFile: null,
            agreed: false,
            isOpen: false
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

    //TODO: resume data is not right yet!
    //for resume field
    handleUpload(e){
        this.setState({
            selectedFile: e.target.files[0]
        });

        const data = new FormData()
        data.append('file', this.state.selectedFile)

        this.setState({
            resume: data
        });
    }

    handleApplyJob(application){
        console.log(application);

        jobApplicationService.createJobApplication(application)
                .then(newApplication => {
                    this.openModal();
                    console.log("newApplication", newApplication)
                })
    }

    render() {
        console.log(this.state)
        const { firstName,lastName, email, phoneNumber, add1, add2, city, state, zip, agreed, jobPosition, resume, selectedFile } = this.state;

        const inEnabled = agreed
            && firstName.length > 0
            && lastName.length > 0
            && email.includes("@")
            && phoneNumber.length === 10
            && zip.length === 5
            && add1.length > 0
            && city.length > 0
            && state.length > 0
            && jobPosition.length > 0

        console.log("inEnabled: ", inEnabled)

        return(
            <div className="container">
                <h1 className="orange">Come to Work @ <strong>K&J Total Care</strong>! </h1>
                <br/>
                <br/>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>Your First Name*</Form.Label>
                            <Form.Control
                                name="firstName"
                                placeholder="Enter Your First Name"
                                value={firstName}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Your Last Name*</Form.Label>
                            <Form.Control name="lastName" placeholder="Enter Your Last Name"
                                          value={lastName}
                                          onChange={(e) => this.handleChange(e)}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control name="email" placeholder="Enter email"
                                          value={email}
                                          onChange={(e) => this.handleChange(e)}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPhoneNumber">
                            <Form.Label>Phone Number*</Form.Label>
                            <Form.Control name="phoneNumber"
                                          type="number"
                                          placeholder="Please Enter Your Phone Number"
                                          value={phoneNumber}
                                          onChange={(e) => this.handleChange(e)}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label>Address*</Form.Label>
                            <Form.Control name="add1"
                                          placeholder="1234 Main St"
                                          value={add1}
                                          onChange={(e) => this.handleChange(e)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control name="add2"
                                          placeholder="Apartment, studio, or floor"
                                          value={add2}
                                          onChange={(e) => this.handleChange(e)}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City*</Form.Label>
                            <Form.Control name="city"
                                          value={city}
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
                                          value={zip}
                                          onChange={(e) => this.handleChange(e)}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridJobPosition">
                            <Form.Label>Job Position*</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..."
                                          name="jobPosition"
                                          value={jobPosition}
                                          onChange={(e) => this.handleChange(e)}>
                                            <option value>- Select -</option>
                                            <option value="CompanionOrSitter">Companion/Sitter</option>
                                            <option value="CNA">Certified Nursing Assistant I & II</option>
                                            <option value="PCA">Personal Care Assistant</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridResume">
                            <Form.Label>Resume</Form.Label>
                            <div id="upload-box">
                                <input type="file" onChange={(e) => this.handleUpload(e)}/>
                            </div>
                        </Form.Group>
                    </Form.Row>
                    <br/>
                    {/*<FileUploadComponent resume={this.state.resume}/>*/}
                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Agree to our all terms and conditions"
                                    name="agreed"
                                    value={agreed}
                                    onChange={(e) => this.handleChange(e)}/>
                    </Form.Group>

                    <Button className="orangeBg btn-success" type="button"
                            disabled={!inEnabled}
                            onClick={() => this.handleApplyJob(this.state)}>
                        Submit
                    </Button>
                    <Modal show={this.state.isOpen} onHide={this.closeModal}>
                        <Modal.Header>
                            <Modal.Title>Hi there!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Thank you, we will contact you shortly!</Modal.Body>
                        <Modal.Body>May God Bless you!</Modal.Body>
                        <Modal.Footer>
                            <button className="orangeBg btn-success" onClick={this.closeModal}>Close</button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </div>
        )
    }
}
