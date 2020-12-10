import React from 'react';
// import myhealthfinderApiService from "../../services/MyhealthfinderApiService"
import {Container,Row,Col} from 'react-bootstrap';
import ShowHideComponent from "./ShowHideComponent"


class ResultItemDetailsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.resultId,
            result: [],
            resource: []
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.resultId)
        // myhealthfinderApiService.findTopicById(this.props.match.params.resultId)
        //     .then(result => this.setState({result: result}))

        var url = 'https://health.gov/myhealthfinder/api/v3/topicsearch.json';
        url += '?TopicId=' + this.props.match.params.resultId;

        if(this.props.match.params.resultId) {
            this.fetchResult(url);
        }
    }

    fetchResult(url) {
        fetch(url)
            .then(response =>
            {
                // console.log("response： ", response)
                return response.json()
            })

            .then(data => {
                // console.log("data: ", data)
                this.setState({result: data});
            })
    }


    render() {
        console.log("result: ", this.state.result.Result)

        return (
            <div>
                <Container>
                    <>
                        <Row>
                        <Col sm={2}>
                            <h3>Title: </h3>
                        </Col>
                        <Col sm={10}>
                            <p>
                                <h3>{this.state.result.Result && this.state.result.Result.Resources.Resource[0].Title}</h3>
                            </p>
                        </Col>
                        </Row>
                        <Row>
                            <Col sm={2}>
                                <h4>Catogory: </h4>
                            </Col>
                            <Col sm={10}>
                                <p>
                                    <h4>{this.state.result.Result && this.state.result.Result.Resources.Resource[0].Categories}</h4>
                                </p>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col sm={6}>
                                {
                                    this.state.result.Result && <ShowHideComponent sections={this.state.result.Result.Resources.Resource[0].Sections}/>
                                }
                            </Col>
                            <Col sm={6}>
                                <img src={this.state.result.Result && this.state.result.Result.Resources.Resource[0].ImageUrl} alt="Card image cap" height="500" width="720"/>
                            </Col>
                        </Row>
                        <br/>
                    </>
                    <br/>
                    <a className="orange" href={"https://health.gov/myhealthfinder"}><h3>Resource Direct Link from health.gov</h3></a>
                    <br/>
                    <ul className="list-group list-group-hover">
                        <h1>Related Articles</h1>
                        {
                            this.state.result.Result && this.state.result.Result.Resources.Resource[0].RelatedItems.RelatedItem.map(item =>
                                <a className="orange" key={item.Id} href={item.Url}><h3>{item.Title}</h3></a>
                            )}
                    </ul>
                </Container>
                <br/>
            </div>
        )}}
export default ResultItemDetailsComponent;
