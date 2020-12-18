import React from "react";
import {Form,Col,Row,Button, Modal} from 'react-bootstrap';
import reviewService from "../../../services/ReviewService"
import StarRatingComponent from "./StarRatingComponent";
import userService from "../../../services/UserService";
import reviewReplyService from "../../../services/ReviewReplyService";
import UpdateReviewReplyComponent from"../AdminOrStaffOnly/AdminReviewOperations/UpdateReviewReplyComponent"
import {leadToCorrectLoginUserPage} from "../../../common/util";

export class ReviewsEditingComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            review: this.props.location.reviewViewProps.review,
            editing: true,
            replies:[],
            profile: '',
            isOpen: false,
            hasReply: false

        }
    }

    componentDidMount() {
        userService.profile()
            .then(profile => this.setState({profile}))

        if(this.state.review !== undefined){
            reviewReplyService.findAllReliesForReview(this.state.review.id)
                .then(replies => {
                    if(replies !== undefined) {
                        console.log("replies: ", replies)

                        this.setState({
                            replies,
                            hasReply: true
                        })
                    }
                })
        }
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => {
        this.setState({ isOpen: false })
        leadToCorrectLoginUserPage(this.state.profile, this.props.history)
    };

    handleSaveReview(review){
        console.log("state: ", this.state);
        //debugger
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
        let {hasReply, replies, profile, review, editing, isOpen,  } = this.state;
        return(
            <div className="container">
                <Form>

                    <button className="greenBg form-control-lg btn btn-success"
                            onClick={() => leadToCorrectLoginUserPage(profile, this.props.history)}>
                        <i className="fa fa-arrow-left " aria-hidden="true"></i>
                    </button>

                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            First Name
                        </Form.Label>
                        <Col sm={4}>
                            <h4>{review.firstName}</h4>
                        </Col>
                        <Form.Label column sm={2}>
                            Last Name
                        </Form.Label>
                        <Col sm={4}>
                            <h4>{review.lastName}</h4>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalTitle">
                        <Form.Label column sm={2}>
                            Title
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                          types="text"
                                          value={review.title}
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
                                value={review.stars}
                                stars={review.stars}
                                editing={editing}
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
                                          value={review.content}
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
                                    className="orangeBg btn-success"
                                    onClick={() => this.handleSaveReview(this.state)}>
                                Save
                            </Button>
                            <Modal show={isOpen} onHide={this.closeModal}>
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
                    <br/>
                    {
                        profile.role === "ADMIN" && hasReply && replies && replies.map(reply =>
                            <UpdateReviewReplyComponent  {...this.props} reply={reply}/>)
                    }
                </Form>
            </div>
        )
    }
}
