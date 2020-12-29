import React from "react";
import {AdminComponent} from "../../AdminComponent";
import {Container , Row , Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import reviewService from "../../../../services/ReviewService"
import {StaffComponent} from "../../StaffComponent";

export class ReviewsListingForStaffsComponent extends React.Component{

    state ={
        reviews:[],
    }

    componentDidMount() {
        reviewService.findAllReviews()
            .then(reviews =>{this.setState( {reviews})})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.reviews.length !== this.state.reviews.length) {
            reviewService.findAllReviews()
                .then(reviews =>{this.setState( {reviews})})
        }
    }

    deleteReview =(review)=> {
        reviewService.deleteReview(review.id)
            .then(status => this.setState(prevState => ({
                reviews: prevState.reviews.filter(reviews => reviews.id !== reviews.id)
                })
            ))
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col sm={3}><StaffComponent/></Col>
                    <Col sm={9}>
                        <h1>Reviews</h1>
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
                                            pathname: `/staff/reviews-for-staffs/${review.id}`,
                                            reviewViewProps: { review: review }
                                        }}
                                        > {review.title}</Link>
                                    </td>
                                    <td>{review.lastName}</td>
                                    <td>{review.firstName}</td>
                                    <td>{review.timeStamp.toString()}</td>

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
