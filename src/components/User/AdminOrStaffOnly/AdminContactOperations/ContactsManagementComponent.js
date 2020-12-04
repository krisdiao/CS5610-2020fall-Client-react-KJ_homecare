import React from "react";
import {AdminComponent} from "../../AdminComponent";
import {Container , Row , Col} from 'react-bootstrap';
import contactService from "../../../../services/ContactService"

var getContactReport = require('../../../../common/util.js').getContactReport;
var getOneContactReport = require('../../../../common/util.js').getOneContactReport;

export class ContactsManagementComponent extends React.Component{

    state ={
        contacts:[
            // {
            //     id:"1",
            //     firstName: "qqqqq",
            //     lastName: "mmmmm",
            //     email: "123456@gmail.com",
            //     phoneNumber: "987-654321",
            //     zip: "022022"
            // },
            // {
            //     id:"2",
            //     firstName: "wwwwwww",
            //     lastName: "nnnnnn",
            //     email: "abcdefg@gmail.com",
            //     phoneNumber: "456-654789",
            //     zip: "020122"
            // },
            // {
            //     id:"3",
            //     firstName: "eeeee",
            //     lastName: "zzzzz",
            //     email: "abc123@gmail.com",
            //     phoneNumber: "123-654778",
            //     zip: "012022"
            // },
        ]
    }

    componentDidMount() {
        contactService.findAllContacts()
            .then(contacts =>{
                this.setState( {
                    contacts: contacts
                })
            })
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     contactService.findAllContacts()
    //         .then(contacts =>{
    //             this.setState( {
    //                 contacts: contacts
    //             })
    //         })
    // }

    downloadAllContacts = () => {
        contactService.findAllContacts()
            .then(json =>{
                console.log(json)
                getContactReport(json)
            })
    }

    downloadContactById = (contactId) => {
        contactService.downloadContactById(contactId)
            .then(json =>{
                console.log(json)
                getOneContactReport(json)
            })
    }

    deleteContact = (contact)=> {
        contactService.deleteContact(contact.id)
            .then(status => this.setState(prevState => ({
                contacts: prevState.contacts.filter(contacts => contacts.id !== contacts.id)
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
                            <h1>Contacts</h1>
                            <button
                                onClick={()=> this.downloadAllContacts()}
                                className="btn btn-success pull-right">
                                <i className="fa fa-download fa-4x" aria-hidden="true"></i>
                            </button>
                            <br/>
                            <br/>
                            <table className="table table-hover ">
                                <thead>
                                <tr>
                                    <th>Last Name</th>
                                    <th>First Name</th>
                                    <th>E-mail address</th>
                                    <th>Phone Number</th>
                                    <th>Zip code</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.contacts.map(contact =>
                                    <tr>
                                        <td>{contact.lastName}</td>
                                        <td>{contact.firstName}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.phoneNumber}</td>
                                        <td>{contact.zip}</td>
                                        <td>
                                            <button
                                                onClick={ ()=> this.deleteContact(contact)}
                                                className="btn btn-danger">
                                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={ ()=> this.downloadContactById(contact.id)}
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
