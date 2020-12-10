import React from "react";
import {Form,Col,Row,Button, Modal} from 'react-bootstrap';
import blogService from "../../../../services/BlogService";
import userService from "../../../../services/UserService";

var leadToCorrectLoginUserPage = require('../../../../common/util').leadToCorrectLoginUserPage;


export class BlogsEditingComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            blog: this.props.location.blogViewProps.blog,
            editing: false,
            profile: '',
            isOpen: false
        }
    }

    componentDidMount() {
        userService.profile()
            .then(profile => this.setState({
                profile: profile
            }))
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => {
        this.setState({ isOpen: false })
        leadToCorrectLoginUserPage(this.state.profile, this.props.history)
    };

    handleSaveBlog(blog){
        console.log(blog.blog.id);

        blogService.updateBlog(blog.blog.id, blog.blog)
            .then(newBlog => {
                this.openModal();

                console.log("newBlog", newBlog)

                //not really need this part
                this.setState({
                   blog: newBlog,
                    editing: false,
                })
            })
    }


    render() {
        console.log(this.state.blog)
        return(
            <div className="container">
                <Form>

                    <button className="greenBg form-control-lg btn btn-success"
                            onClick={() => leadToCorrectLoginUserPage(this.state.profile, this.props.history)}>
                        <i className="fa fa-arrow-left " aria-hidden="true"></i>
                    </button>

                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            First Name
                        </Form.Label>
                        <Col sm={4}>
                            <h4>{this.state.blog.firstName}</h4>
                        </Col>
                        <Form.Label column sm={2}>
                            Last Name
                        </Form.Label>
                        <Col sm={4}>
                            <h4>{this.state.blog.lastName}</h4>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalTitle">
                        <Form.Label column sm={2}>
                            Title
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                          types="text"
                                          value={this.state.blog.title}
                                          onChange={(event) => {
                                              const newTitle = event.target.value
                                              this.setState(prevState => ({
                                                  blog: {...prevState.blog, title: newTitle}
                                              }))
                                          }}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalContent">
                        <Form.Label  column sm={2}>Content</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" rows={5}
                                          name="content"
                                          value={this.state.blog.content}
                                          onChange={(event) => {
                                              const newContent = event.target.value
                                              this.setState(prevState => ({
                                                  blog: {...prevState.blog, content: newContent}
                                              }))
                                          }}
                            />
                        </Col>

                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="button"
                                    className="orangeBg btn-success"
                                    onClick={() => this.handleSaveBlog(this.state)}
                            >Save
                            </Button>
                            <Modal show={this.state.isOpen} onHide={this.closeModal}>
                                <Modal.Header>
                                    <Modal.Title>Hi there!</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Success! Thanks!</Modal.Body>
                                <Modal.Footer>
                                    <button className="orangeBg btn-success" onClick={this.closeModal}>Close</button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
