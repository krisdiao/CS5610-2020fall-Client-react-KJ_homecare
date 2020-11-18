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
        var url = "https://jsonplaceholder.typicode.com/posts"

        fetch(url)
            .then(response =>
            {
                console.log("response： ", response)
                return response.json()
            })

            .then(data => {
                console.log("data: ", data)
                this.setState({results: data});
            })
    }


    render() {
        console.log("here: ", this.state.results)
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


