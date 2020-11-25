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
import {LoginComponent} from "./User/LoginComponent";
import {RegisterComponent} from "./User/RegisterComponent";
import ResultComponent from "./SearchContent/ResultComponent"
import {LandingPageComponent} from "./LandingPageComponent";
import SearchContentComponent from "./SearchContent/SearchContentComponent";
import {FooterComponent} from "./FooterComponent";
import {PetCareComponent} from "./CaregiverResource/PetCareComponent";
import ProfileComponent from "./User/ProfileComponent";


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
                        <Route path="/aboutKJ"
                               exact component={AboutKJComponent}/>
                        <Route path="/reviews"
                               exact component={ReviewsComponent}/>
                        <Route path="/bogs"
                               exact component={BlogsComponent}/>
                        <Route path="/clientStory"
                               exact component={ClientStoryComponent}/>
                        <Route path="/bathingDressing"
                               exact component={BathingDressingComponent}/>
                        <Route path="/companionship"
                               exact component={CompanionshipComponent}/>
                        <Route path="/groceryShopping"
                               exact component={GroceryShoppingComponent}/>
                        <Route path="/lightHousekeeping"
                               exact component={LightHousekeepingComponent}/>
                        <Route path="/lightMealPreparation"
                               exact component={LightMealPreparationComponent}/>
                        <Route path="/liveIns"
                               exact component={LiveInsComponent}/>
                        <Route path="/medicationMonitoring"
                               exact component={MedicationMonitoringComponent}/>
                        <Route path="/respite"
                               exact component={RespiteComponent}/>
                        <Route path="/petCare"
                               exact component={PetCareComponent}/>
                        <Route path="/safetyObservation"
                               exact component={SafetyObservationComponent}/>
                        <Route path="/transportation"
                               exact component={TransportationComponent}/>
                        <Route path="/job"
                               exact component={ApplyJobComponent}/>
                        <Route path="/certifiedNursing"
                               exact component={CertifiedNursingComponent}/>
                        <Route path="/companionSitter"
                               exact component={CompanionSitterComponent}/>
                        <Route path="/personalCare"
                               exact component={PersonalCareComponent}/>
                        <Route path="/login"
                               exact component={LoginComponent}/>
                        <Route path="/profile"
                               exact component={ProfileComponent}/>
                        <Route path="/register"
                               exact component={RegisterComponent}/>
                        <Route path="/contact"
                               exact component={ContactFormComponent}/>
                        <Route path="/search"
                               exact component={SearchContentComponent}/>
                    </div>
                </BrowserRouter>

            </div>


        )

    }
}

