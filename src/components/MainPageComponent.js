import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import {HeaderComponent} from "./header-footer/HeaderComponent";
import {ContactFormComponent} from "./User/ContactFormComponent";
import {AboutKJComponent} from "./AboutKJ/AboutKJComponent";
import {BrowserRouter, Route, Link} from "react-router-dom";
import {ReviewsComponent} from "./AboutKJ/ReviewsComponent";
import {ReviewsViewComponent} from "./AboutKJ/ReviewsViewComponent";
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
import ProfileComponent from "./User/Profile/ProfileComponent";
import {LeaveReviewsComponent} from "./User/LoginUsers/LeaveReviewsComponent";
import {BlogsEditingComponent} from "./User/AdminOrStaffOnly/AdminBlogOperations/BlogsEditingComponent";
import {ReviewsListingComponent} from "./User/AdminOrStaffOnly/AdminReviewOperations/ReviewsListingComponent";
import {AdminComponent} from "./User/AdminComponent";
import {CreateBlogsComponent} from "./User/AdminOrStaffOnly/AdminBlogOperations/CreateBlogsComponent";
import {BlogsListingComponent} from "./User/AdminOrStaffOnly/AdminBlogOperations/BlogsListingComponent";
import {ContactsManagementComponent} from "./User/AdminOrStaffOnly/AdminContactOperations/ContactsManagementComponent";
import {JobApplicationsComponent} from "./User/AdminOrStaffOnly/AdminJobApplicationsOperations/JobApplicationsComponent";
import {UsersManagementComponent} from "./User/AdminOrStaffOnly/AdminUserOperations/UsersManagementComponent";
import {BlogViewComponent} from "./AboutKJ/BlogViewComponent"
import {ReviewsEditingComponent} from "./User/LoginUsers/ReviewsEditingComponent";
import {StaffComponent} from "./User/StaffComponent";
import {ReviewsListingForStaffsComponent} from "./User/AdminOrStaffOnly/StaffReviewOperations/ReviewsListingForStaffsComponent";
import {BlogsListingForStaffsComponent} from "./User/AdminOrStaffOnly/StaffBlogOperations/BlogsListingForStaffsComponent";
import {ReviewsViewForStaffsComponent} from "./User/AdminOrStaffOnly/StaffReviewOperations/ReviewsViewForStaffsComponent";
import {UserComponent} from "./User/UserComponent";
import {CreateBlogsByStaffsComponent} from "./User/AdminOrStaffOnly/StaffBlogOperations/CreateBlogsByStaffsComponent";
import UpdateInformation from "./User/Profile/UpdateInformation";
import {ViewMyReviewsComponent} from "./User/Profile/ViewMyReviewsComponent";
import {ViewMyBlogsComponent} from "./User/Profile/ViewMyBlogsComponent";
import {ViewMyJobsComponent} from "./User/Profile/ViewMyJobsComponent";
import ResultItemDetailsComponent from "./SearchContent/ResultItemDetailsComponent";


