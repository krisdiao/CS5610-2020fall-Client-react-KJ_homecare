export const createContact = (contact) =>
{
    //debugger
    return fetch(`http://localhost:8080/contact`, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
            'content-type': 'application/json'
        },
    }).then(response => response.json())
}


//admin
export const findAllContacts = () =>
    fetch(`http://localhost:8080/contacts`)
        .then(response => response.json())

export const downloadContactById = (contactId) =>
    fetch(`http://localhost:8080/contacts/${contactId}`, {
        method: "GET"
    }).then(response => response.json())
