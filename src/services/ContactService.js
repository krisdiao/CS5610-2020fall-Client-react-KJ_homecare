import {BASE_URL, BLOG_URL, CONTACT_URL} from "../common/constants"

//const CONTACT_URL = `${BASE_URL}/api/contacts`


// export const createContact = (contact) =>
//     fetch(CONTACT_URL, {
//         method: 'POST',
//         body: JSON.stringify(contact),
//         headers: {
//             'content-type': 'application/json'
//         }
//     }).then(response => response.json())

//all users
export const createContact = async (contact) =>
{
    const response = await fetch(CONTACT_URL, {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
            'content-type': 'application/json'
        }
    })
    //debugger
    return await response.json()
}

//admin
export const findAllContacts = () =>
    fetch(CONTACT_URL, {
        // credentials: "include"
    }).then(response => response.json())

export const deleteContact = (contactId) =>
    fetch(`${CONTACT_URL}/${contactId}`, {
        method: "DELETE",
        credentials: "include"
    }).then(response => response.json())

//admin
export const downloadContactById = (contactId) =>
    fetch(`${CONTACT_URL}/${contactId}`, {
        method: "GET",
        credentials: "include"
    }).then(response => response.json())

export default {
    createContact, findAllContacts, downloadContactById, deleteContact
}