export class MainPageComponent extends React.Component{
    render(){
        return(
            <div>
                <HeaderComponent/>
                <br/>
                <BrowserRouter>
                    <div>
                        <Route path="/"
                               exact component={LandingPageComponent}/>
                        <Route path="/about/about-KJ"
                               exact component={AboutKJComponent}/>
                        <Route path="/about/reviews"
                               exact component={ReviewsComponent}/>
                        <Route path="/about/reviews/more-reviews"
                               exact component={ReviewsViewComponent}/>
                        <Route path="/staff/reviews-for-staffs"
                               exact component={ReviewsListingForStaffsComponent}/>
                        <Route path="/staff/reviews-for-staffs/:reviewId"
                               exact component={ReviewsViewForStaffsComponent}/>

                        <Route path={["/about/reviews/leave-review",
                                    "/admin/reviews/leave-review"
                        ]}
                               exact component={LeaveReviewsComponent}/>
                        <Route path=
                                   {["/admin/update-review/:reviewId",
                                       "/update-review/:reviewId"
                                   ]}
                               exact component={ReviewsEditingComponent}/>
                        <Route path={["/admin/update-review",]}
                               exact component={ReviewsListingComponent}/>
                        <Route path="/about/blogs"
                               exact component={BlogsComponent}/>
                        <Route path=
                                   {["/about/blogs/:blogId",
                                   ]}
                               exact component={BlogViewComponent}/>
                        <Route path="/admin/create-blog"
                               exact component={CreateBlogsComponent}/>
                        <Route path="/staff/create-blog-by-staff"
                               exact component={CreateBlogsByStaffsComponent}/>
                        <Route path=
                                   {["/admin/update-blog/:blogId",
                                       "/staff/update-blog/:blogId",
                                       "/update-blog/:blogId"
                                   ]}
                               exact component={BlogsEditingComponent}/>
                        <Route path=
                                   {["/admin/update-blog",]}
                               exact component={BlogsListingComponent}/>
                        <Route path=
                                   {["/staff/update-blog-for-staff",]}
                               exact component={BlogsListingForStaffsComponent}/>
                        <Route path="/about/client-story"
                               exact component={ClientStoryComponent}/>
                        <Route path="/care-service/bathing-dressing"
                               exact component={BathingDressingComponent}/>
                        <Route path="/care-service/companionship"
                               exact component={CompanionshipComponent}/>
                        <Route path="/care-service/grocery-shopping"
                               exact component={GroceryShoppingComponent}/>
                        <Route path="/care-service/light-housekeeping"
                               exact component={LightHousekeepingComponent}/>
                        <Route path="/care-service/light-meal-preparation"
                               exact component={LightMealPreparationComponent}/>
                        <Route path="/care-service/live-ins"
                               exact component={LiveInsComponent}/>
                        <Route path="/care-service/medication-monitoring"
                               exact component={MedicationMonitoringComponent}/>
                        <Route path="/care-service/respite"
                               exact component={RespiteComponent}/>
                        <Route path="/care-service/pet-care"
                               exact component={PetCareComponent}/>
                        <Route path="/care-service/safety-observation"
                               exact component={SafetyObservationComponent}/>
                        <Route path="/care-service/transportation"
                               exact component={TransportationComponent}/>
                        <Route path="/caregiver-resource/job-application"
                               exact component={ApplyJobComponent}/>
                        <Route path="/caregiver-resource/certified-nursing"
                               exact component={CertifiedNursingComponent}/>
                        <Route path="/caregiver-resource/companion-sitter"
                               exact component={CompanionSitterComponent}/>
                        <Route path="/caregiver-resource/personal-care"
                               exact component={PersonalCareComponent}/>
                        <Route path="/login"
                               exact component={LoginComponent}/>
                        <Route path="/profile"
                               exact component={ProfileComponent}/>
                        <Route path="/profile/view-my-reviews"
                               exact component={ViewMyReviewsComponent}/>
                        <Route path="/profile/view-my-blogs"
                               exact component={ViewMyBlogsComponent}/>
                        <Route path="/profile/view-my-jobs"
                               exact component={ViewMyJobsComponent}/>
                        <Route path="/profile/update-information"
                               exact component={UpdateInformation}/>
                        <Route path="/register"
                               exact component={RegisterComponent}/>
                        <Route path="/contact"
                               exact component={ContactFormComponent}/>
                        <Route path={[
                                        "/search",
                                        "/search/?age=age&sex=gender"
                                    ]}
                               exact component={SearchContentComponent}/>
                        <Route path="/search/:resultId/details"
                               exact component={ResultItemDetailsComponent}/>
                        <Route path="/admin"
                               exact component={AdminComponent}/>
                        <Route path="/staff"
                               exact component={StaffComponent}/>
                        <Route path="/user"
                               exact component={UserComponent}/>
                        <Route path="/admin/contacts-management"
                               exact component={ContactsManagementComponent}/>
                        <Route path="/admin/job-applications"
                               exact component={JobApplicationsComponent}/>
                        <Route path="/admin/users-management"
                               exact component={UsersManagementComponent}/>
                    </div>
                </BrowserRouter>
                <br/>
                <FooterComponent/>
            </div>
        )

    }
}

