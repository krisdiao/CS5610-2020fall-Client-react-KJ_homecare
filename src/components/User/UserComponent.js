import React from "react";
import {Link} from "react-router-dom";
import userService from "../../services/UserService";

export class UserComponent
    extends React.Component{

    state = {
        profile: {},
        space: ' '
    }

    componentDidMount() {
        console.log(this.props)
        userService.profile()
            .then(profile => this.setState({
                profile: profile
            }))
        console.log("updated? ",this.state.profile)
    }


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
                            <Link className="orange" to={{pathname:`/profile/${this.state.profile.id}/view-my-jobs`,
                                profileViewProps: {profile: this.state.profile}
                            }}>
                                My Job Application
                            </Link>
                        </li>
                        <li className="orange list-group-item">Schedule</li>
                    </ul>
                </div>
            </div>
        )
    }
}
