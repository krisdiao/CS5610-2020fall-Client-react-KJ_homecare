import React from "react";
import {Container , Row , Form, Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'


export default class StaffProfileDetailsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.location.userViewProps.user,
            editing: false,
            isOpen: false
        }
    }

    render() {
        console.log(this.state.user)
        return(
            <div>
                <Container>
                    <h1 className="orange">Hi there! This is <strong>{this.state.user.firstName}{" "}{this.state.user.lastName}</strong>, welcome to my page!</h1>
                    <br/>
                    <Row>
                        <Col sm={4}>
                            <Image src={this.state.user.profilePicture} rounded />
                        </Col>
                        <Col sm={8}>
                            <Form>
                                <Form.Group as={Row} controlId="formHorizontalName">
                                    <Form.Label column sm={2}>
                                        First Name
                                    </Form.Label>
                                    <Col sm={4}>
                                        <h4>{this.state.user.firstName}</h4>
                                    </Col>
                                    <Form.Label column sm={2}>
                                        Last Name
                                    </Form.Label>
                                    <Col sm={4}>
                                        <h4>{this.state.user.lastName}</h4>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formHorizontalTitle">
                                    <Form.Label column sm={2}>
                                        Title
                                    </Form.Label>
                                    <Col sm={4}>
                                        <h4>{this.state.user.title}</h4>
                                    </Col>
                                    <Form.Label column sm={2}>
                                        Serving Since
                                    </Form.Label>
                                    <Col sm={4}>
                                        <h4>{this.state.user.yearsOfExperience}</h4>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formHorizontalContent">
                                    <Form.Label  column sm={2}>Content</Form.Label>
                                    <Col sm={10}>
                                        <h4>{this.state.user.content}</h4>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>

                </Container>

            </div>
        )
    }
}
