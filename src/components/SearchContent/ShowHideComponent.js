import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {Card} from 'react-bootstrap'

class ShowHideComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sections: this.props.sections,
            index:''
        }
    }

    componentDidMount() {
        console.log("prop : ", this.props)
        if(this.props.sections !== undefined){
            this.setState({sections: this.props.sections})
            console.log("title : ", this.props.sections.section[0].Title)
            console.log("Content : ", this.props.sections.section[0].Content)
        }
    }

    render() {
        console.log("sections: ", this.props.sections)
        return (
            <div>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <h3 className="orange">{this.props.sections.section[0].Title}</h3>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body><div dangerouslySetInnerHTML={ {__html: this.props.sections.section[0].Content} } /></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    {
                        this.props.sections && this.props.sections.section.map((array, index) =>
                            <Card key={index}>
                                {
                                    index > 0 &&
                                    <div>
                                        <Accordion.Toggle as={Card.Header} eventKey={index}>
                                            <h3 className="orange">{array.Title}</h3>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey={index}>
                                            <Card.Body><div dangerouslySetInnerHTML={ {__html: array.Content} } /></Card.Body>
                                        </Accordion.Collapse>
                                    </div>
                                }
                            </Card>
                        )
                    }
                </Accordion>
            </div>)
            ;
    }

}

export default ShowHideComponent;


