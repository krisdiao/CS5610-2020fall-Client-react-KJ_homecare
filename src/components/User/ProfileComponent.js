import React from "react";
import {profile, logout} from "../../services/UserService";

export default class Profile extends React.Component {

    state = {
        profile: {

            firstName: '',
            lastName: '',
            password: '',
            email: '',
            phoneNumber: '',
            add1: '',
            add2: '',
            city: '',
            state: '',
            zip: '',
            roles: []

        }
    }

    componentDidMount() {
        profile()
            .then(profile => this.setState({
                profile: profile
            }))
    }

    handleLogout = () =>
        logout()
            .then(status => {
                this.props.history.push('/')
            })

    render() {
        return(
            <div>
                <h1>Profile</h1>
                Hi {this.state.profile.username}!
                <hr/>
                <button
                    onClick={this.handleLogout}
                    className={`btn btn-danger`}>
                    Logout
                </button>
            </div>
        )
    }
}
