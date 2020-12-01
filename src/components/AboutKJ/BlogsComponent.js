import React from 'react';
import {findAllBlogs} from "../../services/BlogService";
import {Link} from "react-router-dom";


export class BlogsComponent extends React.Component{

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

    render() {
        return(
            <div className="container">
                <h1 className="form-inline">
                    Welcome to K&J's Korner
                </h1>
                <Link to={`/create-blogs`}
                    className="btn btn-success pull-right">Create</Link>
                <br/><br/>
                <div>
                    <table className="table table-hover ">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Last Modified</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.blogs.map(blog =>
                            <tr>
                                <td>
                                    <Link to ={`/update-blogs/${blog.id}`}>
                                        {blog.title}
                                        {/*{blog.id}*/}
                                    </Link>
                                </td>
                                <td>{blog.lastName}</td>
                                <td>{blog.firstName}</td>
                                <td>{blog.timeStamp.toUTCString()}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}
