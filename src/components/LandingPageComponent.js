import React from "react";
import {Jumbotron,Button,Nav,Container,Row,Col,CardColumns,Card} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {ContactFormComponent} from "./User/ContactFormComponent";

export class LandingPageComponent extends React.Component{
    render() {
        return (
            <div className="container">
                <Jumbotron>
                    <h1>Your Partner Is Here</h1>
                    <p>
                        Serving Triad areas.
                    </p>
                    <p>
                        <Nav.Link componentClass={Link} href="/contact">
                        <Button variant="success">
                            CONTACT US
                        </Button>
                        </Nav.Link>
                    </p>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            <p>
                            Welcome to K&J Total Care! We are honored that you decided to visit our page to
                            learn about whom we are and who we serve!
                            Client Centered Approach
                            Clients are the center of our hearts. We start where they are and end when their needs have been met.
                            We serve diverse populations including children, adolescents, middle aged adults and seniors citizens.
                            Our clients have a wide variety of needs depending on each individual, couple and family to include
                            pets who know are so important. Our clients have medical, psychiatric diagnosis, dual diagnosis,
                            special needs and there are times when we have to help people determine what their needs are.
                            </p>
                        </Col>
                        <Col><img src="/shutterstock_1343180831.jpg" alt="Card image cap" height="500" width="720"/></Col>
                    </Row>
                </Container>
                <br/>
                <Container>
                    <Row>
                        <Col>
                            <Card bg="warning" text="white" className="text-center p-3">
                                <h1>Your Story is Our Story</h1>
                                <Link to="/reviews">
                                    <button className="btn form-control-lg btn-success">
                                        Read More
                                    </button>
                                </Link>
                            </Card>
                        <br/>

                            <img src="/shutterstock_704565676.jpg" alt="Card image cap" height="500" width="720"/>
                        </Col>
                        <Col>

                            <p>
                            "Kim was a dependable, kind and caring companion and Carer for my 84 year old father when
                            he was ill. She looked after him with good humour, kindness and competence. She has a
                            wonderful energy and positive nature that my dad really appreciated. She played a huge role
                            in making sure he stayed healthy and active and they developed a close bond and friendship
                            that meant so much to him. She was so appreciated by my family and was always there to
                            help when we needed her, even travelling with my father so he could visit his family in the North.
                            I would highly recommend Kim to anyone who wants a capable and kind carer."
                            </p>
                        </Col>
                    </Row>
                </Container>
                <br/>
                <ContactFormComponent/>
            </div>
        );
    }
}
