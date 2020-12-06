import React from 'react';
import {Form,Button,Col, Modal} from 'react-bootstrap';
import {Link} from "react-router-dom";
import ProfileComponent from "./Profile/ProfileComponent"
import userService from "../../services/UserService";

var leadToCorrectLoginUserPage = require('../../common/util.js').leadToCorrectLoginUserPage;


export class LoginComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoggedIn: false,
            isOpen: false
        }
    }

    componentDidMount() {
        userService.profile()
            .then(profile =>  {

                if(profile !== undefined) {
                    this.setState({isLoggedIn: !this.state.isLoggedIn})
                }else{
                    this.setState({isLoggedIn: false})
                }
            })
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => {
        this.setState({ isOpen: false })
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


    handleLogin(user){
        console.log(user);

        userService.login(user)
            .then(currentUser => {
                console.log("currentUser", currentUser)
                //here to check whether or not allow the user to login before sending to profile page
                if(currentUser !== undefined){

                    this.setState({
                        email: currentUser.email,
                        password: currentUser.password,
                        valid: true,
                        isLoggedIn: true,
                    })
                    //check if user is Admin then load to admin page, if staff, load to staff page
                    leadToCorrectLoginUserPage(currentUser, this.props.history)

                } else{
                    // alert("login failure")
                    this.openModal()
                }
            })
    }

    render() {
        console.log(this.state)
        const { email, password, isLoggedIn } = this.state;

        const inEnabled = email.includes("@") && password.length > 0

        console.log("inEnabled: ", inEnabled)

        return (
            <div>
                {isLoggedIn && <ProfileComponent/>}
                {!isLoggedIn &&
                <div className="container">
                    <h1>Login</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" placeholder="Enter email" value={email}
                                // onChange={(e) => this.setState({email: e.target.value})}
                                          onChange={(e) => this.handleChange(e)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password"
                                          value={password}
                                          onChange={(e) => this.handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me"/>
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Button variant="primary" type="button"
                                        disabled={!inEnabled}
                                        onClick={() => this.handleLogin(this.state)}>
                                    Login
                                </Button>
                                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                                    <Modal.Header>
                                        <Modal.Title>Hi there!</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Login Failure</Modal.Body>
                                    <Modal.Body>Have you registered?</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="success" onClick={this.closeModal}>Yes</Button>
                                        <Link to={`/register`}>
                                            <Button variant="outline-primary" type="button">
                                                Sign Up
                                            </Button>
                                        </Link>
                                    </Modal.Footer>
                                </Modal>
                                <br/>
                                <br/>
                                <p><a href="/forgot" title="Forgot username">
                                    Forgot username?</a></p>
                                <p><a href="/forgot" title="Forgot password">
                                    Forgot password?</a></p>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Link to={`/register`}>
                                    <Button variant="success" type="button">
                                        Sign Up
                                    </Button>
                                </Link>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </div>
                }
            </div>
        )

    }
}
