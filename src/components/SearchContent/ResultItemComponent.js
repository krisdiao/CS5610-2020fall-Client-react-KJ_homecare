import React from 'react';
class ResultItemComponent extends React.Component {
    constructor(props) {super(props)}
    render() {
        return (
            <li className="list-group-item">
                <h2>Results</h2>
                {this.props.title}
            </li>
        )}}
export default ResultItemComponent;
