import React, { useState }from 'react';
import {Form,Col,Row,Button} from 'react-bootstrap';
import blogService from "../../../../services/BlogService";

export class CreateBlogsByStaffsComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            title: '',
            content: '',
            timeStamp: '',
            valid: false,
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    checkValidity(){
        if(
            this.state.timeStamp !== null
            && this.state.firstName !== null
            && this.state.lastName !== null
            && this.state.title !== null
            && this.state.content !== null){
            this.setState({valid: true});
        }
    }

    handleCreateBlog(blog){
        console.log(blog);
        //this.checkValidity();
        // if (this.state.valid){
        //console.log("it is valid");
        blogService.createBlog(blog)
            .then(newBlog => {
                console.log("newBlog", newBlog)

                //not really need this part
                this.setState({
                    firstName: newBlog.firstName,
                    lastName: newBlog.lastName,
                    title: newBlog.title,
                    content: newBlog.content,
                    timeStamp: newBlog.timeStamp,
                    valid: true,
                })

                alert("Success! Thanks!")

                this.props.history.push('/update-blog-for-staff')
            })
        // }
    }

    render() {
        console.log(this.state)
        return(
            <div className="container">
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalTitle">
                        <Form.Label column sm={2}>
                            Title
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="title"
                                          placeholder="Please Enter Your Title"
                                          value={this.state.title}
                                          onChange={(e) => this.handleChange(e)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalContent">
                        <Form.Label  column sm={2}>Content</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" rows={5}
                                          name="content"
                                          placeholder="I Love K&J"
                                          value={this.state.content}
                                          onChange={(e) => this.handleChange(e)}/>
                        </Col>

                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="button"
                                    onClick={() => this.handleCreateBlog(this.state)}>Create</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
