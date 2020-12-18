import React from "react";
import {AdminComponent} from "../../AdminComponent";
import {Container , Row , Col} from 'react-bootstrap';
import jobApplicationService from "../../../../services/JobApplicationService";
import {getJobApplicantsReport} from "../../../../common/util";

export class JobApplicationsComponent extends React.Component{

    state ={
        jobs:[
            // {
            //     id:"1",
            //     firstName: "Tom",
            //     lastName: "mmmmm",
            //     email: "123456@gmail.com",
            //     phoneNumber: "987-654321",
            //     add1:"123 Main St",
            //     add2:"/",
            //     city:"New York City",
            //     state:"New York",
            //     zip: "022022",
            //     jobPosition:"Companion Sitter",
            //     resume:"/",
            //
            // },
            // {
            //     id:"2",
            //     firstName: "William",
            //     lastName: "nnnnnn",
            //     email: "abcdefg@gmail.com",
            //     phoneNumber: "456-654789",
            //     add1:"123 Main St",
            //     add2:"/",
            //     city:"New York City",
            //     state:"New York",
            //     zip: "022022",
            //     jobPosition:"Certified Nursing",
            //     resume:"/",
            // },
            // {
            //     id:"3",
            //     firstName: "Elisa",
            //     lastName: "zzzzz",
            //     email: "abc123@gmail.com",
            //     phoneNumber: "123-654778",
            //     add1:"123 Main St",
            //     add2:"/",
            //     city:"New York City",
            //     state:"New York",
            //     zip: "022022",
            //     jobPosition:"Personal Care",
            //     resume:"/",
            // },
        ]
    }

    componentDidMount() {
        jobApplicationService.findAllJobApplications()
            .then(jobs => {
                this.setState( {
                    jobs: jobs
                })
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        jobApplicationService.findAllJobApplications()
            .then(jobs =>{
                this.setState( {
                    jobs: jobs
                })
            })
    }

    downloadAllJobApplicants = () => {
        jobApplicationService.findAllJobApplications()
            .then(json =>{
                getJobApplicantsReport(json, false);
            })
    }

    downloadJobApplicantById = (jobId) => {
        jobApplicationService.findApplicationById(jobId)
            .then(json =>{
                getJobApplicantsReport(json, true);
            })
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
                        <Col sm={3}><AdminComponent/></Col>
                        <Col sm={9}>
                            <Row>
                                <Col sm={9}><h1>Jobs</h1></Col>
                                <Col sm={3}>
                                    <button
                                        onClick={ ()=> this.downloadAllJobApplicants()}
                                        className="btn btn-success fa-pull-right">
                                        <i className="fa fa-download fa-2x" aria-hidden="true"></i>
                                    </button>
                                </Col>
                            </Row>
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
                                {this.state.jobs.map(job =>
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
                                        <td>
                                            <button
                                                onClick={ ()=> this.downloadJobApplicantById(job.id)}
                                                className="btn btn-success">
                                                <i className="fa fa-download" aria-hidden="true"></i>
                                            </button>
                                        </td>
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
