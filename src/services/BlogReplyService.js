import {BASE_URL, BLOG_URL, USER_URL} from "../common/constants"

//const BLOG_URL = `${BASE_URL}/api/blogs`

//all users
export const findAllReliesForBlog= (blogId) =>
    fetch(`${BLOG_URL}/${blogId}/replies`, {
    })
        .then(response => response.json())

//admin & STAFF
export const createReply = (blogId, reply) =>
    fetch(`${BLOG_URL}/${blogId}/replies`, {
        method: 'POST',
        body: JSON.stringify(reply),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())
        .catch(()=>console.log("error"))

//admin & STAFF
export const deleteReply = (blogId, reply) =>
    fetch(`${BLOG_URL}/${blogId}/replies/${reply.id}`, {
        method: "DELETE",
        credentials: "include"
    }).then(response => response.json())

//admin & STAFF
export const updateReply = (blogId, reply) =>

    fetch(`${BLOG_URL}/${blogId}/replies/${reply.id}`, {
        method: "PUT",
        body: JSON.stringify(reply),
        headers: {
            "content-type": "application/json"
        },
        credentials: "include"
    }).then(response => response.json())

//admin & STAFF
export const findBlogReplyById = (blogId, replyId) =>

    fetch(`${BLOG_URL}/${blogId}/replies/${replyId}`, {
        credentials: "include"
    }).then(response => response.json())

//all
export const findBlogsByBlogsReplied = (userId) =>
    fetch(`${USER_URL}/${userId}/blogs_replied`,{
        credentials: "include"
    })
        .then(response => response.json())

export default {
    findAllReliesForBlog, createReply, deleteReply, updateReply, findBlogsByBlogsReplied, findBlogReplyById
}
