import React from "react";
import {Form,Col,Row} from 'react-bootstrap';
import reviewService from "../../../../services/ReviewService";


export class ReviewsViewForStaffsComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            review: '',
            editing: false
        }
    }

    componentDidMount() {
        // console.log(this.props.match.params.reviewId)

        reviewService.findReviewById(this.props.match.params.reviewId)
            .then(review => {
                this.setState({review})
            })
    }

    render() {
        return(
            <div className="container">
                <Form>
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
                            <h4>{this.state.review.title}</h4>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalContent">
                        <Form.Label  column sm={2}>Content</Form.Label>
                        <Col sm={10}>
                            <h4>{this.state.review.content}</h4>
                        </Col>

                    </Form.Group>
                </Form>
            </div>
        )
    }
}
