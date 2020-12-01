import React from "react";
import reviewService from "../../services/ReviewService";
import {Link} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'



export class ReviewsViewComponent extends React.Component{
    // state ={
    //     reviews:[],
    // }
    state ={
        reviews:[
            {
                id:"1",
                title: "a",
                firstName: "qqqqq",
                lastName: "mmmmm",
                timeStamp: new Date(),
                stars: 2.5
            },
            {
                id:"2",
                title: "b",
                firstName: "wwwwwww",
                lastName: "nnnnnn",
                timeStamp: new Date(),
                stars: 1
            },
            {
                id:"3",
                title: "c",
                firstName: "eeeee",
                lastName: "zzzzz",
                timeStamp: new Date(),
                stars: 5

            },
        ],
    }

    componentDidMount() {
        reviewService.findAllReviews()
            .then(reviews =>{
                this.setState( {
                    reviews: reviews
                })
            })
    }
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
// export class ReviewsViewComponent extends React.Component{
//     // state ={
//     //     reviews:[],
//     // }
//     state ={
//         reviews:[
//             {
//                 id:"1",
//                 title: "a",
//                 firstName: "qqqqq",
//                 lastName: "mmmmm",
//                 timeStamp: new Date(),
//                 stars: 2.5
//             },
//             {
//                 id:"2",
//                 title: "b",
//                 firstName: "wwwwwww",
//                 lastName: "nnnnnn",
//                 timeStamp: new Date(),
//                 stars: 1
//             },
//             {
//                 id:"3",
//                 title: "c",
//                 firstName: "eeeee",
//                 lastName: "zzzzz",
//                 timeStamp: new Date(),
//                 stars: 5
//
//             },
//         ],
//     }
//
//     componentDidMount() {
//         reviewService.findAllReviews()
//             .then(reviews =>{
//                 this.setState( {
//                     reviews: reviews
//                 })
//             })
//     }
//     render() {
//         return(
//             <div className="container">
//                 <table className="table table-hover ">
//                     <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Last Name</th>
//                         <th>First Name</th>
//                         <th>Last Modified</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {this.state.reviews.map(review =>
//                         <tr>
//                             <td>
//                                 <Link to={{
//                                     pathname: `/update-review/${review.id}`,
//                                     reviewViewProps: { review: review }
//                                 }}
//                                 > {review.title}</Link>
//                             </td>
//                             <td>{review.lastName}</td>
//                             <td>{review.firstName}</td>
//                             <td>{review.timeStamp.toString()}</td>
//                             <td>{review.stars}</td>
//                         </tr>
//                     )}
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }
