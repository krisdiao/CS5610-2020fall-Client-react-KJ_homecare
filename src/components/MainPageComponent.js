import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,Nav,Form,Button,FormControl,NavDropdown} from 'react-bootstrap';
import "font-awesome/css/font-awesome.css";
import {HeaderComponent} from "./HeaderComponent";
import {ContactFormComponent} from "./ContactFormComponent";
import {AboutKJComponent} from "./AboutKJComponent";
import {BrowserRouter, Route, Link} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";


export class MainPageComponent extends React.Component{
    render(){
        return(
            <div>
                <HeaderComponent/>
                <BrowserRouter>
                    <div>
                        <Route path="/AboutKJ"
                               exact component={AboutKJComponent}/>
                        <Route path="/ContactForm"
                               exact component={ContactFormComponent}/>
                    </div>
                </BrowserRouter>
            </div>


        )

    }
}

