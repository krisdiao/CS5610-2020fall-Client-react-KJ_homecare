import {BASE_URL, BLOG_URL, USER_URL} from "../common/constants"
import {findAllStaff} from "./UserService";

//const BLOG_URL = `${BASE_URL}/api/blogs`

//all users
export const findAllBlogs = () =>
    fetch(BLOG_URL)
        .then(response => response.json())

//admin or staff
export const createBlog = (blog) =>
    fetch(BLOG_URL, {
        method: 'POST',
        body: JSON.stringify(blog),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())

//admin or staff
export const deleteBlog = (blogId) =>
    fetch(`${BLOG_URL}/${blogId}`, {
        method: "DELETE",
        credentials: "include"
}).then(response => response.json())

//admin or staff to edit a blog
export const updateBlog = (blogId, blog) =>

    fetch(`${BLOG_URL}/${blogId}`, {
        method: "PUT",
        body: JSON.stringify(blog),
        headers: {
            "content-type": "application/json"
        },
        credentials: "include"
    }).then(response => response.json())

//login user
export const findBlogsForUser = (userId) =>
    //    @GetMapping("/api/users/{userId}/blogs")
    fetch(`${USER_URL}/${userId}/blogs`, {
        credentials: "include"
    }).then(response => response.json())

//all
export const findBlogsByBlogsLiked = (userId) =>
    fetch(`${USER_URL}/${userId}/blogsliked`,{
        credentials: "include"
    })
        .then(response => response.json())


export const findBlogById = (blogId) =>
    fetch(`${BLOG_URL}/${blogId}`)
        .then(response => response.json())

//all
export const createBlogsLiked = (userId, blog) =>
    fetch(`${USER_URL}/${userId}/blogsliked`,{
        method: 'POST',
        body: JSON.stringify(blog),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    })
        .then(response => response.json())



export default {
    findAllBlogs, createBlog, deleteBlog, updateBlog, findBlogsForUser,findBlogsByBlogsLiked, createBlogsLiked, findBlogById
}
