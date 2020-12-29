import React from "react";
import {AdminComponent} from "../../AdminComponent";
import {Container , Row , Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import blogService from "../../../../services/BlogService";
import {StaffComponent} from "../../StaffComponent";




export class BlogsListingForStaffsComponent extends React.Component{

    state ={
        blogs:[],
    }

    componentDidMount() {
        blogService.findAllBlogs()
            .then(blogs =>{this.setState( {blogs})})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevState.blogs.length !== this.state.blogs.length) {
            blogService.findAllBlogs()
                .then(blogs =>{this.setState( {blogs})})
        }
    }


    deleteBlog =(blog)=> {
        blogService.deleteBlog(blog.id)
            .then(status => this.setState(prevState => ({
                    blogs: prevState.blogs.filter(blogs => blogs.id !== blogs.id)
                })
            ))
    }

    render() {
        return(
                <Container>
                    <Row>
                        <Col sm={3}><StaffComponent/></Col>
                        <Col sm={9}>
                            <h1>Blogs</h1>
                            <Link to={`/staff/create-blog-by-staff`}
                                  className="btn btn-success pull-right">Create</Link>
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
                                                pathname: `/staff/update-blog/${blog.id}`,
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
        )
    }
}
