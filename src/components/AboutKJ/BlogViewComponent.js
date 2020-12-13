import React from "react";
import {Form,Col,Row,Card} from 'react-bootstrap';
import {Link} from "react-router-dom";
import blogService from "../../services/BlogService";
import userService from "../../services/UserService";


export class BlogViewComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            blog: this.props.location.blogViewProps.blog,
            editing: false
        }
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => {
        this.setState({ isOpen: false })
        this.props.history.push('/login')
    };

    handleCreateBlogsLiked(userId, blog){

        userService.profile()
            .then(profile =>  {
                if(profile !== undefined) {
                    this.setState({
                        profile: profile
                    })
                }else{
                    alert("Log in is required to like our blogs! Thank you!")
                    this.props.history.push('/login')
                }
            })

        blogService.createBlogsLiked(userId,blog)
            .then(newBlogLiked => {
                this.openModal();
                this.setState({
                    firstName: newBlogLiked.firstName,
                    lastName: newBlogLiked.lastName,
                    title: newBlogLiked.title,
                    content: newBlogLiked.content,
                    timeStamp: newBlogLiked.timeStamp,
                    valid: true,
                })
            })
    }


    render() {
        console.log(this.state.blog)
        return(
            <div className="container">

                <Card >

                    <Card.Body>
                        <Card.Title>
                            <h1>
                                {this.state.blog.title}
                                <button
                                    onClick={() => this.handleCreateBlogsLiked(this.state)}
                                    className="btn btn-danger pull-right">
                                    <i className="fa fa-heart-o" aria-hidden="true"></i>

                                </button>
                            </h1>

                        </Card.Title>
                        <br/>
                        <Card.Text>
                            <div dangerouslySetInnerHTML={ {__html: this.state.blog.content} }/>
                            {/*{blog.content}*/}
                        </Card.Text>
                        <footer className="blockquote-footer">
                            <cite title="Source Title">{this.state.blog.firstName}&nbsp;{this.state.blog.lastName}</cite>
                        </footer>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        {this.state.blog.timeStamp.toString()}
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}
