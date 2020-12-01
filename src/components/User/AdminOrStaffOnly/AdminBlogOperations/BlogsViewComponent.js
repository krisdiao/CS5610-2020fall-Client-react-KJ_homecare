import React from "react";
import {Link} from "react-router-dom";
import {Form,Col,Row,Button} from 'react-bootstrap';
import blogService from "../../../../services/BlogService";



export class BlogsViewComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            blog: this.props.location.blogViewProps.blog,
            editing: false
        }
    }

    handleSaveBlog(blog){
        console.log(blog);
        //this.checkValidity();
        // if (this.state.valid){
        //console.log("it is valid");
        debugger
        blogService.updateBlog(blog)
            .then(newBlog => {
                console.log("newBlog", newBlog)

                //not really need this part
                this.setState({
                   blog: newBlog,
                    editing: false,
                })

                alert("Success! Thanks!")

                this.props.history.push('/')
            })
        // }
    }


    render() {
        console.log(this.state.blog)
        return(
            <div className="container">
                <Form>
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
                            <Form.Control name="title"
                                          value={this.state.blog.title}
                                          onChange={(event) => {
                                              const newTitle = event.target.value
                                              this.setState(prevState => ({
                                                  course: {...prevState.blog, title: newTitle}
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
                                                  course: {...prevState.blog, content: newContent}
                                              }))
                                          }}
                            />
                        </Col>

                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="button"
                                    onClick={() => this.handleSaveBlog(this.state)}>Save</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
