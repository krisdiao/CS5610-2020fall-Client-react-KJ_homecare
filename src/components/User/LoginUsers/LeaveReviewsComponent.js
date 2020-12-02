import React, { useState }from 'react';
import {Form,Col,Row,Button} from 'react-bootstrap';
import reviewService from "../../../services/ReviewService";

export class LeaveReviewsComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            title: '',
            content: '',
            timeStamp: '',
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
            && this.state.timeStamp !== null
            && this.state.firstName !== null
            && this.state.lastName !== null
            && this.state.title !== null
            && this.state.content !== null){
            this.setState({valid: true});
        }
    }

    handleLeaveReviews(reviews){
        console.log(reviews);
        //this.checkValidity();
        // if (this.state.valid){
        //console.log("it is valid");
        reviewService.createReview(reviews)
            .then(newReview => {
                console.log("newReview", newReview)

                //not really need this part
                this.setState({
                    firstName: newReview.firstName,
                    lastName: newReview.lastName,
                    title: newReview.title,
                    content: newReview.content,
                    timeStamp: newReview.timeStamp,
                    agreed: true,
                    valid: newReview.valid,
                })

                alert("Success! Thanks!")

                this.props.history.push('/update-review')
            })
        // }
    }

    render() {
        return(
            <div className="container">
                <Form>
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
                            <Button type="button"
                                    onClick={() => this.handleLeaveReviews(this.state)}>Share</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
