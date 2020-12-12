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
                title: "The dreams of yesterday are the hopes of today and the reality of tomorrow.",
                firstName: "Kris",
                lastName: "Gao",
                timeStamp: new Date(),
                content: "Never in all their history have men been able truly to conceive of the world as one: a single " +
                    "sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, " +
                    "in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. " +
                    "The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.\n" +
                    "\n" +
                    "Science cuts two ways, of course; its products can be used for both good and evil. But there's no " +
                    "turning back from science. The early warnings about technological dangers also come from science.",
            },
            {
                id:"2",
                title: "admin test",
                firstName: "Kris",
                lastName: "nnnnnn",
                timeStamp: new Date(),
                content: "I love K&J",

            },
            {
                id:"3",
                title: "staff test",
                firstName: "Kris",
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
            <Container className="imageBG">
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
                                    <Card.Text className="text-left">
                                        <div dangerouslySetInnerHTML={ {__html: blog.content.substr(0,300)} }/>
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
