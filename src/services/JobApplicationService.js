import {BASE_URL, APPLICATION_URL} from "../common/constants"

//const APPLICATION_URL = `${BASE_URL}/api/job-applications`

//all users
export const createJobApplication = (application) =>
{
    //debugger
    return fetch(APPLICATION_URL, {
        method: 'POST',
        body: JSON.stringify(application),
        headers: {
            'content-type': 'application/json'
        },
    }).then(response => response.json())
        .catch(()=>console.log("error"))
}



//admin
export const findAllJobApplications = () =>
{
    //debugger
    return fetch(APPLICATION_URL, {
        method: 'GET',
        credentials: "include"
    }).then(response => response.json())
        .catch(()=>console.log("error"))
}


//admin
export const findApplicationById = (applicationId) =>
    fetch(`${APPLICATION_URL}/${applicationId}`, {
        method: "GET",
        credentials: "include"
    }).then(response => response.json())
        .catch(()=>console.log("error"))

//admin
export const deleteApplication = (applicationId) =>
    fetch(`${APPLICATION_URL}/${applicationId}`, {
        method: "DELETE",
        credentials: "include"
    }).then(response => response.json())
        .catch(()=>console.log("error"))

export default {
    createJobApplication, findAllJobApplications, findApplicationById, deleteApplication
}
