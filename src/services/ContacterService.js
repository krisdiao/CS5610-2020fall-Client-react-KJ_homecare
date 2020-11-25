export const contact = (contactperson) =>
    fetch(`http://localhost:8080/contact`, {
        method: 'POST',
        body: JSON.stringify(contactperson),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())