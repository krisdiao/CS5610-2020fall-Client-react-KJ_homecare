import React from "react";
import {AdminComponent} from "../../AdminComponent";
import {Container , Row , Col, Form} from 'react-bootstrap';
import userService from "../../../../services/UserService";
import {Link} from "react-router-dom";
var getUsersRegistrationReport = require('../../../../common/util.js').getUsersRegistrationReport;


export class UsersManagementComponent extends React.Component{

    state ={
        users:[
            // {
            //     id:"1",
            //     firstName: "Tom",
            //     lastName: "mmmmm",
            //     password: "123456!@#",
            //     email: "123456@gmail.com",
            //     phoneNumber: "987-654321",
            //     add1:"123 Main St",
            //     add2:"",
            //     city:"New York City",
            //     state:"New York",
            //     zip: "022022",
            //     role:"Admin",
            //
            // },
            // {
            //     id:"2",
            //     firstName: "William",
            //     lastName: "nnnnnn",
            //     password: "123456!@#",
            //     email: "abcdefg@gmail.com",
            //     phoneNumber: "456-654789",
            //     add1:"123 Main St",
            //     add2:"",
            //     city:"New York City",
            //     state:"New York",
            //     zip: "022022",
            //     role:"User",
            // },
            // {
            //     id:"3",
            //     firstName: "Elisa",
            //     lastName: "zzzzz",
            //     password: "123456!@#",
            //     email: "abc123@gmail.com",
            //     phoneNumber: "123-654778",
            //     add1:"123 Main St",
            //     add2:"",
            //     city:"New York City",
            //     state:"New York",
            //     zip: "022022",
            //     role:"Staff",
            // },
        ],
        role: '',
        editing: false
    }

    componentDidMount() {
        userService.findAllUsers()
            .then(users =>{
                console.log(users)
                this.setState( {
                    users: users
                })
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        userService.findAllUsers()
            .then(users =>{
                this.setState( {
                    users: users
                })
            })
    }

    downloadAllUsers = () => {
        userService.findAllUsers()
            .then(json =>{
                getUsersRegistrationReport(json, false)
            })
    }

    downloadUserById = (userId) => {
        userService.findUserById(userId)
            .then(json =>{
                getUsersRegistrationReport(json, true)
            })
    }

    deleteUser = (user) => {
        userService.deleteUser(user.id)
            .then(status => this.setState(prevState => ({
                    users: prevState.users.filter(users => users.id !== users.id)
                })
            ))
    }

    editUser = () => this.setState({editing: true})
    okUser = () => this.setState({editing: false})

    // handleSaveUser(user){
    //     this.setState({editing: false});
    //     //debugger
    //
    //     userService.updateUser(user.id, {
    //         ...user,
    //         role: this.state.role
    //     }).then(newUser => {
    //         console.log("newUser: ", newUser)
    //         // this.setState({
    //         //     user: newUser,
    //         //     editing: false,
    //         // })
    //     })
    // }


    render() {
        return(
            <Container>
                <Row>
                    <Col sm={3}><AdminComponent/></Col>
                    <Col sm={9}>
                        <Row>
                            <Col sm={9}><h1>Users</h1></Col>
                            <Col sm={3}>
                                <button
                                    onClick={ ()=> this.downloadAllUsers()}
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
                                <th>Role</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.users.map(user =>
                                <tr>
                                    <td>
                                        <Link to={{
                                            pathname: `/admin/users-management/create-staff-profile/${user.id}`,
                                            userViewProps: { user }
                                        }}
                                        > {user.lastName}</Link>
                                    </td>
                                    <td>{user.firstName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.add1}</td>
                                    <td>{user.add2}</td>
                                    <td>{user.city}</td>
                                    <td>{user.state}</td>
                                    <td>{user.zip}</td>
                                    {user &&user.role === "ADMIN" && <td>{user.role}</td>}
                                    {
                                        user && user.role !== "ADMIN" && !this.state.editing &&
                                        <span>
                                                    <td>{user.role}</td>
                                                    <td>
                                                        <button
                                                            onClick={ ()=> this.editUser()}
                                                            className="btn btn-primary float-right">
                                                            <i className="fa fa-pencil" aria-hidden="true"></i>
                                                        </button>
                                                    </td>
                                                </span>
                                    }
                                    {
                                        user && user.role !== "ADMIN" && this.state.editing &&
                                        <td>
                                                <span>
                                                    <Form.Control as="select"
                                                                  name="role"
                                                                  value={user.role}
                                                                  onChange={(event) => userService.updateUser(user.id, {
                                                                      ...user,
                                                                      role: event.target.value
                                                                  })}>
                                                                    <option value>- Select -</option>
                                                                    <option value="ADMIN">ADMIN</option>
                                                                    <option value="STAFF">STAFF</option>
                                                                    <option value="LOGIN_USER">LOGIN_USER</option>
                                                    </Form.Control>
                                                    {/*<input*/}
                                                    {/*    className="form-control"*/}
                                                    {/*    type="text"*/}
                                                    {/*    onChange={(event) => userService.updateUser(user.id, {*/}
                                                    {/*        ...user,*/}
                                                    {/*        role: event.target.value*/}
                                                    {/*    })}*/}
                                                    {/*    value={user.role}/>*/}
                                                        <button
                                                            // onClick={ ()=> this.handleSaveUser(user)}
                                                            onClick={ ()=> this.okUser()}
                                                            className="btn btn-primary float-right">
                                                    <i className="fa fa-check" aria-hidden="true"></i>
                                                    </button>
                                                </span>
                                        </td>
                                    }

                                    <td>
                                        <button
                                            onClick={ ()=> this.deleteUser(user)}
                                            className="btn btn-danger">
                                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={ ()=> this.downloadUserById(user.id)}
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
        )
    }
}
