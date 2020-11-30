import React from 'react';
import {Form,Button,Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import ProfileComponent from "./ProfileComponent"
import userService from "../../services/UserService";

var leadToCorrectLoginUserPage = require('../../common/util.js').leadToCorrectLoginUserPage;


export class LoginComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            valid: false,
            isLoggedIn: false
        }
    }

    handleChange(e) {
        //console.log("new value", e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    checkValidity(){
        if(this.state.password !== null && this.state.email !== null){
            this.setState({valid: true});
        }
    }


    handleLogin(user){
        console.log(user);
        userService.login(user)
            //here to check whether or not allow the user to login before sending to profile page
        //here also to check if user is Admin then load to admin page, if staff, load to staff page
            .then(currentUser => {
                console.log("currentUser", currentUser)
                if(currentUser){

                    this.setState({
                        email: currentUser.email,
                        password: currentUser.password,
                        valid: true,
                        isLoggedIn: true,
                    })

                    leadToCorrectLoginUserPage(currentUser, this.props.history)

                } else{
                    alert("login failure")
                }

            })
    }

    render() {
        console.log(this.state)
        return(
            <div>
                //TODO: not right yet!
                {this.state.isLoggedIn &&
                <ProfileComponent />
                }
                {!this.state.isLoggedIn &&
                    <div className="container">
                        <h1>Login</h1>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" placeholder="Enter email" value={this.state.email}
                                    // onChange={(e) => this.setState({email: e.target.value})}
                                              onChange={(e) => this.handleChange(e)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" value={this.state.password}
                                              onChange={(e) => this.handleChange(e)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Button variant="primary" type = "button" onClick={() => this.handleLogin(this.state)}>
                                        Login
                                    </Button>
                                    <br/>
                                    <br/>
                                    <p><a href="/forgot" title="Forgot username">
                                        Forgot username?</a></p>
                                    <p><a href="/forgot" title="Forgot password">
                                        Forgot password?</a></p>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Link to={`/register`}>
                                        <Button variant="success" >
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
