import React from "react";
import userService from "../../../services/UserService";
import {Container , Row , Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {leadToCorrectLoginUserPage} from "../../../common/util";

export default class Profile extends React.Component {

    state = {
        profile: {

            firstName: '1',
            lastName: '2',
            password: '123',
            verifyPassword:'123',
            email: 'qq',
            phoneNumber: '5465',
            add1: 'asd',
            add2: 'asd',
            city: 'new',
            state: 'AL',
            zip: '02010',
            role:'ADMIN',
            // roles: [],
        },
    }

    componentDidMount() {
        userService.profile()
            .then(profile => this.setState({
                profile
            }))
    }

    handleLogout = () =>
        userService.logout()
            .then(status => {
                this.props.history.push('/')
            })

    render() {
        const { firstName, lastName, id, role } = this.state.profile;
        return(
            <div>
                <Container>
                    <h3>
                        <button className="greenBg form-control-lg btn btn-success"
                                  onClick={() => leadToCorrectLoginUserPage(this.state.profile, this.props.history)}>
                                <i className="fa fa-arrow-left " aria-hidden="true"></i>
                        </button>
                        Welcome back, my dear &nbsp;<strong>{firstName}&nbsp;{lastName}!</strong>
                    </h3>
                    <Row>
                        {/*<Col  sm={3}>*/}
                            <ul className="list-group text-center">
                                <li className="list-group-item">
                                    <Link className="orange" to={`/`}>
                                        Main Page
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link className="orange" to={{
                                        pathname: `/profile/${id}/update-information`,
                                        profileViewProps: {profile: this.state.profile}
                                    }}>
                                        Update My Information
                                    </Link>
                                </li>

                                {
                                    role !== "STAFF" &&
                                    <li className="list-group-item">
                                        <Link className="orange" to={{pathname:`/profile/${id}/view-my-reviews`,
                                            profileViewProps: {profile: this.state.profile}
                                        }}>
                                            View My Reviews
                                        </Link>
                                    </li>

                                }

                                {
                                    role !== "LOGIN_USER" &&
                                    <li className="list-group-item">
                                        <Link className="orange" to={{pathname:`/profile/${id}/view-my-blogs`,
                                            profileViewProps: {profile: this.state.profile}
                                        }}>
                                            View My Blogs
                                        </Link>
                                    </li>
                                }

                                <li className="list-group-item">
                                    <Link className="orange" to={{
                                        pathname: `/profile/${id}/view-my-liked-blogs`,
                                        profileViewProps: {profile: this.state.profile}
                                    }}>
                                        View My Liked Blogs
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link className="orange" to={{
                                        pathname: `/profile/${id}/view-my-replied-blogs`,
                                        profileViewProps: {profile: this.state.profile}
                                    }}>
                                        View My Replied Blogs
                                    </Link>
                                </li>

                                {
                                    role === "LOGIN_USER" &&

                                    <li className="list-group-item">
                                        <Link className="orange" to={{pathname:`/profile/${id}/view-my-jobs`,
                                            profileViewProps: {profile: this.state.profile}
                                        }}>
                                            View My Job Application
                                        </Link>
                                    </li>
                                }

                                <li className="list-group-item">
                                    <Link className="orange" to={`/profile`}>
                                        My Schedule
                                    </Link>
                                </li>
                            </ul>
                        {/*</Col>*/}
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <button
                        type="button"
                        onClick={this.handleLogout}
                        className="orangeBg btn btn-danger">
                        Logout
                    </button>
                </Container>

            </div>
        )
    }
}
