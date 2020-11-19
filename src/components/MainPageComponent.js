import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import {HeaderComponent} from "./HeaderComponent";
import {ContactFormComponent} from "./ContactFormComponent";
import {AboutKJComponent} from "./AboutKJ/AboutKJComponent";
import {BrowserRouter, Route, Link} from "react-router-dom";
import {ReviewsComponent} from "./AboutKJ/ReviewsComponent";
import {BlogsComponent} from "./AboutKJ/BlogsComponent";
import {ClientStoryComponent} from "./AboutKJ/ClientStoryComponent";
import {BathingDressingComponent} from "./CaregiverResource/BathingDressingComponent";
import {CompanionshipComponent} from "./CaregiverResource/CompanionshipComponent";
import {GroceryShoppingComponent} from "./CaregiverResource/GroceryShoppingComponent";
import {LightHousekeepingComponent} from "./CaregiverResource/LightHousekeepingComponent";
import {LightMealPreparationComponent} from "./CaregiverResource/LightMealPreparationComponent";
import {LiveInsComponent} from "./CaregiverResource/LiveInsComponent";
import {MedicationMonitoringComponent} from "./CaregiverResource/MedicationMonitoringComponent";
import {RespiteComponent} from "./CaregiverResource/RespiteComponent";
import {SafetyObservationComponent} from "./CaregiverResource/SafetyObservationComponent";
import {TransportationComponent} from "./CaregiverResource/TransportationComponent";
import {ApplyJobComponent} from "./CareService/ApplyJobComponent";
import {CertifiedNursingComponent} from "./CareService/CertifiedNursingComponent";
import {CompanionSitterComponent} from "./CareService/CompanionSitterComponent";
import {PersonalCareComponent} from "./CareService/PersonalCareComponent";
import {LoginComponent} from "./Login/LoginComponent";
import {RegisterComponent} from "./Login/RegisterComponent";
import ResultComponent from "./SearchContent/ResultComponent"
import {LandingPageComponent} from "./LandingPageComponent";
import SearchContentComponent from "./SearchContent/SearchContentComponent";
import {FooterComponent} from "./FooterComponent";
import {PetCareComponent} from "./CaregiverResource/PetCareComponent";


export class MainPageComponent extends React.Component{
    render(){
        return(
            <div>
                <HeaderComponent/>
                <FooterComponent/>
                <BrowserRouter>
                    <div>
                        <Route path="/"
                               exact component={LandingPageComponent}/>
                        <Route path="/AboutKJ"
                               exact component={AboutKJComponent}/>
                        <Route path="/Reviews"
                               exact component={ReviewsComponent}/>
                        <Route path="/Blogs"
                               exact component={BlogsComponent}/>
                        <Route path="/ClientStory"
                               exact component={ClientStoryComponent}/>
                        <Route path="/BathingDressing"
                               exact component={BathingDressingComponent}/>
                        <Route path="/Companionship"
                               exact component={CompanionshipComponent}/>
                        <Route path="/GroceryShopping"
                               exact component={GroceryShoppingComponent}/>
                        <Route path="/LightHousekeeping"
                               exact component={LightHousekeepingComponent}/>
                        <Route path="/LightMealPreparation"
                               exact component={LightMealPreparationComponent}/>
                        <Route path="/LiveIns"
                               exact component={LiveInsComponent}/>
                        <Route path="/MedicationMonitoring"
                               exact component={MedicationMonitoringComponent}/>
                        <Route path="/Respite"
                               exact component={RespiteComponent}/>
                        <Route path="/PetCare"
                               exact component={PetCareComponent}/>
                        <Route path="/SafetyObservation"
                               exact component={SafetyObservationComponent}/>
                        <Route path="/Transportation"
                               exact component={TransportationComponent}/>
                        <Route path="/ApplyJob"
                               exact component={ApplyJobComponent}/>
                        <Route path="/CertifiedNursing"
                               exact component={CertifiedNursingComponent}/>
                        <Route path="/CompanionSitter"
                               exact component={CompanionSitterComponent}/>
                        <Route path="/PersonalCare"
                               exact component={PersonalCareComponent}/>
                        <Route path="/Login"
                               exact component={LoginComponent}/>
                        <Route path="/Register"
                               exact component={RegisterComponent}/>
                        <Route path="/ContactForm"
                               exact component={ContactFormComponent}/>
                        <Route path="/Search"
                               exact component={SearchContentComponent}/>
                    </div>
                </BrowserRouter>

            </div>


        )

    }
}

