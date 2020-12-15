import React from "react";
import {Link} from "react-router-dom";
import {Container , Row , Col} from 'react-bootstrap';
import ProfileComponent from "./ProfileComponent"
import blogService from "../../../services/BlogService";
import BlogReplyService from "../../../services/BlogReplyService";

export class ViewMyRepliedBlogsComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            blogs:[],
            reply:[],
            profile: this.props.location.profileViewProps.profile,
            editing: false
        }
    }

    componentDidMount() {
        BlogReplyService.findBlogsByBlogsReplied(this.state.reply.userId)
            .then(blogs =>{
                this.setState( {
                    blogs: blogs
                })
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        BlogReplyService.findBlogsByBlogsReplied(this.state.reply.userId)
            .then(blogs =>{
                this.setState( {
                    blogs: blogs
                })
            })
    }

    // deleteReply =(blogId,reply)=> {
    //     BlogReplyService.deleteReply(reply.id)
    //         .then(status => this.setState(prevState => ({
    //             reply: prevState.reply.filter(reply => reply.id !== reply.id)
    //             })
    //         ))
    // }

    render() {
        // console.log(this.state.blogs)
        return(
            <div>
                <Container>
                    <Row>
                        <Col sm={3}><ProfileComponent {...this.props} profile={this.state.profile}/></Col>
                        <Col sm={9}>
                            <h1>My Replied Blogs</h1>
                            <br/>
                            <br/>
                            <table className="table table-hover ">
                                <thead>
                                <tr>
                                    <th>Replied Blog Title</th>
                                    <th>Last Name</th>
                                    <th>First Name</th>
                                    <th>Last Modified</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.reply.map(reply =>
                                    <tr>
                                        <td>
                                            <Link to={{
                                                pathname: `/profile/view-my-replied-blogs/update-reply/${reply.id}`,
                                                replyViewProps: { reply: reply }
                                            }}
                                            > {reply.title}</Link>
                                        </td>
                                        <td>{reply.lastName}</td>
                                        <td>{reply.firstName}</td>
                                        <td>{reply.timeStamp.toString()}</td>
                                        {/*<td>*/}
                                        {/*    <button*/}
                                        {/*        onClick={ ()=> this.deleteReply(blogId,reply)}*/}
                                        {/*        className="btn btn-danger">*/}
                                        {/*        <i className="fa fa-trash-o" aria-hidden="true"></i>*/}
                                        {/*    </button>*/}
                                        {/*</td>*/}

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