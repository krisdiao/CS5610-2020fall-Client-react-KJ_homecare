export const jobApplication = (applier) =>
    fetch(`http://localhost:8080/job-application`, {
        method: 'POST',
        body: JSON.stringify(applier),
        headers: {
            'content-type': 'application/json'
        },
    }).then(response => response.json())


//admin
const findAllApplications = () =>
    fetch(`http://localhost:8080/applications`)
        .then(response => response.json())

export const downloadApplicationById = (applicationId) =>
    fetch(`http://localhost:8080/applications/${applicationId}`, {
        method: "GET"
    }).then(response => response.json())
