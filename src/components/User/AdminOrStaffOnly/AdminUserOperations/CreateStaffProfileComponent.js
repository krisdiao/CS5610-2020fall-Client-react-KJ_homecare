import React, { useState }from 'react';
import {Form,Col,Row,Button, Modal} from 'react-bootstrap';
import userService from "../../../../services/UserService";

var leadToCorrectLoginUserPage = require('../../../../common/util').leadToCorrectLoginUserPage;

export class CreateStaffProfileComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.location.userViewProps.user,
            editing: false,
            valid: false,
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

    handleUpdateUser(user){
        console.log(user);

        userService.updateUser(user.id, user)
            .then(newUser => {
                this.openModal();

                console.log("newUser", newUser)

                //not really need this part
                this.setState({
                    user: newUser,
                    editing: false,
                })
            })
    }

    //TODO: photo data is not right yet!
    //for resume field
    handleUpload(e){
        this.setState({
            selectedFile: e.target.files[0]
        });

        const data = new FormData()
        data.append('file', this.state.selectedFile)

        this.setState({
            resume: data
        });
    }


    render() {
        console.log(this.state.user)
        return(
            <div className="container">
                <Form>
                    <button className="greenBg form-control-lg btn btn-success"
                            onClick={() => leadToCorrectLoginUserPage(this.state.profile, this.props.history)}>
                        <i className="fa fa-arrow-left " aria-hidden="true"></i>
                    </button>

                    <Form.Group as={Row} controlId="formHorizontalTitle">
                        <Form.Label column sm={2}>
                            Title
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                value={this.state.user.title}
                                onChange={(event) => {
                                    const newTitle = event.target.value
                                    this.setState(prevState => ({
                                        user: {...prevState.user, title: newTitle}
                                    }))
                                }}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalTitle">
                        <Form.Label column sm={2}>
                            Years Of Experience
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="Number"
                                value={this.state.user.yearsOfExperience}
                                onChange={(event) => {
                                    const newYearsOfExperience = event.target.value
                                    this.setState(prevState => ({
                                        user: {...prevState.user, yearsOfExperience: newYearsOfExperience}
                                    }))
                                }}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalContent">
                        <Form.Label  column sm={2}>Short Description</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" rows={5}
                                          name="shortDescription"
                                          placeholder="short Description"
                                          value={this.state.user.shortDescription}
                                          onChange={(event) => {
                                              const newShortDescription= event.target.value
                                              this.setState(prevState => ({
                                                  user: {...prevState.user, shortDescription: newShortDescription}
                                              }))
                                          }}
                            />
                        </Col>

                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalContent">
                        <Form.Label  column sm={2}>Certification</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" rows={5}
                                          name="certification"
                                          placeholder="short Description"
                                          value={this.state.user.certification}
                                          onChange={(event) => {
                                              const newCertification= event.target.value
                                              this.setState(prevState => ({
                                                  user: {...prevState.user, certification: newCertification}
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
                                          placeholder="Content here"
                                          value={this.state.user.content}
                                          onChange={(event) => {
                                              const newContent= event.target.value
                                              this.setState(prevState => ({
                                                  user: {...prevState.user, content: newContent}
                                              }))
                                          }}
                            />
                        </Col>

                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPicture">
                        <Form.Label  column sm={2}>Profile Picture</Form.Label>
                        <Col sm={10}>
                            <div id="upload-box">
                                <input type="file" onChange={(e) => this.handleUpload(e)}/>
                            </div>
                        </Col>

                    </Form.Group>

                    {/*<Form.Group as={Row} controlId="formHorizontalPicture">*/}
                    {/*    <Form.Label  column sm={2}>Profile Picture</Form.Label>*/}
                    {/*    <Col sm={10}>*/}
                    {/*        <Form.Control as="picture" rows={5}*/}
                    {/*                      name="profilePicture"*/}
                    {/*                      value={this.state.user.profilePicture}*/}
                    {/*                      onChange={(event) => {*/}
                    {/*                          const newProfilePicture= event.target.value*/}
                    {/*                          this.setState(prevState => ({*/}
                    {/*                              user: {...prevState.user, profilePicture: newProfilePicture}*/}
                    {/*                          }))*/}
                    {/*                      }}*/}
                    {/*        />*/}
                    {/*    </Col>*/}

                    {/*</Form.Group>*/}

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="button"
                                    className="orangeBg btn-success"
                                    onClick={() => this.handleUpdateUser(this.state.user)}
                            >Create
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
