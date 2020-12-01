import React from "react";
import {AdminComponent} from "../../AdminComponent";
import {Container , Row , Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import blogService from "../../../../services/BlogService";




export class BlogsListingComponent extends React.Component{

    state ={
        blogs:[
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
        blogService.findAllBlogs()
            .then(blogs =>{
                this.setState( {
                    blogs: blogs
                })
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        blogService.findAllBlogs()
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
        return(
                <Container>
                    <Row>
                        <Col sm={3}><AdminComponent/></Col>
                        <Col sm={9}>
                            <h1>Blogs</h1>
                            <Link to={`/create-blog`}
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
                                    {/*<BlogsViewComponent*/}
                                    {/*    blog={blog}*/}
                                    {/*    deleteBlog={this.deleteBlog}*/}

                                    {/*/>*/}

                                    <td>
                                            {/*<Link to ={`/blogs/${blog.id}`}*/}
                                            {/*      params={{ blog: blog }}*/}
                                            {/*>*/}
                                            {/*    {blog.title}*/}
                                            {/*</Link>*/}

                                        <Link to={{
                                                pathname: `/update-blog/${blog.id}`,
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
