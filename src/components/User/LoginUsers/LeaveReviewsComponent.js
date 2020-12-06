import React from 'react';
import {Form,Col,Row,Button, Modal} from 'react-bootstrap';
import reviewService from "../../../services/ReviewService";
import StarRatingComponent from "./StarRatingComponent";
import userService from "../../../services/UserService";
import modalsPoppingComponent from "../../../common/modals"

export class LeaveReviewsComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            timeStamp: '',
            stars: 0,
            editing: true,
            agreed: false,
            isOpen: false,
            profile: {}
        }
    }

    componentDidMount() {
        userService.profile()
            .then(profile =>  {

                if(profile !== undefined) {
                    this.setState({
                        profile: profile
                    })
                }else{
                    // return <modalsPoppingComponent
                    //     message="Log in is required to leave reviews! Thank you!"
                    //     isOpen={true}
                    //     modalCallback={this.handleModalCallback}
                    // />
                    alert("Log in is required to leave reviews! Thank you!")
                    this.props.history.push('/login')
                }
        })
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => {
        this.setState({ isOpen: false })
        this.props.history.push('/login')
    };

    // //receiving data from child
    // handleModalCallback = () =>{
    //    this.closeModal();
    // }

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

    handleLeaveReviews(reviews){
        console.log(reviews);

        reviewService.createReview(reviews)
            .then(newReview => {
                this.openModal();
                console.log("newReview", newReview)
                if(newReview !== undefined){
                    //not really need this part
                    this.setState({
                        title: newReview.title,
                        content: newReview.content,
                        timeStamp: newReview.timeStamp,
                        stars: newReview.stars,
                        agreed: true,
                        valid: newReview.valid,
                    })
                }
            })
    }

    //receiving data from child
    handleCallback = (ratingValue) =>{
        this.setState({stars: ratingValue})
    }

    render() {
        console.log(this.state)
        const { title, content, stars, agreed} = this.state;

        const inEnabled = agreed
            && title.length > 0
            && stars >= 0
            && content.length > 0


        console.log("inEnabled: ", inEnabled)

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
                                          value={title}
                                          onChange={(e) => this.handleChange(e)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalTitle">
                        <Form.Label column sm={2}>
                            Rating
                        </Form.Label>
                        <Col sm={10}>
                            <StarRatingComponent
                                name="stars"
                                value={stars}
                                stars={stars}
                                editing={this.state.editing}
                                reivewCallback={this.handleCallback}
                                // onChange={(e) => this.handleChange(e)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalContent">
                        <Form.Label  column sm={2}>Content</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" rows={5}
                                          name="content"
                                          placeholder="I Love K&J"
                                          value={content}
                                          onChange={(e) => this.handleChange(e)}/>
                        </Col>

                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalCheck">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check label="Agree to our all terms and conditions"
                                        value={agreed}
                                        name="agreed"
                                        onChange={(e) => this.handleChange(e)}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="button"
                                    disabled={!inEnabled}
                                    onClick={() => this.handleLeaveReviews(this.state)}>
                                Share
                            </Button>
                            <Modal show={this.state.isOpen} onHide={this.closeModal}>
                                <Modal.Header>
                                    <Modal.Title>Hi there!</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Thank you, we will contact you shortly!</Modal.Body>
                                <Modal.Body>May God Bless you!</Modal.Body>
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
