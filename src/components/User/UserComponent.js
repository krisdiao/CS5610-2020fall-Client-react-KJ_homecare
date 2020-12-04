import React from "react";
import {Link} from "react-router-dom";

export class UserComponent
    extends React.Component{
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
                            <Link to={`/`}>
                                My Application
                            </Link>
                        </li>
                        <li className="list-group-item">Schedule</li>
                    </ul>
                </div>
            </div>
        )
    }
}
