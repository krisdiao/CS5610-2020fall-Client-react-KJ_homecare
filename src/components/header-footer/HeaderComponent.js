import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav, NavDropdown, Form,Button,FormControl} from 'react-bootstrap';
import "font-awesome/css/font-awesome.css";
import {route,Link} from "react-router-dom";
import SearchContentComponent from "../SearchContent/SearchContentComponent"
import {AboutKJComponent} from '../AboutKJ/AboutKJComponent';
import { LinkContainer } from "react-router-bootstrap";
import "./HeaderComponent.css"

export class HeaderComponent extends React.Component{


    render(){
        return(
            <div>
                <Navbar bg="light" variant="light"  class="wbdv-sticky-header" >
                    <Navbar.Brand href="/">
                        <img className="logo-main" src="/kj.png" alt="image" />
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavDropdown title="About" id="basic-nav-dropdown">
                            <NavDropdown.Item componentClass={Link} href="/about-KJ">
                                About K&J
                            </NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/reviews">Reviews</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/blogs"> K&J’s Korner</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/client-story">Client stories</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Care Service" id="basic-nav-dropdown">
                            <NavDropdown.Item componentClass={Link} href="/care-service/bathing-dressing">Bathing and dressing</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/care-service/light-housekeeping">Light housekeeping (laundry, vacuuming, etc.)</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/care-service/medication-monitoring">Medication monitoring</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/care-service/grocery-shopping">Grocery shopping</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/care-service/light-meal-preparation">Light meal preparation & planning</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/care-service/transportation">Transportation to doctor’s offices and errands</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/care-service/companionship">Companionship visits</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/care-service/safety-observation">Safety/Behavioral Observations</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/care-service/respite">Respite</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/care-service/live-ins">Live-Ins</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/care-service/pet-care">Pet Care</NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown title="Caregiver Resource" id="basic-nav-dropdown">
                            <NavDropdown.Item componentClass={Link} href="/caregiver-resource/job-application">Apply for a job</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/caregiver-resource/companion-sitter">Companion/Sitter</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/caregiver-resource/certified-nursing">Certified Nursing Assistant I & II</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/caregiver-resource/personal-care">Personal Care Assistant</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link componentClass={Link} href="/login">Login/Signup</Nav.Link>
                        <Nav.Link componentClass={Link} href="/contact">Contact Us</Nav.Link>
                        <Nav.Link componentClass={Link} href="/search">Search</Nav.Link>
                        <Nav.Link componentClass={Link} href="/admin">Admin</Nav.Link>
                        <Nav.Link componentClass={Link} href="/staff">Staff</Nav.Link>
                        <Nav.Link componentClass={Link} href="/user">User</Nav.Link>


                    </Nav>
                </Navbar>

            </div>

        )

    }
}

