import React from "react";
import {Modal,Card} from 'react-bootstrap';
import blogService from "../../services/BlogService";
import userService from "../../services/UserService";
import BlogReplyService from "../../services/BlogReplyService";


export class BlogViewComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            blog: {content: "",
                timeStamp: "",
            },
            editing: false,
            agreed: false,
            isOpen: false,
            isCreating: false,
            profile: {},
            replies:[],
            isLoggedIn: false,
            reply: '',
        }
    }

    componentDidMount() {
        // console.log(this.props.match.params.blogId)

        blogService.findBlogById(this.props.match.params.blogId)
            .then(blog =>{this.setState( {blog})})

        userService.profile()
            .then(profile =>  {
                console.log(profile)
                if(profile !== undefined) {
                    this.setState({
                        profile: profile,
                        isLoggedIn: true
                    })
                }
            })

        BlogReplyService.findAllReliesForBlog(this.props.match.params.blogId)
            .then(replies =>  {
                console.log(replies)
                if(typeof replies !== "undefined") {
                    this.setState({
                        replies: replies
                    })
                }
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.blogId !== this.props.match.params.blogId)
        {
            blogService.findBlogById(this.props.match.params.blogId)
                .then(blogs =>{
                    this.setState( {
                        blogs: blogs
                    })
                })

            BlogReplyService.findAllReliesForBlog(this.props.match.params.blogId)
                .then(replies =>{
                    if(replies !== undefined) {
                        this.setState({
                            replies: replies
                        })
                    }
                })
        }
    }


    openModal = () => this.setState({ isOpen: true });
    closeModal = () => {
        this.setState({ isOpen: false })
        this.props.history.push(`/about/blogs/${this.state.blog.id}`)
    };

    createModal = () => this.setState({ isCreating: true });
    closeCreateModal = () => {
        this.setState({ isCreating: false })
        this.props.history.push(`/about/blogs/${this.state.blog.id}`)
    };

    cannotLikeAlert () {
        alert("Log in is required! Thank you!")
        this.props.history.push('/login')
    }

    handleCreateBlogsLiked(userId, blog){
        blogService.createBlogsLiked(userId, blog)
            .then(newBlogLiked => {

                this.openModal();
                if(newBlogLiked !== undefined) {
                    this.props.history.push(`/about/blogs/${this.state.blog.id}`)
                }
            })
    }

    handleCreateReply(blogId, reply, blog){
        BlogReplyService.createReply(blogId, reply, blog)
            .then(newReply =>{
                console.log(newReply)
                debugger
                this.createModal();
                if(newReply !== undefined) {
                    this.props.history.push(`/about/blogs/${this.state.blog.id}`)
                }
            })
    }

    handleChange(event) {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
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
                            {this.state.blog.content.split('\n').map(item => <span>{item}</span>)}
                        </Card.Text>
                        <footer className="blockquote-footer">
                            <cite title="Source Title">{this.state.blog.firstName}&nbsp;{this.state.blog.lastName}</cite>
                        </footer>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        {this.state.blog.timeStamp.toString()}
                    </Card.Footer>
                </Card>

                {
                    this.state.replies&&
                    this.state.replies.length>0&&
                    this.state.replies.map(reply=>
                        <div>
                            <Card>
                                <Card.Body>
                                    <Card.Text className="text-left">
                                        <span>{reply.content}</span>
                                    </Card.Text>
                                    <footer className="blockquote-footer">
                                        {reply.firstName}&nbsp;{reply.lastName}
                                    </footer>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    {reply.timeStamp}
                                </Card.Footer>
                            </Card>
                            <br/>
                        </div>
                    )}
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Welcome to reply this blog!</label>
                        <textarea
                            onChange={(e) => this.setState({reply: e.target.value})}
                            placeholder="I love your blog."
                            className="form-control"
                            id="FormControlTextarea"
                            rows="3">
                        </textarea>
                    </div>
                    <button
                        onClick={() => this.state.isLoggedIn
                            ? this.handleCreateReply(this.state.blog.id, this.state.reply, this.state.blog)
                            : this.cannotLikeAlert()}
                        className="btn orangeBg pull-right">
                        Reply
                    </button>
                    <Modal show={this.state.isCreating} onHide={this.closeCreateModal}>
                        <Modal.Header>
                            <Modal.Title>Hi there!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>It has been posted!</Modal.Body>
                        <Modal.Body>You can check it in "View My Replied Blogs" under profile!</Modal.Body>
                        <Modal.Footer>
                            <button onClick={this.closeCreateModal}>Close</button>
                        </Modal.Footer>
                    </Modal>
                    <br/>
                </form>
            </div>
        )
    }
}
