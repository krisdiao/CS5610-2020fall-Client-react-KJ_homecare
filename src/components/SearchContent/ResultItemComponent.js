import React from 'react';
class ResultItemComponent extends React.Component {
    constructor(props) {super(props)}
    render() {
        console.log("title: ", this.props.title)
        return (
            <li className="list-group-item">
                <h4>Results</h4>
                <h2 className="align-middle">{this.props.title}</h2>
                <br/>
                <h5>{this.props.body}</h5>
            </li>
        )}}
export default ResultItemComponent;
