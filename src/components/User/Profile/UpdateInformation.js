import React from "react";
import {Container , Row , Col,Form,Button, Modal} from 'react-bootstrap';
import {Link} from "react-router-dom";
import * as userService from "../../../services/UserService";
import ProfileComponent from "./ProfileComponent";
import {leadToCorrectLoginUserPage} from "../../../common/util";

export default class UpdateInformation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: '',
            editing: false,
            isOpen: false
        }
    }

    componentDidMount() {
        userService.profile()
            .then(profile => this.setState({
                profile: profile
            }))
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => {
        this.setState({ isOpen: false })
        leadToCorrectLoginUserPage(this.state.profile, this.props.history)
    };

    //
    // handleLogout = () =>
    //     userService.logout()
    //         .then(status => {
    //             this.props.history.push('/')
    //         })
    //

    handleSaveProfile(profile){
        // console.log(profile.profile.id);
        // Define the string
        var decodedStringBtoA = this.state.password;
        // Encode the String
        var encodedStringBtoA = btoa(decodedStringBtoA);
        // console.log("encodedStringBtoA: ", encodedStringBtoA);

        profile.profile.password = encodedStringBtoA
        // console.log(this.state.profile.password)

        userService.updateUser(profile.profile.id, profile.profile)
            .then(newProfile => {
                this.openModal();

                console.log("newProfile", newProfile)
                this.setState({
                    profile: newProfile,
                    editing: false,
                })
                console.log(this.state.profile)
            })
    }

    render() {
        console.log(this.state.profile)

        const { firstName,lastName, email, password, verifyPassword, phoneNumber, add1, add2, city, state, zip} = this.state.profile;

        const inEnabled = this.state.agreed
            && (firstName.length) > 0
            && (lastName.length) > 0
            && email.includes("@")
            && (zip.length) === 5
            && (add1.length) > 0
            && (city.length) > 0
            && (state.length) > 0
            && (password.length) > 0
            && password === verifyPassword

        console.log("inEnabled: ", inEnabled)
        return(
            <div>
                <Container>
                    <Row>
                        <Col sm={3}><ProfileComponent {...this.props} profile={this.state.profile}/></Col>
                        <Col sm={9}>
                            <h1>My Profile</h1>
                            <br/>
                            <br/>
                            <Form>
                                <Form.Group as={Row} controlId="formHorizontalName">
                                    <Form.Label column sm={2}>
                                        First Name
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Control
                                            type="text"
                                            value={this.state.profile.firstName}
                                            onChange={(event) => {
                                                const newFirstName = event.target.value
                                                this.setState(prevState => ({
                                                    profile: {...prevState.profile, firstName: newFirstName}
                                                }))
                                            }}
                                        />
                                    </Col>
                                    <Form.Label column sm={2}>
                                        Last Name
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Control
                                            type="text"
                                            value={this.state.profile.lastName}
                                            onChange={(event) => {
                                                const newLastName = event.target.value
                                                this.setState(prevState => ({
                                                    profile: {...prevState.profile, lastName: newLastName}
                                                }))
                                            }}
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formGridEmail">
                                    <Form.Label column sm={2}>
                                        Email
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Control
                                            type="text"
                                            value={this.state.profile.email}
                                            onChange={(event) => {
                                                const newEmail = event.target.value
                                                this.setState(prevState => ({
                                                    profile: {...prevState.profile, email: newEmail}
                                                }))
                                            }}
                                        />
                                    </Col>
                                    <Form.Label column sm={2} controlId="formGridPhoneNumber">
                                        Phone Number
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Control
                                            type="number"
                                            value={this.state.profile.phoneNumber}
                                            onChange={(event) => {
                                                const newPhoneNumber = event.target.value
                                                this.setState(prevState => ({
                                                    profile: {...prevState.profile, phoneNumber: newPhoneNumber}
                                                }))
                                            }}
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formBasicPassword">
                                    <Form.Label column sm={2}>
                                        Password
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Control
                                            type="password"
                                            // value={this.state.profile.password}
                                            onChange={(event) => {
                                                const newPassword = event.target.value
                                                this.setState(prevState => ({
                                                    profile: {...prevState.profile, password: newPassword}
                                                }))
                                            }}
                                        />
                                    </Col>
                                    <Form.Label column sm={2}>
                                        Verify Your Password
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Control
                                            type="password"
                                            // value={this.state.profile.verifyPassword}
                                            onChange={(event) => {
                                                const newVerifyPassword = event.target.value
                                                this.setState(prevState => ({
                                                    profile: {...prevState.profile, verifyPassword: newVerifyPassword}
                                                }))
                                            }}
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formHorizontalName">
                                    <Form.Label column sm={2}>
                                        Address 1
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Control
                                            type="text"
                                            value={this.state.profile.add1}
                                            onChange={(event) => {
                                                const newAdd1 = event.target.value
                                                this.setState(prevState => ({
                                                    profile: {...prevState.profile, add1: newAdd1}
                                                }))
                                            }}
                                        />
                                    </Col>
                                    <Form.Label column sm={2}>
                                        Address 2
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Control
                                            type="text"
                                            value={this.state.profile.add2}
                                            onChange={(event) => {
                                                const newAdd2 = event.target.value
                                                this.setState(prevState => ({
                                                    profile: {...prevState.profile, add2: newAdd2}
                                                }))
                                            }}
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>City*</Form.Label>
                                        <Form.Control type="text" value={this.state.profile.city}
                                                      onChange={(event) => {
                                                          const newCity = event.target.value
                                                          this.setState(prevState => ({
                                                              profile: {...prevState.profile, city: newCity}
                                                          }))
                                                      }}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>State*</Form.Label>
                                        <Form.Control as="select" defaultValue="Choose..." name="state"
                                                      value={this.state.profile.state}
                                                      onChange={(event) => {
                                                          const newState = event.target.value
                                                          this.setState(prevState => ({
                                                              profile: {...prevState.profile, state: newState}
                                                          }))
                                                      }}>
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
                                        <Form.Control name="zip" value={this.state.profile.zip}
                                                      onChange={(event) => {
                                                          const newZip = event.target.value
                                                          this.setState(prevState => ({
                                                              profile: {...prevState.profile, zip: newZip}
                                                          }))
                                                      }} />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="Agree to our all terms and conditions" name="agreed"
                                                value={this.state.agreed}
                                                onChange={(e) => this.setState({agreed: e.target.checked})} />
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Col>
                                        <Button variant="primary" type="button" className="greenBg pull-left"
                                                disabled={!inEnabled}
                                                onClick={() => this.handleSaveProfile(this.state)}>
                                            Save
                                        </Button>
                                        <Modal show={this.state.isOpen} onHide={this.closeModal}>
                                            <Modal.Header>
                                                <Modal.Title>Hi there!</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Success! Thanks!</Modal.Body>
                                            <Modal.Footer>
                                                <button className="orangeBg btn-success" onClick={this.closeModal}>Close</button>
                                            </Modal.Footer>
                                        </Modal>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    {/*<br/>*/}
                    {/*<br/>*/}
                    {/*<br/>*/}
                    {/*<button*/}
                    {/*    type="button"*/}
                    {/*    onClick={this.handleLogout}*/}
                    {/*    className={`btn btn-danger pull-right`}>*/}
                    {/*    Logout*/}
                    {/*</button>*/}
                </Container>
            </div>


        )
    }
}
