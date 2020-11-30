import {BASE_URL, USER_URL} from "../common/constants"

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
    }).then(response => response.json())}


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

//admin
export const findAllUsers = () =>
    fetch(USER_URL)
        .then(response => response.json())

//admin
export const deleteUser = (userId) =>
    fetch(`${USER_URL}/${userId}`, {
        method: "DELETE"
        }).then(response => response.json())

export default {
    register, login, logout, profile, findAllUsers, deleteUser
}
