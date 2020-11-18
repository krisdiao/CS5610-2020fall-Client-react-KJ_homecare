import React, {Component} from 'react';
import ResultItemComponent from "./ResultItemComponent"

class SearchResultComponent extends Component {
    constructor(props) {
        super(props);
    }

    renderResults() {
        var items;
        if (this.props.results) {
            items = this.props.results
                .map(function (item, index) {
                    return
                    <ResultItemComponent key={index} title={item.Title}/>
                });
        }
    }


render() {
            return (
                <div>
                    <h2>Results</h2>
                    {this.renderResults()}
                </div>
            );
        }
    }

export default SearchResultComponent;
