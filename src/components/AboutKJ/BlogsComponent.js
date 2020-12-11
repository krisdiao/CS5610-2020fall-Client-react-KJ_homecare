import React from 'react';
import blogService from "../../services/BlogService";
import {Link} from "react-router-dom";
import {AdminComponent} from "../User/AdminComponent";
import {Container , Row , Col ,Card,Button} from 'react-bootstrap';



export class BlogsComponent extends React.Component{

    state ={
        blogs:[
            {
                id:"1",
                title: "a",
                firstName: "qqqqq",
                lastName: "mmmmm",
                timeStamp: new Date(),
                content: "I love K&J",
            },
            {
                id:"2",
                title: "b",
                firstName: "wwwwwww",
                lastName: "nnnnnn",
                timeStamp: new Date(),
                content: "I love K&J",

            },
            {
                id:"3",
                title: "c",
                firstName: "eeeee",
                lastName: "zzzzz",
                timeStamp: new Date(),
                content: "I love K&J",

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

    render() {
        return(
            <Container>
                {/*<table className="table table-hover ">*/}
                {/*            <thead>*/}
                {/*            <tr>*/}
                {/*                <th>Title</th>*/}
                {/*                <th>Last Name</th>*/}
                {/*                <th>First Name</th>*/}
                {/*                <th>Last Modified</th>*/}
                {/*            </tr>*/}
                {/*            </thead>*/}
                {/*            <tbody>*/}
                {/*            {this.state.blogs.map(blog =>*/}
                {/*                <tr>*/}
                {/*                    <td>*/}
                {/*                        <Link to={{*/}
                {/*                            pathname: `/about/blogs/${blog.id}`,*/}
                {/*                            blogViewProps: { blog: blog }*/}
                {/*                        }}*/}
                {/*                        > {blog.title}</Link>*/}
                {/*                    </td>*/}
                {/*                    <td>{blog.lastName}</td>*/}
                {/*                    <td>{blog.firstName}</td>*/}
                {/*                    <td>{blog.timeStamp.toString()}</td>*/}

                {/*                </tr>*/}
                {/*            )}*/}
                {/*            </tbody>*/}

                {/*</table>*/}
                <div>
                    <br/>
                    {this.state.blogs.map(blog =>
                    <Card className="text-center">
                            <Card.Body>
                                <Card.Title>
                                    <Link to={{
                                        pathname: `/about/blogs/${blog.id}`,
                                        blogViewProps: { blog: blog }}}>
                                        <h3>
                                            {blog.title}
                                        </h3>

                                    </Link>
                                    </Card.Title>
                                    <Card.Text>
                                        <div dangerouslySetInnerHTML={ {__html: blog.content} }/>
                                        {/*{blog.content}*/}
                                    </Card.Text>
                                    <footer className="blockquote-footer">
                                        <cite title="Source Title">{blog.firstName}&nbsp;{blog.lastName}   </cite>
                                    </footer>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                            {blog.timeStamp.toString()}
                            </Card.Footer>
                    </Card>
                    )}
                </div>
            </Container>
        )
    }
}
