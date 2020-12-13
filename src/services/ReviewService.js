import {BASE_URL, REVIEW_URL, USER_URL} from "../common/constants"

//const REVIEW_URL = `${BASE_URL}/api/reviews`

//all users
export const findAllReviews = () =>
    fetch(REVIEW_URL,{
        credentials: "include"
    })
        .then(response => response.json())

//login-user
export const createReview = (review) =>
    fetch(REVIEW_URL, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())
        .catch(()=>console.log("error"))

//admin
export const deleteReview = (reviewId) =>
    fetch(`${REVIEW_URL}/${reviewId}`, {
        method: "DELETE",
        credentials: "include"
    }).then(response => response.json())

//admin or staff to update
export const updateReview = (reviewId, review) =>

    fetch(`${REVIEW_URL}/${reviewId}`, {
        method: "PUT",
        body: JSON.stringify(review),
        headers: {
            "content-type": "application/json"
        },
        credentials: "include"
    }).then(response => response.json())

//admin or staff to reply a review, review.reply is the id from backend
export const replyReview = (reviewId, reply) =>

    fetch(`${REVIEW_URL}/${reviewId}/reply`, {
        method: "PUT",
        body: JSON.stringify(reply),
        headers: {
            "content-type": "application/json"
        },
        credentials: "include"
    }).then(response => response.json())

//login user
export const findReviewsForUser = (userId) =>
    //    @GetMapping("/api/users/{userId}/reviews")
    fetch(`${USER_URL}/${userId}/reviews`, {
        credentials: "include"
    }).then(response => response.json())

export default {
    findAllReviews, createReview, deleteReview, updateReview, findReviewsForUser
}
