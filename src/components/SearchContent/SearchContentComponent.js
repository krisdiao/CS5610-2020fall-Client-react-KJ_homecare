import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form,Button,FormControl, Row, Col} from 'react-bootstrap';
import SearchResultComponent from "./SearchResultComponent"

class SearchContentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: '',
            dob: '',
            gender: '',
            keyword: '',
            results: [],
        };

    }

    componentDidMount() {
        console.log(this.props.match.params)
        // this.setState({
        //     age: this.props.match.params.age,
        //     gender: this.props.match.params.gender
        // })
        if(this.props.match.params.age && this.props.match.params.title) {
            this.fetchResult();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // if(prevProps.match.params.age !== this.props.match.params.age
        //     && prevProps.match.params.gender !== this.props.match.params.gender
        // ) {
        //     this.setState({
        //         age: this.props.match.params.age,
        //         gender: this.props.match.params.gender
        //     })
        // }

        if(this.props.match.params.age && this.props.match.params.title) {
            this.fetchResult();
        }
    }


    onDatePicked(event) {
        var bod = event.target.value;

        const age = this.getAge(bod);

        this.setState({age: age});

        console.log(this.state.age)
    }

    getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    chooseGender = (e) => {
        console.log(e.target.value)
        this.setState({
            gender: e.target.value
        })
    }

    handleSubmit() {
        if(this.state.age !=="" && this.state.gender !== ""){
            this.searchByAgeGender(this.state.age, this.state.gender);
        } else if(this.state.age !==""){
            alert("Please tell us your Gender before searching!");
        }else if(this.state.gender !==""){
            alert("Please tell us your DOB before searching!");
        }else {
            alert("Please tell us your DOB & Gender before searching!");
        }
    }

    searchByAgeGender(age, gender) {
        this.props.history.push(`/search/?age=${age}&sex=${gender}`);
        this.fetchResult(age, gender);
    }

    fetchResult(age, gender) {

        //https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?age=55&sex=male
        var url = 'https://health.gov/myhealthfinder/api/v3/myhealthfinder.json';
        url += '?age=' + age;
        url += '&sex=' + gender;

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
        console.log("state: ", this.state)
        return (
            <div className="container">
                <h3>Please enter your <strong>Date Of Birth</strong> & <strong>Gender</strong> to begin searching for health advice here: </h3>
                <br/>
                <Form>
                    <Form.Row className="align-items-center">
                        <Col sm={4}>
                            <FormControl
                                type="date"
                                name="dob"
                                placeholder="Search"
                                className="mr-sm-2"
                                onChange={(e) => this.onDatePicked(e)}
                            />
                        </Col>
                        <Col sm={4} className="my-1">
                            <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                                Preference
                            </Form.Label>
                            <Form.Control
                                as="select"
                                defaultValue="Choose..."
                                className="mr-sm-2"
                                id="inlineFormCustomSelect"
                                value={this.state.gender}
                                onChange={(e) => this.chooseGender(e)}
                            >
                                <option value>Choose your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Form.Control>
                        </Col>
                        <Col sm={2}>
                            <Button className="orangeBg btn-success"
                                type = "button"
                                onClick={() => this.handleSubmit()}>
                                Search
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>

                <SearchResultComponent results={this.state.results}/>
            </div>
        );
    }
}

export default SearchContentComponent;


