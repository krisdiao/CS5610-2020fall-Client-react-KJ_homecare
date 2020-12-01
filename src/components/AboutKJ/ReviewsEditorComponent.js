import React from "react";
import {AdminComponent} from "../User/AdminComponent";
import {Container , Row , Col , Form,Button,FormControl} from 'react-bootstrap';
import {findAllBlogs} from "../../services/BlogService";
import {deleteReview, findAllReviews} from "../../services/ReviewService";
import {Link} from "react-router-dom";

export class ReviewsEditorComponent extends React.Component{

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
        findAllReviews()
            .then(reviews =>{
                this.setState( {
                    reviews: reviews
                })
            })
    }

    deleteReview =(review)=> {
        deleteReview(review.id)
            .then(status => this.setState(prevState => ({
                reviews: prevState.reviews.filter(reviews => reviews.id !== reviews.id)
                })
            ))


    }

    render() {
        return(
            <Container>
                <Row>
                    <Col sm={3}><AdminComponent/></Col>
                    <Col sm={9}>
                        <h1>Reviews</h1>
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
                                        <Link to ={`/reviews/${review.id}`}>
                                            {review.title}
                                            {/*{review.id}*/}
                                        </Link>
                                    </td>
                                    <td>{review.lastName}</td>
                                    <td>{review.firstName}</td>
                                    <td>{review.timeStamp.toUTCString()}</td>
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
