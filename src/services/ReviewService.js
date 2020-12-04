import {BASE_URL, REVIEW_URL} from "../common/constants"

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

//admin or staff to reply a review, review.reply is the id from backend
export const updateReview = (reviewId, review) =>

    fetch(`${REVIEW_URL}/${reviewId}`, {
        method: "PUT",
        body: JSON.stringify(review),
        headers: {
            "content-type": "application/json"
        },
        credentials: "include"
    }).then(response => response.json())

export default {
    findAllReviews, createReview, deleteReview, updateReview
}
