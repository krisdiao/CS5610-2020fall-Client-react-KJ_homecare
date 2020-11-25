import React from 'react';
import {Navbar,Nav,Form,Button,FormControl,FormLabel,FormGroup,Col,Row,NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {login} from "../../services/UserService";

export class LoginComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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
        if(this.state.password !== null && this.state.email !== null){
            this.setState({valid: true});
        }
    }

    handleLogin(user){
        console.log(user);
        login(user)
            .then(currentUser => this.props.history.push('/profile'))
    }


    render() {
        console.log(this.state)
        return(
            <div className="container">
                <h1>Login</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" placeholder="Enter email" value={this.state.email}
                                      // onChange={(e) => this.setState({email: e.target.value})}
                                      onChange={(e) => this.handleChange(e)}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" value={this.state.password}
                                      // onChange={(e) => this.setState({[e.target.type]: e.target.value})}
                                      onChange={(e) => this.handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Button variant="primary" type = "button" onClick={() => this.handleLogin(this.state)}>
                                Submit
                            </Button>
                            <br/>
                            <br/>
                            <p><a href="/forgot" title="Forgot username">
                                Forgot username?</a></p>
                            <p><a href="/forgot" title="Forgot password">
                                Forgot password?</a></p>
                        </Form.Group>
                        <Form.Group as={Col}>
                                <Link to={`/Register`}>
                                    <Button variant="success" >
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
