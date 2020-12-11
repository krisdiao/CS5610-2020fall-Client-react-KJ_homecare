import React from "react";
import {Form,Col,Row,Card} from 'react-bootstrap';


export class BlogViewComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            blog: this.props.location.blogViewProps.blog,
            editing: false
        }
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
                            Last Modified
                        </Form.Label>
                        <Col sm={10}>
                            <h4>{this.state.blog.timeStamp.toString()}</h4>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalTitle">
                        <Form.Label column sm={2}>
                            Title
                        </Form.Label>
                        <Col sm={10}>
                            <h4>{this.state.blog.title}</h4>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalContent">
                        <Form.Label  column sm={2}>Content</Form.Label>
                        <Col sm={10}>
                            <h4>{this.state.blog.content}</h4>
                        </Col>

                    </Form.Group>

                </Form>

            </div>
        )
    }
}
