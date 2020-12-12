import React, {Component} from 'react';
import {Link} from "react-router-dom";


class SearchResultComponent extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>
                {this.props.results.Result &&
                <div dangerouslySetInnerHTML={ {__html: this.props.results.Result.MyHFHeading} } />}
                <ul className="list-group list-group-hover">
                    {
                        this.props.results.Result && this.props.results.Result.Resources.All.Resource.map(result =>
                            <li key={result.Id} className="list-group-item">
                                <Link to={`/details/${result.Id}`}>
                                    <p className="orange">Title</p>
                                    <h3 className="align-middle orange">{result.MyHFTitle}</h3>
                                </Link>
                            </li>
                        )}
                </ul>
            </div>
        );
    }

}

export default SearchResultComponent;
