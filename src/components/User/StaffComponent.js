import React from "react";
import {Link} from "react-router-dom";

export class StaffComponent extends React.Component{
    render() {
        return(
            <div>
                <div className="container">
                    <h3>Personal Page</h3>
                    <ul className="list-group text-center">
                        <li className="list-group-item">
                            <Link to={`/profile`}>
                                Profile
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to={`/reviews-for-staffs`}>
                                Reviews
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to={`/update-blog-for-staff`}>
                                Blogs
                            </Link>
                        </li>
                        <li className="list-group-item">Schedule</li>
                    </ul>
                </div>
            </div>
        )
    }
}
