import React from "react";
import reviewReplyService from "../../services/ReviewReplyService";
import {Card} from 'react-bootstrap';

export default class ReviewReplyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: this.props.review,
            replies:[],
            hasReply: false
        }
    }

    componentDidMount() {
        this.setState({review: this.props.review})
        if(this.state.review !== undefined){
            reviewReplyService.findAllReliesForReview(this.state.review.id)
                .then(replies => {
                    if(replies !== undefined) {
                        console.log("replies: ", replies)

                        this.setState({
                            replies,
                            hasReply: true
                        })
                    }
                })
        }

    }


    render() {
        let {hasReply, replies} = this.state;
        return(
            <div>
            {
                hasReply && replies && replies.map(reply =>
                    <Card.Body>
                        <Card.Text className="green text-left">
                            {reply.content}
                        </Card.Text>
                        <footer className="blockquote-footer">
                            <cite title="Source Title">Replied by {reply.firstName}&nbsp;{reply.lastName} &nbsp; {reply.timeStamp.toString().substr(0,10)}
                            </cite>
                        </footer>
                    </Card.Body>
            )
            }
            </div>
        )
    }
}
