import React, { useState }from 'react';
import {Form,Col,Row,Button} from 'react-bootstrap';
import { MDBContainer, MDBRating } from 'mdbreact';
import {createJobApplication} from "../../services/JobApplicationService";
import {createReview} from "../../services/ReviewService";

export class LeaveReviewsComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            title: '',
            content: '',
            agreed: false,
            valid: false,
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    checkValidity(){
        if(
            this.state.agreed === true
            && this.state.firstName !== null
            && this.state.lastName !== null
            && this.state.title !== null
            && this.state.content !== null){
            this.setState({valid: true});
        }
    }

    handleLeaveReviews(reviews){
        console.log(reviews);
        this.checkValidity();
        // if (this.state.valid){
        //console.log("it is valid");
        createReview(reviews)
            .then(newReview => {
                console.log("newReview", newReview)

                //not really need this part
                this.setState({
                    firstName: newReview.firstName,
                    lastName: newReview.lastName,
                    email: newReview.email,
                    title: newReview.title,
                    content: newReview.content,
                    agreed: newReview.agreed,
                    valid: newReview.valid,
                })

                alert("Success! Thanks!")

                this.props.history.push('/')})
        // }
    }

    render() {
        return(
            <div className="container">
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            First Name
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control name ="firstName"
                                          placeholder="Please Enter Your First Name"
                                          value={this.state.firstName}
                                          onChange={(e) => this.handleChange(e)}
                            />
                        </Col>
                        <Form.Label column sm={2}>
                            Last Name
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control name="lastName"
                                          placeholder="Please Enter Your Last Name"
                                          value={this.state.lastName}
                                          onChange={(e) => this.handleChange(e)}/>
                        </Col>
                    </Form.Group>

                    {/*<Form.Group as={Row} controlId="formHorizontalEmail">*/}
                    {/*    <Form.Label column sm={2}>*/}
                    {/*        Email*/}
                    {/*    </Form.Label>*/}
                    {/*    <Col sm={10}>*/}
                    {/*        <Form.Control type="email" placeholder="Please Enter Your Email" />*/}
                    {/*    </Col>*/}
                    {/*</Form.Group>*/}
                    <Form.Group as={Row} controlId="formHorizontalTitle">
                        <Form.Label column sm={2}>
                            Title
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="title"
                                          placeholder="Please Enter Your Title"
                                          value={this.state.title}
                                          onChange={(e) => this.handleChange(e)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalContent">
                        <Form.Label  column sm={2}>Content</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" rows={5}
                                          name="content"
                                          placeholder="I Love K&J"
                                          value={this.state.content}
                                          onChange={(e) => this.handleChange(e)}/>
                        </Col>

                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalCheck">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check label="Agree to our all terms and conditions"
                                        value={this.state.agreed}
                                        onChange={(e) => this.setState({agreed: true})}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit"
                                    onClick={() => this.handleLeaveReviews(this.state)}>Share</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
