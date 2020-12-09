import React from 'react';
import {CardColumns,Card} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Form, Col, Row} from 'react-bootstrap';

export class ReviewsComponent extends React.Component{
    render() {
        return(
            <div className="container">
                <CardColumns>
                    <Card>
                        <Card.Img variant="top" src="/shutterstock_245421769.jpg" />
                        <Card.Body>
                            <Card.Title>"We are deeply grateful to Kim"</Card.Title>
                            <Card.Text>
                                "Kim was a dependable, kind and caring companion and Carer for my 84 year old father when
                                he was ill. She looked after him with good humour, kindness and competence. She has a
                                wonderful energy and positive nature that my dad really appreciated. She played a huge role
                                in making sure he stayed healthy and active and they developed a close bond and friendship
                                that meant so much to him. She was so appreciated by my family and was always there to
                                help when we needed her, even travelling with my father so he could visit his family in the North.
                                I would highly recommend Kim to anyone who wants a capable and kind carer."
                            </Card.Text>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                    Rebecca H.
                                </small>
                            </footer>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated on Apr 29 2019</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img src="/shutterstock_128133443.jpg" />
                    </Card>
                    <Card bg="warning" text="white" className="text-center p-3">
                        <blockquote className="blockquote mb-0 card-body">
                            <h1>Our Reviews</h1>
                            <br/>
                            <Form.Group as={Row}>
                                <Col sm={6}>
                                <Link  to={`/about/reviews/leave-review`} className="btn form-control btn-success">
                                    LEAVE ONE
                                </Link>
                                </Col>
                                <Col sm={6}>
                                    <Link to={`/about/reviews/more-reviews`} className="btn form-control btn-danger">
                                        READ MORE
                                    </Link>
                                </Col>
                            </Form.Group>
                        </blockquote>
                    </Card>
                    <Card>
                        <Card.Img src="/shutterstock_487258954.jpg" />
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>"Her kindness, caring and friendship made his days so much happier."</Card.Title>
                            <Card.Text>
                                "When my father was sick after a few major surgeries, we had a number of different
                                caregivers. Kim became Dad's primary caregiver and formed a very special and loving
                                relationship with him. Her kindness, caring and friendship made his days so much happier.
                                Kim has a nursing background and was able to articulate and understand medical information
                                in a way that many people cannot. When Dad was hospitalized, she would go into the hospital
                                to spend time with him and make sure the nurses were doing their jobs. She truly wanted Dad
                                to get better, and therefore "made" him get up for his walks and, of course, made sure he ate
                                right and took his medicine. She had a knack of knowing when to let him rest and when to
                                coax him to do a little more. For older people who are homebound, a caring listener, like Kim,
                                truly is the person they need in their lives. Also, she is meticulously clean and takes
                                professional pride in her work. I highly recommend her."
                            </Card.Text>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                    Kathryn S.
                                </small>
                            </footer>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated on Apr 29 2019</small>
                        </Card.Footer>
                    </Card>
                </CardColumns>

            </div>
        )
    }
}
