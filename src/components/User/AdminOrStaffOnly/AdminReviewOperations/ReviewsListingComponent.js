import React from "react";
import {AdminComponent} from "../../AdminComponent";
import {Container , Row , Col, Modal, Form, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import reviewService from "../../../../services/ReviewService"
import reviewReplyService from "../../../../services/ReviewReplyService";
import ReviewReplyComponent from "../../../AboutKJ/ReviewReplyComponent";

export class ReviewsListingComponent extends React.Component{

    state ={
        reviews:[
            {
                id:"1",
                title: "a",
                firstName: "qqqqq",
                lastName: "mmmmm",
                timeStamp: new Date(),
            },
            {
                id:"2",
                title: "b",
                firstName: "wwwwwww",
                lastName: "nnnnnn",
                timeStamp: new Date(),
            },
            {
                id:"3",
                title: "c",
                firstName: "eeeee",
                lastName: "zzzzz",
                timeStamp: new Date(),
            },
        ],
        profile: [],
        reviewsReplied: [],
        isEditing: false,
        review: '',
        reply: ''

    }

    componentDidMount() {

        reviewService.findAllReviews()
            .then(reviews =>{
                this.setState( {
                    reviews: reviews
                })
            })

        // reviewReplyService.findReviewsByReviewsReplied(this.state.profile.id)
        //     .then(reviewsReplied =>{
        //         if(reviewsReplied !== undefined) {
        //             this.setState({
        //                 reviewsReplied
        //             })
        //         }
        //     })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        reviewService.findAllReviews()
            .then(reviews =>{
                this.setState( {
                    reviews: reviews
                })
            })
    }

    deleteReview =(review)=> {
        reviewService.deleteReview(review.id)
            .then(status => this.setState(prevState => ({
                reviews: prevState.reviews.filter(reviews => reviews.id !== reviews.id)
                })
            ))


    }

    openEditor = (review) => {
        this.setState({
            isEditing: true,
            review
        });

    }
    closeEditor = () => {
        console.log("review: ", this.state.review)
        console.log("reply: ", this.state.reply)
        reviewReplyService.createReply(this.state.review.id, this.state.reply)
            .then(reply =>{
                console.log("return reply: ", this.state.reply)
                if(reply !== undefined) {
                    this.setState({
                        reply
                    })
                }
            })
        this.setState({ isEditing: false })
    };

    render() {
        // console.log("state: ", this.state)
        return(
            <Container>
                <Row>
                    <Col sm={3}><AdminComponent/></Col>
                    <Col sm={9}>
                        <Row>
                            <Col sm={9}><h1>Reviews</h1></Col>
                            <Col sm={3}>
                                <Link to={`/admin/reviews/leave-review`}
                                      className="btn btn-success pull-right">Create</Link>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <table className="table table-hover ">
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Last Name</th>
                                <th>First Name</th>
                                <th>Last Modified</th>
                                <th>Reply content</th>
                                <th>To Reply</th>
                                <th>Delete Review</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.state.reviews.map(review =>
                                    <tr>
                                        <td>
                                            <Link to={{
                                                pathname: `/admin/update-review/${review.id}`,
                                                reviewViewProps: { review }
                                            }}
                                            > {review.title}</Link>
                                        </td>
                                        <td>{review.lastName}</td>
                                        <td>{review.firstName}</td>
                                        <td>{review.timeStamp.toString()}</td>
                                        <td>
                                            <Link to={{
                                                pathname: `/admin/update-review/${review.id}`,
                                                reviewViewProps: { review }
                                            }}
                                            >
                                                <ReviewReplyComponent review={review}/>
                                            </Link>
                                        </td>
                                        <td>
                                            <button
                                                type="button"
                                                onClick={ ()=> this.openEditor(review)}
                                                className="btn btn-primary">
                                                <i className="fa fa-pencil" aria-hidden="true"></i>
                                            </button>
                                            <Modal show={this.state.isEditing} onHide={this.closeEditor}>
                                                <Modal.Header>
                                                    <Modal.Title>Please enter the reply before submit</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Control name="email"
                                                                      type="textarea"
                                                                      placeholder="Enter reply here"
                                                                      value={this.state.reply}
                                                                      onChange={(e) => this.setState({reply: e.target.value})}
                                                        />
                                                    </Form.Group>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="success"                                                 type="button"
                                                            className="orangeBg btn-success"
                                                            onClick={this.closeEditor}>Submit</Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </td>
                                        <td>
                                            <button
                                                onClick={ ()=> this.deleteReview(review)}
                                                className="btn btn-danger">
                                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>

        )
    }
}
