import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav, NavDropdown, Form,Button,FormControl} from 'react-bootstrap';
import "font-awesome/css/font-awesome.css";
import {route,Link} from "react-router-dom";
import SearchContentComponent from "./SearchContent/SearchContentComponent"
import {AboutKJComponent} from './AboutKJ/AboutKJComponent';
import { LinkContainer } from "react-router-bootstrap";

export class HeaderComponent extends React.Component{


    render(){
        return(
            <div>
                <Navbar bg="light" variant="light"  class="sticky-top" >
                    <Navbar.Brand href="/">
                        <img className="logo-main" src="/kj.png" alt="image" />
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavDropdown title="About" id="basic-nav-dropdown">
                            <NavDropdown.Item componentClass={Link} href="/aboutKJ">
                                About K&J
                            </NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/reviews">Reviews</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/blogs"> K&J’s Korner</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/clientStory">Client stories</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Care Service" id="basic-nav-dropdown">
                            <NavDropdown.Item componentClass={Link} href="/bathingDressing">Bathing and dressing</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/lightHousekeeping">Light housekeeping (laundry, vacuuming, etc.)</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/medicationMonitoring">Medication monitoring</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/groceryShopping">Grocery shopping</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/lightMealPreparation">Light meal preparation & planning</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/transportation">Transportation to doctor’s offices and errands</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/companionship">Companionship visits</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/safetyObservation">Safety/Behavioral Observations</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/respite">Respite</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/liveIns">Live-Ins</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/petCare">Pet Care</NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown title="Caregiver Resource" id="basic-nav-dropdown">
                            <NavDropdown.Item componentClass={Link} href="/job">Apply for a job</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/companionSitter">Companion/Sitter</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/certifiedNursing">Certified Nursing Assistant I & II</NavDropdown.Item>
                            <NavDropdown.Item componentClass={Link} href="/personalCare">Personal Care Assistant</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link componentClass={Link} href="/login">Login/Signup</Nav.Link>
                        <Nav.Link componentClass={Link} href="/contact">Contact Us</Nav.Link>
                        <Nav.Link componentClass={Link} href="/search">Search</Nav.Link>
                        <Nav.Link componentClass={Link} href="/profile">Profile</Nav.Link>
                    </Nav>
                </Navbar>

            </div>

        )

    }
}

