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


    leadToCorrectLoginUserPage(currentUser){

        switch (currentUser.role) {
            case "ADMIN":
                this.props.history.push('/admin')
            case "STAFF":
                this.props.history.push('/staff')
            case "LOGIN-USER":
                this.props.history.push('/profile')
            default:
                this.props.history.push('/')
        }
    }


    handleLogin(user){
        console.log(user);
        login(user)
            //here to check whether or not allow the user to login before sending to profile page
        //here also to check if user is Admin then load to admin page, if staff, load to staff page
            .then(currentUser => {
                console.log("currentUser", currentUser)
                if(currentUser.status === 200){

                    this.setState({
                        email: currentUser.email,
                        password: currentUser.password,
                        valid: currentUser.valid,
                    })

                    this.leadToCorrectLoginUserPage(currentUser)

                } else{
                    alert("login failure")
                }

            })
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
                                <Link to={`/register`}>
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
