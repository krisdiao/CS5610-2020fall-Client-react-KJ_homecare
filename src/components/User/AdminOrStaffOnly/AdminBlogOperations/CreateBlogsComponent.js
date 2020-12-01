import React, { useState }from 'react';
import {Form,Col,Row,Button} from 'react-bootstrap';
import {createBlog} from "../../../../services/BlogService";

export class CreateBlogsComponent extends React.Component{

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         blog:''
    //     }
    // }
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
            this.state.timeStamp === null
            && this.state.firstName !== null
            && this.state.lastName !== null
            && this.state.title !== null
            && this.state.content !== null){
            this.setState({valid: true});
        }
    }

    handleCreateBlog(blog){
        console.log(blog);
        this.checkValidity();
        // if (this.state.valid){
        //console.log("it is valid");
        createBlog(blog)
            .then(newBlog => {
                console.log("newBlog", newBlog)

                //not really need this part
                this.setState({
                    firstName: newBlog.firstName,
                    lastName: newBlog.lastName,
                    title: newBlog.title,
                    content: newBlog.content,
                    timeStamp: newBlog.timeStamp,
                    valid: newBlog.valid,
                })

                alert("Success! Thanks!")

                this.props.history.push('/')
            })
        // }
    }

    render() {
        return(
            <div className="container">
                <Form>
                    {/*<Form.Group as={Row} controlId="formHorizontalName">*/}
                    {/*    <Form.Label column sm={2}>*/}
                    {/*        First Name*/}
                    {/*    </Form.Label>*/}
                    {/*    <Col sm={4}>*/}
                    {/*        <h4>{this.state.blog.firstName}</h4>*/}
                    {/*        /!*<Form.Control name ="firstName"*!/*/}
                    {/*        /!*              placeholder="Please Enter Your First Name"*!/*/}
                    {/*        /!*              value={this.state.firstName}*!/*/}
                    {/*        /!*              onChange={(e) => this.handleChange(e)}*!/*/}
                            {/*/>*/}
                    {/*    </Col>*/}
                    {/*    <Form.Label column sm={2}>*/}
                    {/*        Last Name*/}
                    {/*    </Form.Label>*/}
                    {/*    <Col sm={4}>*/}
                    {/*        <h4>{this.state.blog.lastName}</h4>*/}
                    {/*        /!*<Form.Control name="lastName"*!/*/}
                    {/*        /!*              placeholder="Please Enter Your Last Name"*!/*/}
                    {/*        /!*              value={this.state.lastName}*!/*/}
                    {/*        /!*              onChange={(e) => this.handleChange(e)}/>*!/*/}
                    {/*    </Col>*/}
                    {/*</Form.Group>*/}

                    {/*<Form.Group as={Row} controlId="formHorizontalEmail">*/}
                    {/*    <Form.Label column sm={2}>*/}
                    {/*        Email*/}
                    {/*    </Form.Label>*/}
                    {/*    <Col sm={10}>*/}
                    {/*        <Form.Control type="email" placeholder="Please Enter Your Email" />*/}
                    {/*    </Col>*/}
                    {/*</Form.Group>*/}
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

                    {/*<Form.Group as={Row} controlId="formHorizontalCheck">*/}
                    {/*    <Col sm={{ span: 10, offset: 2 }}>*/}
                    {/*        <Form.Check label="Agree to our all terms and conditions"*/}
                    {/*                    value={this.state.agreed}*/}
                    {/*                    onChange={(e) => this.setState({agreed: true})}/>*/}
                    {/*    </Col>*/}
                    {/*</Form.Group>*/}

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
