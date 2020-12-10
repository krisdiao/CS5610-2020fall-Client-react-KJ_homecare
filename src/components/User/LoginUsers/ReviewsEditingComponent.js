import React from "react";
import {Form,Col,Row,Button, Modal} from 'react-bootstrap';
import reviewService from "../../../services/ReviewService"
import StarRatingComponent from "./StarRatingComponent";
var leadToCorrectLoginUserPage = require('../../../common/util').leadToCorrectLoginUserPage;


export class ReviewsEditingComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            profile: '',
            review: this.props.location.reviewViewProps.review,
            editing: false,
            isOpen: false
        }
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => {
        this.setState({ isOpen: false })
        leadToCorrectLoginUserPage(this.state.profile, this.props.history)
    };

    handleSaveReview(review){
        console.log(review);
        reviewService.updateReview(review.review.id, review.review)
            .then(newReview => {
                this.openModal();

                console.log("newReview", newReview)

                //not really need this part
                this.setState({
                    review: newReview,
                    editing: false,
                })
        })
    }


    //receiving data from child
    handleCallback = (ratingValue) =>{
        console.log("ratingValue : ", ratingValue)
        this.setState(prevState => ({
            review: {...prevState.review, stars: ratingValue}
        }))
    }


    render() {
        console.log(this.state.review)
        return(
            <div className="container">
                <Form>

                    <button className="form-control-lg btn btn-success"
                            onClick={() => leadToCorrectLoginUserPage(this.state.profile, this.props.history)}>
                        <i className="fa fa-arrow-left " aria-hidden="true"></i>
                    </button>

                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            First Name
                        </Form.Label>
                        <Col sm={4}>
                            <h4>{this.state.review.firstName}</h4>
                        </Col>
                        <Form.Label column sm={2}>
                            Last Name
                        </Form.Label>
                        <Col sm={4}>
                            <h4>{this.state.review.lastName}</h4>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalTitle">
                        <Form.Label column sm={2}>
                            Title
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                          types="text"
                                          value={this.state.review.title}
                                          onChange={(event) => {
                                              const newTitle = event.target.value
                                              this.setState(prevState => ({
                                                  review: {...prevState.review, title: newTitle}
                                              }))
                                          }}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalTitle">
                        <Form.Label column sm={2}>
                            Rating
                        </Form.Label>
                        <Col sm={10}>
                            <StarRatingComponent
                                name="stars"
                                value={this.state.review.stars}
                                stars={this.state.review.stars}
                                editing={this.state.editing}
                                reivewCallback={this.handleCallback}
                                // onChange={(e) => this.handleChange(e)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalContent">
                        <Form.Label  column sm={2}>Content</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" rows={5}
                                          name="content"
                                          value={this.state.review.content}
                                          onChange={(event) => {
                                              const newContent = event.target.value
                                              this.setState(prevState => ({
                                                  review: {...prevState.review, content: newContent}
                                              }))
                                          }}
                            />
                        </Col>

                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="button"
                                    onClick={() => this.handleSaveReview(this.state)}>
                                Save
                            </Button>
                            <Modal show={this.state.isOpen} onHide={this.closeModal}>
                                <Modal.Header>
                                    <Modal.Title>Hi there!</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Success! Thanks!</Modal.Body>
                                <Modal.Footer>
                                    <button onClick={this.closeModal}>Close</button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
