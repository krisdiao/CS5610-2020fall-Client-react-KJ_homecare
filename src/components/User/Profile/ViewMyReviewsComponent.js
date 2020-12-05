import React from "react";
import reviewService from "../../../services/ReviewService";
import {Link} from "react-router-dom";
import {Container , Row , Col,Form,Button} from 'react-bootstrap';
import userService from "../../../services/UserService";

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
        reviewService.findReviewsForUser(this.state.profile.userId)
            .then(reviews =>{
                this.setState( {
                    reviews: reviews
                })
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        reviewService.findReviewsForUser(this.state.profile.userId)
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
        return(
            <div>
                <Container>
                    <h3>Welcome back, my dear
                        {this.state.space}
                        <strong>
                            {this.state.profile.firstName} {this.state.profile.lastName}!
                        </strong>
                    </h3>
                    <Row>
                        <Col  sm={3}>
                            <ul className="list-group text-center">
                                <li className="list-group-item">
                                    <Link to={`/profile`}>
                                        Main Page
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={`/view-my-reviews`}>
                                        Update My Information
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={`/profile`}>
                                        View My Reviews
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={`/profile`}>
                                        View My Job Application
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={`/profile`}>
                                        My Schedule
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col sm={9}>
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
                                    <tr>
                                        <td>{this.state.reviews.title}</td>
                                        <td>{this.state.reviews.lastName}</td>
                                        <td>{this.state.reviews.firstName}</td>
                                        <td>{this.state.reviews.timeStamp}</td>
                                        {/*<td>*/}
                                        {/*    {this.state.reviews.map(review =>*/}
                                        {/*    <button*/}
                                        {/*        onClick={ ()=> this.deleteReview(review)}*/}
                                        {/*        className="btn btn-danger">*/}
                                        {/*        <i className="fa fa-trash-o" aria-hidden="true"></i>*/}
                                        {/*    </button>*/}
                                        {/*    )}*/}
                                        {/*</td>*/}
                                    </tr>
                                </tbody>
                            </table>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }


}
