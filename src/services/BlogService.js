export const writeBlog = (blog) =>
    fetch(`http://localhost:8080/blog`, {
        method: 'POST',
        body: JSON.stringify(blog),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())


const findAllBlogs = () =>
    fetch(`http://localhost:8080/blogs`)
        .then(response => response.json())

//admin
export const deleteBlog = (blogId) =>
    fetch(`http://localhost:8080/blogs/${blogId}`, {
        method: "DELETE",
        credentials: "include"

}).then(response => response.json())

//edit a blog
export const updateBlog = (blogId, blog) =>

    fetch(`http://localhost:8080/blogs/${blogId}`, {
        method: "PUT",
        body: JSON.stringify(blog),
        headers: {
            "content-type": "application/json"
        },
        credentials: "include"
    }).then(response => response.json())
