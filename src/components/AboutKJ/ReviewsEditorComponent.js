import React from "react";
import {AdminComponent} from "../User/AdminComponent";
import {Container , Row , Col , Form,Button,FormControl} from 'react-bootstrap';

export class ReviewsEditorComponent extends React.Component{
    render() {
        return(
            <Container>
                <Row>
                    <Col sm={3}><AdminComponent/></Col>
                    <Col sm={9}>
                        <table className="table table-hover ">
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Last Name</th>
                                <th>First Name</th>
                                <th>Last Modified</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                            </tr>
                            {/*<tr>*/}
                            {/*    <td>*/}
                            {/*        <Link to ={`/blogs/${this.props.blogs._id}`}>*/}
                            {/*            {this.props.blogs.title} */}
                            {/*            {this.props.blogs._id}*/}
                            {/*        </Link>*/}
                            {/*    </td>*/}
                            {/*    <td>{this.props.blogs.author}</td>*/}
                            {/*    <td>{this.props.blogs.lastModified}</td>*/}
                            {/*</tr>*/}
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>

        )
    }
}
