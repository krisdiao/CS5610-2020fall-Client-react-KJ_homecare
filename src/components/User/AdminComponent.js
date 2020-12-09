import React from "react";
import {Link} from "react-router-dom";

export class AdminComponent extends React.Component{
    render() {
        return(
            <div className="container">
                <h3>Dashboard</h3>
                <ul className="list-group text-center">
                    <li className="list-group-item">
                        <Link to={`/profile`}>
                        Profile
                        </Link>
                    </li>
                    <li className="list-group-item">
                            <Link to={`/admin/update-review`}>
                                Reviews
                            </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={`/admin/update-blog`}>
                            Blogs
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={`/admin/contacts-management`}>
                        Contacts Management
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={`/admin/job-applications`}>
                            Job Application
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={`/admin/users-management`}>
                            User Management
                        </Link>
                    </li>
                    <li className="list-group-item">Schedule</li>
                </ul>
            </div>
        )
    }}

