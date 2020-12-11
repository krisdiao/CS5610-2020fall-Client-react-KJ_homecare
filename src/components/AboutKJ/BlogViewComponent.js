import React from "react";
import {Form,Col,Row,Card} from 'react-bootstrap';
import {Link} from "react-router-dom";


export class BlogViewComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            blog: this.props.location.blogViewProps.blog,
            editing: false
        }
    }

    render() {
        console.log(this.state.blog)
        return(
            <div className="container">

                <Card >

                    <Card.Body>
                        <Card.Title>
                            <h1>
                                {this.state.blog.title}
                            </h1>
                        </Card.Title>
                        <br/>
                        <Card.Text>
                            <div dangerouslySetInnerHTML={ {__html: this.state.blog.content} }/>
                            {/*{blog.content}*/}
                        </Card.Text>
                        <footer className="blockquote-footer">
                            <cite title="Source Title">{this.state.blog.firstName}&nbsp;{this.state.blog.lastName}</cite>
                        </footer>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        {this.state.blog.timeStamp.toString()}
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}
