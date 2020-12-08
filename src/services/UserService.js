import {BASE_URL, REVIEW_URL, USER_URL} from "../common/constants"

//const USER_URL = `${BASE_URL}/api/users`

//all user
export const register = (user) =>
{
    //debugger
    return fetch(`${BASE_URL}/api/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())
        .catch(()=>console.log("error"))
}

//all user to login user
export const login = (user) => {
    //debugger
    return fetch(`${BASE_URL}/api/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())
        .catch(()=>console.log("error"))
}


//login-user
export const logout = () =>
    fetch(`${BASE_URL}/api/logout`, {
        method: 'POST',
        credentials: "include"
    })

//login-user
export const profile = () =>
    fetch(`${BASE_URL}/api/profile`, {
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())
        .catch(()=>console.log("error"))

//login-user
export const updateUser = (userId, user) =>

    fetch(`${USER_URL}/${userId}`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            "content-type": "application/json"
        },
        credentials: "include"
    }).then(response => response.json())

//admin
export const findAllUsers = () =>
    fetch(USER_URL, {
        credentials: "include"
        })
        .then(response => response.json())
        .catch(()=>console.log("error"))

//admin
export const deleteUser = (userId) =>
{
    //debugger
    return   fetch(`${USER_URL}/${userId}`, {
        method: "DELETE",
        credentials: "include"
    }).then(response => response.json())
        .catch(()=>console.log("error"))
}

// for credential purposes
export const findUserById = (userId) =>
    fetch(`${USER_URL}/${userId}`)
        .then(response => response.json())



export default {
    register, login, logout, profile, findAllUsers, deleteUser, findUserById, updateUser
}
