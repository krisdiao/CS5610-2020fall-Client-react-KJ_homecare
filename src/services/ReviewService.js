export const writeReview = (review) =>
    fetch(`http://localhost:8080/review`, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())


const findAllReviews = () =>
    fetch(`http://localhost:8080/reviews`)
        .then(response => response.json())

//admin
export const deleteReview = (reviewId) =>
    fetch(`http://localhost:8080/reviews/${reviewId}`, {
        method: "DELETE",
        credentials: "include"
    }).then(response => response.json())

//to reply a review, review.reply is the id from backend
export const updateReview = (reviewId, review) =>

    fetch(`http://localhost:8080/reviews/${reviewId}`, {
        method: "PUT",
        body: JSON.stringify(review),
        headers: {
            "content-type": "application/json"
        },
        credentials: "include"
    }).then(response => response.json())
