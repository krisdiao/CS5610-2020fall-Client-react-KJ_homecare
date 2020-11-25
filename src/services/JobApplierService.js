export const jobApplication = (applier) =>
    fetch(`http://localhost:8080/job`, {
        method: 'POST',
        body: JSON.stringify(applier),
        headers: {
            'content-type': 'application/json'
        },
    }).then(response => response.json())
