export const jobapplication = (applier) =>
    fetch(`http://localhost:8080/jobapplication`, {
        method: 'POST',
        body: JSON.stringify(applier),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())
