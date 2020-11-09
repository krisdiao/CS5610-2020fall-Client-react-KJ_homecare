import React from 'react';
import {Navbar,Nav,Form,Button,FormControl,FormLabel,FormGroup,Col,Row,NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";

export class LoginComponent extends React.Component{
    render() {
        return(
            <div className="container">
                <h1>Login</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Button variant="primary">
                                Submit
                            </Button>
                        </Form.Group>
                        <Form.Group as={Col}>
                                <Link to={`/Register`}>
                                    <Button variant="success">
                                        Sign Up
                                    </Button>
                                </Link>

                        </Form.Group>
                    </Form.Row>

                </Form>
            </div>
        )
    }
}