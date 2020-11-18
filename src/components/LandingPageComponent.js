import React from "react";
import {Jumbotron,Button,Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";

export class LandingPageComponent extends React.Component{
    render() {
        return (
            <div className="container">
                <Jumbotron>
                    <h1>Your Partner Is Here</h1>
                    <p>
                        Serving K&J and surrounding areas.
                    </p>
                    <p>
                        <Nav.Link componentClass={Link} href="/ContactForm">
                        <Button variant="success">
                            Learn More
                        </Button>
                        </Nav.Link>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}
