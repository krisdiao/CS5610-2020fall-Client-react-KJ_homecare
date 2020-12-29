import React from "react";
import {Link} from "react-router-dom";
import {Container , Row , Col} from 'react-bootstrap';
import ProfileComponent from "./ProfileComponent"
import blogService from "../../../services/BlogService";
import userService from "../../../services/UserService";

export class ViewMyLikedBlogsComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            blogsLikedIds:[],
            blogsLiked:[],
            profile: '',
            editing: false
        }
    }

    componentDidMount() {
        userService.profile()
            .then(profile =>  {this.setState({profile})})

        blogService.findBlogsByBlogsLiked(this.props.match.params.userId)
            .then(blogsLiked =>{
                if(blogsLiked !== undefined) {
                    this.setState({
                        blogsLiked
                    })
                }
            })

    }


    //this is to try to push to array also works
    //
    // componentDidMount() {
    //     blogService.findBlogsByBlogsLiked(this.state.profile.id)
    //         .then(blogsLikedIds =>{
    //             if(blogsLikedIds !== undefined) {
    //                 this.setState({
    //                     blogsLikedIds
    //                 })
    //                 blogsLikedIds.forEach(this.fetchBlogById)
    //             }
    //         })
    // }
    //
    //
    // fetchBlogById = (id) =>{
    //     blogService.findBlogById(id)
    //         .then(blog => {
    //
    //             // console.log("blog: ", blog);
    //
    //             this.setState(prevState => ({
    //                 blogsLiked: [...prevState.blogsLiked, blog]
    //             }));
    //         })
    // }

    render() {
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
                                                pathname: `/profile/${this.props.match.params.userId}/view-my-liked-blogs/${blogLiked.id}`,
                                                blogViewProps: { blog: blogLiked }
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
