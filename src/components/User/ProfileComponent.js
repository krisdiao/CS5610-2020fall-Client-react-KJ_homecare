import React from "react";
import userService from "../../services/UserService";

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
        userService.profile()
            .then(profile => this.setState({
                profile: profile
            }))
    }

    handleLogout = () =>
        userService.logout()
            .then(status => {
                this.props.history.push('/')
            })

    render() {
        return(
            <div>
                <h3>Welcome back, my dear <strong>{this.state.profile.firstName} {this.state.profile.lastName}!</strong>
                </h3>
                <br/>
                <br/>
                <br/>
                <button
                    type="button"
                    onClick={this.handleLogout}
                    className={`btn btn-danger`}>
                    Logout
                </button>
            </div>
        )
    }
}
