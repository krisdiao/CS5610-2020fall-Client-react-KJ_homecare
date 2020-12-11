import React from "react";
import {Link} from "react-router-dom";
import {Container , Row , Col} from 'react-bootstrap';
import ProfileComponent from "./ProfileComponent"
import blogService from "../../../services/BlogService";

export class ViewMyBlogsComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            blogs:[],
            profile: this.props.location.profileViewProps.profile,
            editing: false
        }
    }

    componentDidMount() {
        blogService.findBlogsForUser(this.state.profile.id)
            .then(blogs =>{
                this.setState( {
                    blogs: blogs
                })
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        blogService.findBlogsForUser(this.state.profile.id)
            .then(blogs =>{
                this.setState( {
                    blogs: blogs
                })
            })
    }

    deleteBlog =(blog)=> {
        blogService.deleteBlog(blog.id)
            .then(status => this.setState(prevState => ({
                    blogs: prevState.blogs.filter(blogs => blogs.id !== blogs.id)
                })
            ))
    }

    render() {
        // console.log(this.state.blogs)
        return(
            <div>
                <Container>
                    <Row>
                        <Col sm={3}><ProfileComponent {...this.props} profile={this.state.profile}/></Col>
                        <Col sm={9}>
                            <h1>My Blogs</h1>
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
                                {this.state.blogs.map(blog =>
                                    <tr>
                                        <td>
                                            <Link to={{
                                                pathname: `/profile/view-my-blogs/update-blog/${blog.id}`,
                                                blogViewProps: { blog: blog }
                                            }}
                                            > {blog.title}</Link>
                                        </td>
                                        <td>{blog.lastName}</td>
                                        <td>{blog.firstName}</td>
                                        <td>{blog.timeStamp.toString()}</td>
                                        <td>
                                            <button
                                                onClick={ ()=> this.deleteBlog(blog)}
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
