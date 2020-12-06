import React from 'react';
import {Form,Col,Row,Button, Modal} from 'react-bootstrap';
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
            isOpen: false
        }
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => {
        this.setState({ isOpen: false })
        this.props.history.push('/update-blog-for-staff')
    };

    //for input variables
    handleChange(event) {
        //console.log("new value", event.target.value);

        const isCheckbox = event.target.type === "checkbox";

        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    }

    handleCreateBlog(blog){
        console.log(blog);

        blogService.createBlog(blog)
            .then(newBlog => {
                this.openModal();

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
            })
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
                            <Modal show={this.state.isOpen} onHide={this.closeModal}>
                                <Modal.Header>
                                    <Modal.Title>Hi there!</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Success! Thanks!</Modal.Body>
                                <Modal.Footer>
                                    <button onClick={this.closeModal}>Close</button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
