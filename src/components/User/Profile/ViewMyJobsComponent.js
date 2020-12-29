import React from "react";
import {Container , Row , Col} from 'react-bootstrap';
import ProfileComponent from "./ProfileComponent"
import jobApplicationService from "../../../services/JobApplicationService";
import userService from "../../../services/UserService";

export class ViewMyJobsComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            jobs:[],
            profile: '',
            editing: false
        }
    }

    componentDidMount() {
        userService.profile()
            .then(profile =>  {this.setState({profile})})

        jobApplicationService.findApplicationsForUser(this.props.match.params.userId)
            .then(jobs =>{this.setState( {jobs})})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.jobs.length !== this.state.jobs.length) {

            jobApplicationService.findApplicationsForUser(this.props.match.params.userId)
                .then(jobs =>{this.setState( {jobs})})
        }
    }

    deleteApplication = (job) => {
        jobApplicationService.deleteApplication(job.id)
            .then(status => this.setState(prevState => ({
                    jobs: prevState.jobs.filter(jobs => jobs.id !== jobs.id)
                })
            ))
    }

    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Col sm={3}><ProfileComponent {...this.props} profile={this.state.profile}/></Col>
                        <Col sm={9}>
                            <h1>My Job Applications</h1>
                            <br/>
                            <br/>
                            <table className="table table-hover ">
                                <thead>
                                <tr>
                                    <th>Last Name</th>
                                    <th>First Name</th>
                                    <th>E-mail address</th>
                                    <th>Phone Number</th>
                                    <th>Address 1</th>
                                    <th>Address 2</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Zip code</th>
                                    <th>Job Position</th>
                                    <th>Resume</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.jobs && this.state.jobs.map(job =>
                                    <tr>
                                        <td>{job.lastName}</td>
                                        <td>{job.firstName}</td>
                                        <td>{job.email}</td>
                                        <td>{job.phoneNumber}</td>
                                        <td>{job.add1}</td>
                                        <td>{job.add2}</td>
                                        <td>{job.city}</td>
                                        <td>{job.state}</td>
                                        <td>{job.zip}</td>
                                        <td>{job.jobPosition}</td>
                                        <td>{job.resume}</td>
                                        <td>
                                            <button
                                                onClick={ ()=> this.deleteApplication(job)}
                                                className="btn btn-danger">
                                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                                            </button>
                                        </td>
                                        {/*<td>*/}
                                        {/*    <button*/}
                                        {/*        onClick={ ()=> this.downloadJobApplicantById(job.id)}*/}
                                        {/*        className="btn btn-success">*/}
                                        {/*        <i className="fa fa-download" aria-hidden="true"></i>*/}
                                        {/*    </button>*/}
                                        {/*</td>*/}
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }


}
