import React from "react";
import {AdminComponent} from "../../AdminComponent";
import {Container , Row , Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import reviewService from "../../../../services/ReviewService"
import userService from "../../../../services/UserService";

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
        role: '',
    }

    componentDidMount() {
        reviewService.findAllReviews()
            .then(reviews =>{
                this.setState( {
                    reviews: reviews
                })
            })
        userService.profile()
            .then(profile => this.setState({
                role: profile.role
            }))
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

    render() {
        console.log("role: ", this.state.role)
        return(
            <Container>
                <Row>
                    <Col sm={3}><AdminComponent/></Col>
                    <Col sm={9}>
                        <h1>Reviews</h1>
                        <Link to={`/leave-review`}
                              className="btn btn-success pull-right">Create</Link>
                        <br/>
                        <br/>

                        <table className="table table-hover ">
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Last Name</th>
                                <th>First Name</th>
                                <th>Last Modified</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.reviews.map(review =>
                                <tr>
                                    <td>
                                        <Link to={{
                                            pathname: `/update-review/${review.id}`,
                                            reviewViewProps: { review: review }
                                        }}
                                        > {review.title}</Link>
                                    </td>
                                    <td>{review.lastName}</td>
                                    <td>{review.firstName}</td>
                                    <td>{review.timeStamp.toString()}</td>
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
