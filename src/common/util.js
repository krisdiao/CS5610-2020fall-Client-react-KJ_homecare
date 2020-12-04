
 var leadToCorrectLoginUserPage = function(currentUser, history) {
    console.log(currentUser.role)
     console.log(history)

     switch (currentUser.role) {
         case "ADMIN":
             return history.push('/admin')
         case "STAFF":
             return history.push('/staff')
         case "LOGIN_USER":
             return history.push('/profile')
         default:
             return history.push('/')
     } }

 exports.leadToCorrectLoginUserPage = leadToCorrectLoginUserPage;


 //https://www.youtube.com/watch?v=eicLNabvZN8

 var getContactReport = function(json) {
     console.log(json)

     const data = json.map(row => ({
         firstName: row.firstName,
         lastName: row.lastName,
         email: row.email,
         phoneNumber: row.phoneNumber,
         zip: row.zip,
     }));
     console.log("data: ", data)

     const csvData = objectToCsv(data);
     console.log("csvData: ", csvData)
     downloadCSV(csvData, 'contacts-download.csv');

 }
 exports.getContactReport = getContactReport;


 var getJobApplicantsReport = function(json) {
     console.log(json)

     const data = json.map(row => ({
         firstName: row.firstName,
         lastName: row.lastName,
         email: row.email,
         phoneNumber: row.phoneNumber,
         jobPosition: row.jobPosition,
         add1: row.add1,
         add2: row.add2,
         city: row.city,
         state: row.state,
         zip: row.zip,
     }));
     console.log("data: ", data)

     const csvData = objectToCsv(data);
     console.log("csvData: ", csvData)
     downloadCSV(csvData, 'Job-Applicants-download.csv');

 }
 exports.getJobApplicantsReport = getJobApplicantsReport;


 var getUsersRegistrationReport = function(json) {
     console.log(json)

     const data = json.map(row => ({
         firstName: row.firstName,
         lastName: row.lastName,
         email: row.email,
         password: row.password,
         phoneNumber: row.phoneNumber,
         add1: row.add1,
         add2: row.add2,
         city: row.city,
         state: row.state,
         zip: row.zip,
         role: row.role,
     }));
     console.log("data: ", data)

     const csvData = objectToCsv(data);
     console.log("csvData: ", csvData)
     downloadCSV(csvData, 'Users-Registered-download.csv');

 }
 exports.getUsersRegistrationReport = getUsersRegistrationReport;



 const objectToCsv = function (data) {

     const csvRows = [];

     //get the headers
     const headers = Object.keys(data[0]);
     csvRows.push(headers.join(','));
     console.log("csvRows: ", csvRows)

     //loop over the rows

     for (const row of data) {
         const values = headers.map(header => {
             const escaped = ('' + row[header]).replace(/"/g, '\\"');
             return `"${escaped}"`;
         });
         console.log("values: ", values.join(','));
         //form escaped comma separated values
         csvRows.push(values.join(','));
     }
     console.log("csvRows: ", csvRows)

    return csvRows.join('\n');
 };
 
 const downloadCSV = function (csvData, fileName) {
    const  blob = new Blob([csvData], {type: 'text/csv'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', fileName);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
 };

