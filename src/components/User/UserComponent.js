import React from "react";
import {Link} from "react-router-dom";

export class UserComponent
    extends React.Component{
    render() {
        return(
            <div>
                <div className="container">
                    <h3 className="orange">Dashboard</h3>
                    <ul className="list-group text-center">
                        <li className="list-group-item">
                            <Link className="orange" to={`/profile`}>
                                Profile
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="orange" to={`/`}>
                                My Application
                            </Link>
                        </li>
                        <li className="orange list-group-item">Schedule</li>
                    </ul>
                </div>
            </div>
        )
    }
}
