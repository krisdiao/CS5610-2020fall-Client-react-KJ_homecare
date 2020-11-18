import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form,Button,FormControl, Nav} from 'react-bootstrap';
import SearchResultComponent from "./SearchResultComponent"
import {Link} from "react-router-dom";


class SearchContentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            results: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }



    onInputChange(event) {
        if(event.target.value !==""){
            this.setState({keyword: event.target.value});
        } else {
            alert("Please enter keyword before searching!");
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.fetchResult(event);
    }



    fetchResult(event) {
        // var url = 'http://www.omdbapi.com';
        // url += '?apikey=YOURKEY;
        // url += '&s=' + this.state.keyword;
        var url = "https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?age=10&sex=male"

        fetch(url)
            .then(res => res.json())
            .then(status => {
                this.setState({results: status.result});
            })}


    render() {
        return (
            <div>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        value={this.state.keyword}
                        onChange={this.onInputChange}
                    />
                    <Button
                        variant="outline-info"
                        onClick={this.handleSubmit}
                    >
                        Search
                        {/*<Nav.Link componentClass={Link} href="/Result">Search</Nav.Link>*/}
                    </Button>

                </Form>
                <SearchResultComponent results={this.state.results}/>
            </div>
        );
    }
}

export default SearchContentComponent;


