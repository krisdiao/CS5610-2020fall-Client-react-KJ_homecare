import {BASE_URL, CONTACT_URL} from "../common/constants"

//const CONTACT_URL = `${BASE_URL}/api/contacts`

//all users
export const createContact = (contact) =>
{
    //debugger
    return fetch(CONTACT_URL, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
            'content-type': 'application/json'
        },
    }).then(response => response.json())
}


//admin
export const findAllContacts = () =>
    fetch(CONTACT_URL, {
        credentials: "include"
    }).then(response => response.json())

//admin
export const downloadContactById = (contactId) =>
    fetch(`${CONTACT_URL}/${contactId}`, {
        method: "GET",
        credentials: "include"
    }).then(response => response.json())
