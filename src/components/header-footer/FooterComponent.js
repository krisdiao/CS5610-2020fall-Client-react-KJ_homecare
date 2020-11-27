import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";


export const FooterComponent = () => {
    return (
        <div className="container-fluid">
            <Navbar bg="light" variant="light" >
                <MDBFooter color="green" className="font-small pt-4 mt-4">
                    <MDBContainer fluid className="text-center text-md-left">
                        <MDBRow >
                            <MDBCol md="6">
                                <Nav.Link componentClass={Link} href="/">
                                    <h4 color="green" className="text-uppercase font-weight-bold">
                                        <strong>K&J Total Care</strong>
                                    </h4>
                                </Nav.Link>
                                <p>
                                    Here you can totally trust us!
                                </p>
                            </MDBCol>
                            <MDBCol md="6" className="text-center text-md-left align-top">
                                <h4 color="green" className="text-uppercase font-weight-bold text-warning">
                                    <Nav.Link componentClass={Link} href="/contact">
                                        <strong>Contact US</strong>
                                    </Nav.Link>
                                </h4>
                                <hr className="green accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "120px" }} />
                                <p>
                                    <i className="fa fa-home mr-3" /> Rural Hall, NC, 27045, US
                                </p>
                                <p>
                                    <i className="fa fa-envelope mr-3" /> kjtotalcare@gmail.com
                                </p>
                                <p>
                                    <i className="fa fa-phone mr-3" /> 336-457-1167
                                </p>
                                {/*<p>*/}
                                {/*    <i className="fa fa-print mr-3" /> + 01 234 567 89*/}
                                {/*</p>*/}
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                            &copy; {new Date().getFullYear()} K&J Total Care All Rights Reserved.{" "}
                        </MDBContainer>
                    </div>
                </MDBFooter>
            </Navbar>
        </div>
    );
}

