import React from "react";
import {Modal,Card} from 'react-bootstrap';
import blogService from "../../services/BlogService";
import userService from "../../services/UserService";


export class BlogViewComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            blog: this.props.location.blogViewProps.blog,
            editing: false,
            agreed: false,
            isOpen: false,
            profile: {},
            isLoggedIn: false
        }
    }

    componentDidMount() {
        userService.profile()
            .then(profile =>  {
                if(profile !== undefined) {
                    this.setState({
                        profile: profile,
                        isLoggedIn: true
                    })
                }
            })
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => {
        this.setState({ isOpen: false })
        this.props.history.push(`/about/blogs/${this.state.blog.id}`)
    };

    cannotLikeAlert () {
        alert("Log in is required to like our blogs! Thank you!")
        this.props.history.push('/login')
    }

    handleCreateBlogsLiked(userId, blog){

        blogService.createBlogsLiked(userId, blog)
            .then(newBlogLiked => {
                this.openModal();
                console.log(newBlogLiked);
                if(newBlogLiked !== undefined) {

                    this.setState({
                        firstName: newBlogLiked.firstName,
                        lastName: newBlogLiked.lastName,
                        title: newBlogLiked.title,
                        content: newBlogLiked.content,
                        timeStamp: newBlogLiked.timeStamp,
                        valid: true,
                    })
                }
            })
    }


    render() {
        console.log(this.state.isLoggedIn)
        return(
            <div className="container">

                <Card >

                    <Card.Body>
                        <Card.Title>
                            <h1>
                                {this.state.blog.title}
                                <button
                                    onClick={() => this.state.isLoggedIn
                                        ? this.handleCreateBlogsLiked(this.state.profile.id, this.state.blog)
                                        : this.cannotLikeAlert()}
                                    className="btn btn-danger pull-right">
                                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                                </button>
                                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                                    <Modal.Header>
                                        <Modal.Title>Hi there!</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>It has been collected to your loved list!</Modal.Body>
                                    <Modal.Body>You can check it in "View My Liked Blogs" under profile!</Modal.Body>
                                    <Modal.Footer>
                                        <button onClick={this.closeModal}>Close</button>
                                    </Modal.Footer>
                                </Modal>
                            </h1>

                        </Card.Title>
                        <br/>
                        <Card.Text>
                            {this.state.blog.content.split('\n').map(function(item) {
                                return (
                                <span>
                                {item}
                                <br/>
                                </span>
                                )
                            })}
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
