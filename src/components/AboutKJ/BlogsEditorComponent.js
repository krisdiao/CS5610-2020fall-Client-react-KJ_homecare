import React from "react";
import {AdminComponent} from "../User/AdminComponent";
import {Container , Row , Col , Form,Button,FormControl} from 'react-bootstrap';
import {findAllBlogs,deleteBlog,createBlog,updateBlog} from "../../services/BlogService";
import {Link} from "react-router-dom";



export class BlogsEditorComponent extends React.Component{

    //TOdo： remove hard coded blogs
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
        findAllBlogs()
            .then(blogs =>{
                this.setState( {
                    blogs: blogs
                })
            })
    }

    deleteBlog =(blog)=> {
        deleteBlog(blog.id)
            .then(status => this.setState(prevState => ({
                    blogs: prevState.blogs.filter(blogs => blogs.id !== blogs.id)
                })
            ))
    }

    render() {
        return(
                <Container>
                    <Link to={`/createBlogs`}
                          className="btn btn-success pull-right">Create</Link>
                    <br/><br/>
                    <Row>
                        <Col sm={3}><AdminComponent/></Col>
                        <Col sm={9}>
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
                                {/*<tr>*/}
                                    {/*<td>1</td>*/}
                                    {/*<td>2</td>*/}
                                    {/*<td>3</td>*/}
                                    {/*<td>4</td>*/}
                                    {/*<td>*/}
                                    {/*    <button*/}
                                    {/*        onClick={ ()=> deleteBlog()}*/}
                                    {/*        className="btn btn-danger">*/}
                                    {/*        <i className="fa fa-trash-o" aria-hidden="true"></i>*/}
                                    {/*    </button>*/}
                                    {/*</td>*/}
                                {/*</tr>*/}
                                {this.state.blogs.map(blog =>
                                <tr>
                                    <td>
                                            <Link to ={`/blogs/${blog.id}`}>
                                                {blog.title}
                                            </Link>
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
