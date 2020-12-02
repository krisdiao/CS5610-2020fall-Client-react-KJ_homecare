import React from "react";
import reviewService from "../../services/ReviewService";
import Carousel from 'react-bootstrap/Carousel'
import StarRatingComponent from "../User/LoginUsers/StarRatingComponent"


export class ReviewsViewComponent extends React.Component {
    state = {
        reviews: [],
        space: " "
    }

    componentDidMount() {
        reviewService.findAllReviews()
            .then(reviews => {
                this.setState({
                    reviews: reviews
                })
            })
    }


    render() {
        return(
                <Carousel>
                    {this.state.reviews.map(review =>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/review-background1.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>

                                <i class="fa fa-quote-left fa-3x fa-pull-left fa-border" aria-hidden="true"></i>
                                <h2>{review.title}</h2>
                                <br/>
                                <StarRatingComponent stars={review.stars} editing={false}/>
                                <br/>
                                <h5>{review.content}</h5>
                                <br/>
                                {review.firstName}{this.state.space}{review.lastName}
                                {this.state.space}
                                {this.state.space}
                                {review.timeStamp.toString().substr(0, 10)}
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}
                </Carousel>
        )
    }
}
