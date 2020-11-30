import React from "react";
import {Link} from "react-router-dom";

export class AdminComponent extends React.Component{
    render() {
        return(
            <div className="container">
                <h3>Personal Page</h3>
                <ul className="list-group text-center">
                    <li className="list-group-item">
                        <Link to={`/profile`}>
                        Profile
                        </Link>
                    </li>
                    <li className="list-group-item">
                            <Link to={`/editingReviews`}>
                                Reviews
                            </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={`/editingBlogs`}>
                            Blogs
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={`/contacts`}>
                        Contacts
                        </Link>
                    </li>
                    <li className="list-group-item"><Link to={`/jobApplications`}>Job Application</Link></li>
                    <li className="list-group-item"><Link to={`/userManagement`}>User Management</Link></li>
                    <li className="list-group-item">Schedule</li>
                </ul>
            </div>
        )
    }}

