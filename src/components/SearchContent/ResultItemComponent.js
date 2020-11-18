import React from 'react';
class ResultItemComponent extends React.Component {
    constructor(props) {super(props)}
    render() {
        return (
            <li className="list-group-item">
                {this.props.title}
            </li>
        )}}
export default ResultItemComponent;
