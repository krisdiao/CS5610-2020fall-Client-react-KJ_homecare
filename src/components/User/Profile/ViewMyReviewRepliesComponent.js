import React from "react";
import {Link} from "react-router-dom";
import {Container , Row , Col} from 'react-bootstrap';
import ProfileComponent from "./ProfileComponent"
import reviewReplyService from "../../../services/ReviewReplyService";
import userService from "../../../services/UserService";
import reviewService from "../../../services/ReviewService";

export class ViewMyReviewRepliesComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            reviewReplied:[],
            profile: '',
            editing: false
        }
    }

    componentDidMount() {
        userService.profile()
            .then(profile =>  {this.setState({profile})})

        reviewReplyService.findReviewsByReviewsReplied(this.props.match.params.userId)
            .then(reviewsReplied =>{
                if(reviewsReplied !== undefined) {
                    this.setState({
                        reviewsReplied
                    })
                }
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.reviewReplied.length !== this.state.reviewReplied.length) {
            reviewReplyService.findReviewsByReviewsReplied(this.props.match.params.userId)
                .then(reviewsReplied =>{
                    if(reviewsReplied !== undefined) {
                        this.setState({
                            reviewsReplied
                        })
                    }
                })
        }
    }

    render() {

        console.log(this.state)
        return(
            <div>
                <Container>
                    <Row>
                        <Col sm={3}><ProfileComponent {...this.props} profile={this.state.profile}/></Col>
                        <Col sm={9}>
                            <h1>My Replied Reviews</h1>
                            <br/>
                            <br/>
                            <table className="table table-hover ">
                                <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Last Name</th>
                                    <th>First Name</th>
                                    <th>Last Modified</th>
                                    <th>Repied Content</th>
                                    <th>EDIT</th>
                                    <th>DELETE</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.reviewReplied && this.state.reviewReplied.map(ReviewReplied =>
                                    <tr>
                                        <td>
                                            <Link to={{
                                                pathname: `/profile/${this.props.match.params.userId}/view-my-replied-reviews/${ReviewReplied.id}`,
                                                blogViewProps: { ReviewReplied: ReviewReplied }
                                            }}
                                            > {ReviewReplied.title}</Link>
                                        </td>
                                        <td>{ReviewReplied.lastName}</td>
                                        <td>{ReviewReplied.firstName}</td>
                                        <td>{ReviewReplied.timeStamp.toString()}</td>
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
