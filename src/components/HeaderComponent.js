import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import "font-awesome/css/font-awesome.css";
import {route,Link} from "react-router-dom";
import SearchContentComponent from "./SearchContent/SearchContentComponent"
import {AboutKJComponent} from './AboutKJ/AboutKJComponent';
import { LinkContainer } from "react-router-bootstrap";

export class HeaderComponent extends React.Component{


    render(){
        return(
            <div>
                <Navbar bg="light" variant="light">

                    <Navbar.Brand href="/">
                        <img cclassName="logo-main" src="/kj.png" alt="image" />
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavDropdown title="About" id="basic-nav-dropdown">
                            <NavDropdown.Item componentClass={Link} href="/AboutKJ">
                                About K&J
                            </NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/Reviews">Reviews</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/Blogs">Blogs</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/ClientStory">Client stories</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Care Service" id="basic-nav-dropdown">
                            <NavDropdown.Item componentClass={Link} href="/BathingDressing">Bathing and dressing</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/LightHousekeeping">Light housekeeping (laundry, vacuuming, etc.)</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/MedicationMonitoring">Medication monitoring</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/GroceryShopping">Grocery shopping</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/LightMealPreparation">Light meal preparation & planning</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/Transportation">Transportation to doctor’s offices and errands</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/Companionship">Companionship visits</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/SafetyObservation">Safety/Behavioral Observations</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/Respite">Respite</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/LiveIns">Live-Ins</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Caregiver Resource" id="basic-nav-dropdown">
                            <NavDropdown.Item componentClass={Link} href="/ApplyJob">Apply for a job</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/CompanionSitter">Companion/Sitter</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/CertifiedNursing">Certified Nursing Assistant I & II</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/PersonalCare">Personal Care Assistant</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link componentClass={Link} href="/Login">Login/Signup</Nav.Link>
                        <Nav.Link componentClass={Link} href="/ContactForm">Contact Us</Nav.Link>
                    </Nav>
                    <SearchContentComponent />
                </Navbar>
            </div>
        )

    }
}

