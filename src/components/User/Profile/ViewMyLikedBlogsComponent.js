import React from "react";
import {Link} from "react-router-dom";
import {Container , Row , Col} from 'react-bootstrap';
import ProfileComponent from "./ProfileComponent"
import blogService from "../../../services/BlogService";

export class ViewMyLikedBlogsComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            blogsLikedIds:[],
            blogsLiked:[],
            profile: this.props.location.profileViewProps.profile,
            editing: false
        }
    }

    componentDidMount() {
        blogService.findBlogsByBlogsLiked(this.state.profile.id)
            .then(blogsLiked =>{
                this.setState( {
                    blogsLiked
                })
            })
    }


    //TODO: this is to try to push to array failed, so worked arond it by return array result directly from server

    // componentDidMount() {
    //     blogService.findBlogsByBlogsLiked(this.state.profile.id)
    //         .then(blogsLikedIds =>{
    //             this.setState( {
    //                 blogsLikedIds
    //             })
    //             blogsLikedIds.forEach(this.fetchBlogById)
    //         })
    // }
    //
    //
    // fetchBlogById(id) {
    //     console.log("Entered: ", id);
    //     blogService.findBlogById(id)
    //         .then(blog => {
    //
    //             console.log("blog: ", blog);
    //
    //             this.setState(prevState => ({
    //                 blogsLiked: [...prevState.blogsLiked, blog]
    //             }));
    //         })
    //
    // }

    render() {

        console.log(this.state)
        return(
            <div>
                <Container>
                    <Row>
                        <Col sm={3}><ProfileComponent {...this.props} profile={this.state.profile}/></Col>
                        <Col sm={9}>
                            <h1>My Liked Blogs</h1>
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
                                {this.state.blogsLiked && this.state.blogsLiked.map(blogLiked =>
                                    <tr>
                                        <td>
                                            <Link to={{
                                                pathname: `/profile/view-my-liked-blogs/blog/${blogLiked.id}`,
                                                blogLikedViewProps: { blogLiked: blogLiked }
                                            }}
                                            > {blogLiked.title}</Link>
                                        </td>
                                        <td>{blogLiked.lastName}</td>
                                        <td>{blogLiked.firstName}</td>
                                        <td>{blogLiked.timeStamp.toString()}</td>
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
