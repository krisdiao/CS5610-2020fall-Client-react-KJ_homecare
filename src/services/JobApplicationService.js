import {BASE_URL, APPLICATION_URL} from "../common/constants"

//const APPLICATION_URL = `${BASE_URL}/api/job-applications`

//all users
export const createJobApplication = (application) =>
{
    debugger
    return fetch(APPLICATION_URL, {
        method: 'POST',
        body: JSON.stringify(application),
        headers: {
            'content-type': 'application/json'
        },
    }).then(response => response.json())
}



//admin
export const findAllApplicationsSubmitted = () =>
    fetch(`APPLICATION_URL`, {
        credentials: "include"
    }).then(response => response.json())

//admin
export const downloadApplicationById = (applicationId) =>
    fetch(`${APPLICATION_URL}/${applicationId}`, {
        method: "GET",
        credentials: "include"
    }).then(response => response.json())

export default {
    createJobApplication, findAllApplicationsSubmitted, downloadApplicationById
}
