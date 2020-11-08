import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,Nav,Form,Button,FormControl,NavDropdown} from 'react-bootstrap';
import "font-awesome/css/font-awesome.css";
import {route,Link} from "react-router-dom";
import {AboutKJComponent} from './AboutKJComponent';
import { LinkContainer } from "react-router-bootstrap";

export class HeaderComponent extends React.Component{
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark">

                    <Navbar.Brand href="/">K&J Home Care</Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavDropdown title="About" id="basic-nav-dropdown">
                            <NavDropdown.Item componentClass={Link} href="/AboutKJ">
                                About K&J
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#About/3.2">Reviews</NavDropdown.Item>
                            <NavDropdown.Item href="#About/3.3">Blogs</NavDropdown.Item>
                            <NavDropdown.Item href="#About/3.4">Client stories</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Care Service" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#CareService/3.1">Bathing and dressing</NavDropdown.Item>
                            <NavDropdown.Item href="#CareService/3.2">Light housekeeping (laundry, vacuuming, etc.)</NavDropdown.Item>
                            <NavDropdown.Item href="#CareService/3.3">Medication monitoring</NavDropdown.Item>
                            <NavDropdown.Item href="#CareService/3.4">Grocery shopping</NavDropdown.Item>
                            <NavDropdown.Item href="#CareService/3.5">Light meal preparation & planning</NavDropdown.Item>
                            <NavDropdown.Item href="#CareService/3.6">Transportation to doctor’s offices and errands</NavDropdown.Item>
                            <NavDropdown.Item href="#CareService/3.7">Companionship visits</NavDropdown.Item>
                            <NavDropdown.Item href="#CareService/3.8">Safety/Behavioral Observations</NavDropdown.Item>
                            <NavDropdown.Item href="#CareService/3.9">Respite</NavDropdown.Item>
                            <NavDropdown.Item href="#CareService/3.10">Live-Ins</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Caregiver Resource" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#About/3.1">Apply for a job</NavDropdown.Item>
                            <NavDropdown.Item href="#About/3.2">Companion/Sitter</NavDropdown.Item>
                            <NavDropdown.Item href="#About/3.3">Certified Nursing Assistant I & II</NavDropdown.Item>
                            <NavDropdown.Item href="#About/3.4">Personal Care Assistant</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#Login/Signup">Login/Signup</Nav.Link>
                        <Nav.Link componentClass={Link} href="/ContactForm">Contact Us</Nav.Link>

                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </div>
        )

    }
}

