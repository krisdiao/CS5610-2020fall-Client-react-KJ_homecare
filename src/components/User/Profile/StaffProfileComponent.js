import React from "react";
import userService from "../../../services/UserService";
import {Container , Row , Col} from 'react-bootstrap';
import {Link} from "react-router-dom";


export default class StaffProfileComponent extends React.Component {

    state = {
        profile: {

            firstName: '1',
            lastName: '2',
            photo: '',
            selfIntro: '',
        },
        space: ' '

    }

    componentDidMount() {
        // userService.profile()
        //     .then(profile => this.setState({
        //         profile: profile
        //     }))
    }

    render() {
        return(
            <div>
                <Container>
                    <h1 className="orange">Welcome to our Staff page!</h1>
                    <Row>
                        <ul className="list-group text-center">
                            {/*<li className="list-group-item">*/}
                            {/*    <Link className="orange" to={{*/}
                            {/*        pathname: `/profile/update-information`,*/}
                            {/*        profileViewProps: {profile: this.state.profile}*/}
                            {/*    }}>*/}
                            {/*        Update My Information*/}
                            {/*    </Link>*/}
                            {/*</li>*/}

                        </ul>
                    </Row>
                </Container>

            </div>
        )
    }
}
