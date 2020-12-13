import React from "react";
import userService from "../../../services/UserService";
import {Container , Row , Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'


export default class StaffProfileComponent extends React.Component {

    state = {
        users:[
            {
                id:"1",
                firstName: "Jamal",
                lastName: "Beighe",
                profilePicture: "maleCNA.jpg",
                shortDescription: "Reliable, service-focused nursing professional with excellent patient-care and charting skills gained through five years of experience as a CNA. Experience working with company facilities. Compassionate and technically skilled in attending to patients in diverse healthcare settings. BLS and CPR certified (current)",
                content: "Provides nursing care for routine occupational illnesses and injuries at a single worksite based upon medical directives and nursing assessments\n" +
                    "Performs screening examinations such as, vision screening, tonometry and EKG to determine whether employees meet expected health standards of company. Refers abnormal or questionable findings to appropriate individuals for further evaluation\n" +
                    "Assists with physical examination programs, obtaining health and work history, and interpreting results to ensure that appropriate referrals are made, when appropriate\n" +
                    "Assists case managers on on-site injuries. Assists in determining extent or seriousness of work-related injuries. Administers basic first-aid and assistance and contacts appropriate authorities regarding decisions related to further actions\n" +
                    "Tracks and records exposure to hazardous environments or chemicals and common injuries to ensure prevention of future occurrence. May assists in providing counseling on routine health subjects and referrals to other health care professionals\n" +
                    "Maintains health related documentation such as employee medical records\n" +
                    "Zero or more years of nursing experience\n" +
                    "Experience working with medical procedures and techniques\n" +
                    "Experience working with emergency medical techniques such as CPR and first aid\n" +
                    "Experience working with company facilities\n" +
                    "Willingness to travel",
                yearsOfExperience: "2018",
                certification: "CNA",
                gender: "MALE",
                title: "CNA",
            },
            {
                id:"2",
                firstName: "Carmen",
                lastName: "Robinson",
                profilePicture: "nurse.jpg",
                shortDescription: "Hospital's environment of care Maintenance of equipment and supplie Safety surveillance Routine unit functions 1+ year of experience as a Nursing or Medical Assistant in a Hospital setting Active Certified Nursing Assistant (CNA) certification Basic assessment skills such as the taking of vital signs",
                content: "Provides nursing care for routine occupational illnesses and injuries at a single worksite based upon medical directives and nursing assessments\n" +
                    "Performs screening examinations such as, vision screening, tonometry and EKG to determine whether employees meet expected health standards of company. Refers abnormal or questionable findings to appropriate individuals for further evaluation\n" +
                    "Assists with physical examination programs, obtaining health and work history, and interpreting results to ensure that appropriate referrals are made, when appropriate\n" +
                    "Assists case managers on on-site injuries. Assists in determining extent or seriousness of work-related injuries. Administers basic first-aid and assistance and contacts appropriate authorities regarding decisions related to further actions\n" +
                    "Tracks and records exposure to hazardous environments or chemicals and common injuries to ensure prevention of future occurrence. May assists in providing counseling on routine health subjects and referrals to other health care professionals\n" +
                    "Maintains health related documentation such as employee medical records\n" +
                    "Zero or more years of nursing experience\n" +
                    "Experience working with medical procedures and techniques\n" +
                    "Experience working with emergency medical techniques such as CPR and first aid\n" +
                    "Experience working with company facilities\n" +
                    "Willingness to travel",
                yearsOfExperience: "2016",
                certification: "RN",
                gender: "FEMALE",
                title: "RN",
            },
            {
                id:"3",
                firstName: "Laker",
                lastName: "Lin",
                profilePicture: "maleNurse.jpg",
                shortDescription: "Experience working with medical procedures and techniques Experience working with emergency medical techniques such as CPR and first aid Provides nursing care for routine occupational illnesses and injuries at a single worksite based upon medical directives and nursing assessments",
                content: "Provides nursing care for routine occupational illnesses and injuries at a single worksite based upon medical directives and nursing assessments\n" +
                    "Performs screening examinations such as, vision screening, tonometry and EKG to determine whether employees meet expected health standards of company. Refers abnormal or questionable findings to appropriate individuals for further evaluation\n" +
                    "Assists with physical examination programs, obtaining health and work history, and interpreting results to ensure that appropriate referrals are made, when appropriate\n" +
                    "Assists case managers on on-site injuries. Assists in determining extent or seriousness of work-related injuries. Administers basic first-aid and assistance and contacts appropriate authorities regarding decisions related to further actions\n" +
                    "Tracks and records exposure to hazardous environments or chemicals and common injuries to ensure prevention of future occurrence. May assists in providing counseling on routine health subjects and referrals to other health care professionals\n" +
                    "Maintains health related documentation such as employee medical records\n" +
                    "Zero or more years of nursing experience\n" +
                    "Experience working with medical procedures and techniques\n" +
                    "Experience working with emergency medical techniques such as CPR and first aid\n" +
                    "Experience working with company facilities\n" +
                    "Willingness to travel",
                yearsOfExperience: "2013",
                certification: "LPN",
                gender: "MALE",
                title: "LPN",
            },
        ],
        space: ' '

    }

    componentDidMount() {
        userService.findAllStaff()
            .then(users => this.setState({
                users
            }))
        console.log("users: ", this.state.users)
    }

    render() {
        return(
            <div>
                <Container>
                    <h1 className="orange">Welcome to our Staff page!</h1>
                    <br/>
                    <CardDeck>
                        {this.state.users && this.state.users.map(user => <Card>
                                <Card.Img className="profilePhoto" variant="top" src={user.profilePicture} />
                                <Card.Body>
                                    <Card.Title>{user.firstName} {" "} {user.lastName}</Card.Title>
                                    <Card.Text>{user.shortDescription}</Card.Text>
                                    <Link className="orange" to={{
                                        pathname: `/profiles/${user.id}`,
                                        userViewProps: {user}
                                    }}>
                                        <Button className="orangeBg btn-success" variant="primary">Read More About Me</Button>
                                    </Link>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">{user.title}, served since {" "} {user.yearsOfExperience}</small>
                                </Card.Footer>
                            </Card>
                        )}
                    </CardDeck>
                </Container>

            </div>
        )
    }
}
