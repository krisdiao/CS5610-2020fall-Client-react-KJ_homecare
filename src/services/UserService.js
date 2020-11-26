
export const logout = () =>
    fetch(`http://localhost:8080/logout`, {
        method: 'POST',
        credentials: "include"
    })

export const profile = () =>
    fetch(`http://localhost:8080/profile`, {
        method: 'POST',
        credentials: "include"
    }).then(reseponse => reseponse.json())

export const register = (user) =>
    fetch(`http://localhost:8080/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())


export const login = (user) =>
    fetch(`http://localhost:8080/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())


//admin
const findAllUsers = () =>
    fetch(`http://localhost:8080/users`)
        .then(response => response.json())

export const deleteUser = (userId) =>
    fetch(`http://localhost:8080/users/${userId}`, {
        method: "DELETE"
        }).then(response => response.json())
