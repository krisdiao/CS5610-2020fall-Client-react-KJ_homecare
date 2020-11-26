export const contact = (contactperson) =>
    fetch(`http://localhost:8080/contact`, {
        method: 'POST',
        body: JSON.stringify(contactperson),
        headers: {
            'content-type': 'application/json'
        },
    }).then(response => response.json())

//admin
const findAllContacts = () =>
    fetch(`http://localhost:8080/contacts`)
        .then(response => response.json())

export const downloadContactById = (contactId) =>
    fetch(`http://localhost:8080/contacts/${contactId}`, {
        method: "GET"
    }).then(response => response.json())
