import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import {HeaderComponent} from "./header-footer/HeaderComponent";
import {ContactFormComponent} from "./User/ContactFormComponent";
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
import {FooterComponent} from "./header-footer/FooterComponent";
import {PetCareComponent} from "./CaregiverResource/PetCareComponent";
import ProfileComponent from "./User/ProfileComponent";
import {LeaveReviewsComponent} from "./AboutKJ/LeaveReviewsComponent";
import {BlogsViewComponent} from "./AboutKJ/BlogsViewComponent";
import {ReviewsEditorComponent} from "./AboutKJ/ReviewsEditorComponent";
import {AdminComponent} from "./User/AdminComponent";
import {CreateBlogsComponent} from "./AboutKJ/CreateBlogsComponent";
import {BlogsEditorComponent} from "./AboutKJ/BlogsEditorComponent";
import {ContactsComponent} from "./User/ContactsComponent";
import {JobApplicationsComponent} from "./User/JobApplicationsComponent";
import {UsersManagementComponent} from "./User/UsersManagementComponent";

export class MainPageComponent extends React.Component{
    render(){
        return(
            <div>
                <HeaderComponent/>
                <br/>
                <br/>
                <br/>
                <BrowserRouter>
                    <div>
                        <Route path="/"
                               exact component={LandingPageComponent}/>
                        <Route path="/about-KJ"
                               exact component={AboutKJComponent}/>
                        <Route path="/reviews"
                               exact component={ReviewsComponent}/>
                        <Route path="/leaveReviews"
                               exact component={LeaveReviewsComponent}/>
                        <Route path=
                                   {["/editingReviews/:reviewId","/editingReviews",

                                   ]}
                               exact component={ReviewsEditorComponent}/>
                        <Route path="/blogs"
                               exact component={BlogsComponent}/>
                        <Route path="/createBlogs"
                               exact component={CreateBlogsComponent}/>
                        <Route path=
                                   {["/blogs/:blogId",
                                   ]}
                               exact component={BlogsViewComponent}/>
                        <Route path=
                                   {["/editingBlogs/:blogId","/editingBlogs",

                                   ]}
                               exact component={BlogsEditorComponent}/>
                        <Route path="/client-story"
                               exact component={ClientStoryComponent}/>
                        <Route path="/bathing-dressing"
                               exact component={BathingDressingComponent}/>
                        <Route path="/companionship"
                               exact component={CompanionshipComponent}/>
                        <Route path="/grocery-shopping"
                               exact component={GroceryShoppingComponent}/>
                        <Route path="/light-housekeeping"
                               exact component={LightHousekeepingComponent}/>
                        <Route path="/light-meal-preparation"
                               exact component={LightMealPreparationComponent}/>
                        <Route path="/live-ins"
                               exact component={LiveInsComponent}/>
                        <Route path="/medication-monitoring"
                               exact component={MedicationMonitoringComponent}/>
                        <Route path="/respite"
                               exact component={RespiteComponent}/>
                        <Route path="/pet-care"
                               exact component={PetCareComponent}/>
                        <Route path="/safety-observation"
                               exact component={SafetyObservationComponent}/>
                        <Route path="/transportation"
                               exact component={TransportationComponent}/>
                        <Route path="/job-application"
                               exact component={ApplyJobComponent}/>
                        <Route path="/certified-nursing"
                               exact component={CertifiedNursingComponent}/>
                        <Route path="/companion-sitter"
                               exact component={CompanionSitterComponent}/>
                        <Route path="/personal-care"
                               exact component={PersonalCareComponent}/>
                        <Route path="/login"
                               exact component={LoginComponent}/>
                        <Route path="/profile"
                               exact component={ProfileComponent}/>
                        <Route path="/admin"
                               exact component={AdminComponent}/>
                        <Route path="/register"
                               exact component={RegisterComponent}/>
                        <Route path="/contact"
                               exact component={ContactFormComponent}/>
                        <Route path="/search"
                               exact component={SearchContentComponent}/>
                        <Route path="/contacts"
                               exact component={ContactsComponent}/>
                        <Route path="/jobApplications"
                               exact component={JobApplicationsComponent}/>
                        <Route path="/usersManagement"
                               exact component={UsersManagementComponent}/>
                    </div>
                </BrowserRouter>
                <br/>
                <br/>
                <br/>
                <FooterComponent/>
            </div>


        )

    }
}

