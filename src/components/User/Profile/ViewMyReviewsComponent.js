import React from "react";
import reviewService from "../../../services/ReviewService";
import {Link} from "react-router-dom";
import {Container , Row , Col} from 'react-bootstrap';
import ProfileComponent from "./ProfileComponent"


export class ViewMyReviewsComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            reviews:[],
            profile: this.props.location.profileViewProps.profile,
            editing: false
        }
    }

    componentDidMount() {
        reviewService.findReviewsForUser(this.state.profile.id)
            .then(reviews =>{
                this.setState( {
                    reviews: reviews
                })
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        reviewService.findReviewsForUser(this.state.profile.id)
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
        // console.log(this.state.reviews)
        return(
            <div>
                <Container>
                    <Row>
                        <Col sm={3}><ProfileComponent
                            {...this.props}
                            profile={this.state.profile}/></Col>
                        <Col sm={9}>
                            <h1>My Reviews</h1>
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
                                                pathname: `/profile/view-my-reviews/update-review/${review.id}`,
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
            </div>
        )
    }


}
