import {BASE_URL, REVIEW_URL, USER_URL} from "../common/constants"

//const REVIEW_URL = `${BASE_URL}/api/reviews`

//all users
export const findAllReliesForReview = (reviewId) =>
    fetch(`${REVIEW_URL}/${reviewId}/replies`, {
        credentials: "include"
    })
        .then(response => response.json())

//ladmin
export const createReply = (reviewId, reply) =>
    fetch(`${REVIEW_URL}/${reviewId}/replies`, {
        method: 'POST',
        body: JSON.stringify(reply),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())
        .catch(()=>console.log("error"))

//admin
export const deleteReply = (reviewId, reply) =>
    fetch(`${REVIEW_URL}/${reviewId}/replies/${reply.id}`, {
        method: "DELETE",
        credentials: "include"
    }).then(response => response.json())

//admin
export const updateReply = (reviewId, reply) =>

    fetch(`${REVIEW_URL}/${reviewId}/replies/${reply.id}`, {
        method: "PUT",
        body: JSON.stringify(reply),
        headers: {
            "content-type": "application/json"
        },
        credentials: "include"
    }).then(response => response.json())

//admin
export const findReviewReplyById = (reviewId, replyId) =>

    fetch(`${REVIEW_URL}/${reviewId}/replies/${replyId}`, {
        credentials: "include"
    }).then(response => response.json())


export default {
    findAllReliesForReview, createReply, deleteReply, updateReply, findReviewReplyById
}
