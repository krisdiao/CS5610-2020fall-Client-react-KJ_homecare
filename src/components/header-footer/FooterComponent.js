import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./FooterComonent.css"


export const FooterComponent = () => {
    return (
        <div className="wbdv-footer">
            <MDBFooter color="blue" className="font-small pt-4 mt-4 ">
                <MDBContainer fluid className="text-center text-md">
                    <MDBRow >
                        <MDBCol md="4" className="text-center text-md align-top">
                            <a href="/">
                            <img className="logo-main" src="/kj.png" alt="image"/>
                            </a>
                        </MDBCol>
                        <MDBCol md="4"
                                className="text-center text-md align-top"
                        >
                            <a href="/contact">
                            <h4 color="orange" className="orange text-uppercase font-weight-bold">

                                    <strong>Contact US</strong>
                            </h4>
                            </a>

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
                        </MDBCol>
                        <MDBCol md="4" className="text-center text-md align-top">
                            <a href="/">
                                <h4 color="green" className="orange text-uppercase font-weight-bold">
                                    <strong>K&J Total Care</strong>
                                </h4>
                            </a>
                            <p>
                                Here you can totally trust us!
                            </p>
                        </MDBCol>

                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} K&J Total Care All Rights Reserved.{" "}
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>
    );
}

