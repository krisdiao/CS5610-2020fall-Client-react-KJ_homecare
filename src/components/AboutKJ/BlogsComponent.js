import React from 'react';
import {findAllBlogs} from "../../services/BlogService";
import {Link} from "react-router-dom";


export class BlogsComponent extends React.Component{

    state ={
        blogs:[],
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
                {/*<Link to={`/createBlogs`}*/}
                {/*    className="btn btn-success pull-right">Create</Link>*/}
                {/*<br/><br/>*/}
                <div>
                    <table className="table table-hover ">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Last Modified</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>
                        {/*<tr>*/}
                        {/*    <td>*/}
                        {/*        <Link to ={`/blogs/${this.props.blogs._id}`}>*/}
                        {/*            {this.props.blogs.title} */}
                        {/*            {this.props.blogs._id}*/}
                        {/*        </Link>*/}
                        {/*    </td>*/}
                        {/*    <td>{this.props.blogs.author}</td>*/}
                        {/*    <td>{this.props.blogs.lastModified}</td>*/}
                        {/*</tr>*/}
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}
