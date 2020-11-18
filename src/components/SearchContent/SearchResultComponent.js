import React, {Component} from 'react';
import ResultItemComponent from "./ResultItemComponent"


class SearchResultComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("prop : ", this.props.results)

        return (
            <div>
                <ul className="list-group list-group-hover">
                    {
                        this.props.results
                            .map(result =>
                            <ResultItemComponent title={result.title} body={result.body}/>)}
                </ul>
            </div>
                );
            }
        }

export default SearchResultComponent;
