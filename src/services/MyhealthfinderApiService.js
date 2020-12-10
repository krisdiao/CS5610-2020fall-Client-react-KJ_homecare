import {TOPIC_URL} from "../common/constants"

//https://health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=551

export const findTopicById = (topicId) =>
    fetch(`${TOPIC_URL}/topicsearch.json?TopicId=${topicId}`, {
        method: "GET",
        credentials: "include"
    })
    .then(response => response.json())
        .catch(()=>console.log("error"))



export default {
    findTopicById
}
