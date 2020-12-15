import React from "react";
import {Form , Row , Col, Button, Modal} from 'react-bootstrap';
import reviewReplyService from "../../../../services/ReviewReplyService";

export default class UpdateReviewReplyComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            reply: this.props.reply,
            editing: false,
            isOpen: false,

        }
    }

    componentDidMount() {
        console.log(this.props)
        this.setState({reply: this.props.reply})
        console.log("this.state.reply: ", this.state.reply)

    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => {
        this.setState({ isOpen: false })
        this.props.history.push('/admin/update-review')
    };


    handleUpdateReviewReply(reply){
        console.log("reply: ", reply)
        reviewReplyService.updateReply(reply.reviewId, reply)
            .then(reply => {
                this.openModal();
                console.log("newReply", reply)
                if(reply !== undefined){
                    //not really need this part
                    this.setState({
                        reply
                    })
                }
            })
    }


    render() {
        return(
            <div>
                <h1>Update a review: </h1>
                <br/>
                <Form.Group as={Row} controlId="formHorizontalReplyContent">
                    <Form.Label  column sm={2}>Reply Content</Form.Label>
                    <Col sm={10}>
                        <Form.Control as="textarea" rows={5}
                                      name="reply"
                                      value={this.state.reply.content}
                                      onChange={(event) => {
                                          const newContent = event.target.value
                                          this.setState(prevState => ({
                                              reply: {...prevState.reply, content: newContent}
                                          }))
                                      }}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="button"
                                className="orangeBg btn-success"
                                onClick={() => this.handleUpdateReviewReply(this.state.reply)}>
                            Save
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
            </div>
        )
    }


}
