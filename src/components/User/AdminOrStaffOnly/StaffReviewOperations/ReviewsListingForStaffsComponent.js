import React from "react";
import {AdminComponent} from "../../AdminComponent";
import {Container , Row , Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import reviewService from "../../../../services/ReviewService"
import {StaffComponent} from "../../StaffComponent";

export class ReviewsListingForStaffsComponent extends React.Component{

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
    }

    componentDidMount() {
        reviewService.findAllReviews()
            .then(reviews =>{
                this.setState( {
                    blogs: reviews
                })
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        reviewService.findAllReviews()
            .then(reviews =>{
                this.setState( {
                    blogs: reviews
                })
            })
    }

    deleteReview =(review)=> {
        reviewService.deleteReview(review.id)
            .then(status => this.setState(prevState => ({
                blogs: prevState.blogs.filter(reviews => reviews.id !== reviews.id)
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
                                            pathname: `/reviews-for-staffs/${review.id}`,
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
