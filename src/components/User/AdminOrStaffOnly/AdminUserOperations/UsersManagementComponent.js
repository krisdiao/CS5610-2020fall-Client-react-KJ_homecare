import React from "react";
import {AdminComponent} from "../../AdminComponent";
import {Container , Row , Col} from 'react-bootstrap';
import userService, {updateUser} from "../../../../services/UserService";
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
        ]
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

    okay = (user) =>
        userService.updateUser(user.id, {...user, editing :false})
            .then(status => this.setState(prevState =>({
                type:"UPDATE_USER",
                user: {...user, editing:false }
            })))

    edit = (user) =>
        userService.updateUser(user.id, {...user, editing :true})
            .then(status => this.setState(prevState =>({
                type:"UPDATE_USER",
                user: {...user, editing:true }
            })))

    handleSaveUser(user){
        userService.updateUser(user.user.id, user.user)
            .then(newUser => {
                this.setState({
                    user: newUser,
                    editing: false,
                })
            })
    }


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
                                        <td>{user.lastName}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phoneNumber}</td>
                                        <td>{user.add1}</td>
                                        <td>{user.add2}</td>
                                        <td>{user.city}</td>
                                        <td>{user.state}</td>
                                        <td>{user.zip}</td>
                                        {/*<td>{user.role}</td>*/}
                                        <td>
                                            <input
                                                className="form-control-sm"
                                                type="text"
                                                value={user.role}
                                                onChange={(event) => {
                                                    const newRole = event.target.value
                                                    this.setState(prevState => ({
                                                        user: {...prevState.user, role: newRole}
                                                    }))
                                                }}
                                            />
                                            <button
                                                className="btn btn-primary pull-right"
                                                onClick={() => this.handleSaveUser(this.state)}>
                                                <i className="fa fa-pencil" aria-hidden="true"></i>
                                            </button>
                                        </td>
                                        {/*{*/}
                                        {/*    user.role !== "ADMIN" && !user.editing &&*/}
                                        {/*        <span>*/}
                                        {/*            <td>*/}
                                        {/*                <button*/}
                                        {/*                    onClick={ ()=> this.edit(user)}*/}
                                        {/*                    className="btn btn-primary">*/}
                                        {/*                    <i className="fa fa-pencil" aria-hidden="true"></i>*/}
                                        {/*                </button>*/}
                                        {/*            </td>*/}
                                        {/*        </span>*/}
                                        {/*}*/}
                                        {/*{*/}
                                        {/*    user.role !== "ADMIN" && user.editing &&*/}
                                        {/*    <td>*/}
                                        {/*        <span>*/}
                                        {/*            <button*/}
                                        {/*                onClick={ ()=> this.okay(user)}*/}
                                        {/*                className="btn btn-primary">*/}
                                        {/*            <i className="fa fa-check" aria-hidden="true"></i>*/}
                                        {/*            </button>*/}
                                        {/*            <input*/}
                                        {/*                onChange={(event) => updateUser({*/}
                                        {/*                    ...user,*/}
                                        {/*                    role: event.target.value*/}
                                        {/*                })}*/}
                                        {/*                value={user.role}/>*/}
                                        {/*        </span>*/}
                                        {/*    </td>*/}
                                        {/*}*/}

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
