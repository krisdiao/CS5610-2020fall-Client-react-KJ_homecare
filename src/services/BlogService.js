import {BASE_URL, BLOG_URL} from "../common/constants"

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

export default {
    findAllBlogs, createBlog, deleteBlog, updateBlog
}
