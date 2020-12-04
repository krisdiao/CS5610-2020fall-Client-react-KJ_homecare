
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
 var getContactReport = function(json, isOne) {
     console.log(json)

     const data = isOne
         ?
             {
                 firstName: json.firstName,
                 lastName : json.lastName,
                 email: json.email,
                 phoneNumber: json.phoneNumber,
                 zip: json.zip
             }
         :
             json.map(row => ({
                 firstName: row.firstName,
                 lastName: row.lastName,
                 email: row.email,
                 phoneNumber: row.phoneNumber,
                 zip: row.zip,
             }));

     console.log("data: ", data)

     const csvData = isOne ? oneObjectToCsv(data) : objectToCsv(data);
     console.log("csvData: ", csvData)
     downloadCSV(csvData, 'contacts-download.csv');

 }
 exports.getContactReport = getContactReport;


 var getJobApplicantsReport = function(json, isOne) {
     console.log(json)

     const data = isOne
         ?
         {
             firstName: json.firstName,
             lastName : json.lastName,
             email: json.email,
             phoneNumber: json.phoneNumber,
             jobPosition: json.jobPosition,
             add1: json.add1,
             add2: json.add2,
             city: json.city,
             state: json.state,
             zip: json.zip
         }
         :
         json.map(row => ({
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

     const csvData = isOne ? oneObjectToCsv(data) : objectToCsv(data);
     console.log("csvData: ", csvData)
     downloadCSV(csvData, 'Job-Applicants-download.csv');

 }
 exports.getJobApplicantsReport = getJobApplicantsReport;


 var getUsersRegistrationReport = function(json, isOne) {
     console.log(json)

     const data = isOne
         ?
         {
             firstName: json.firstName,
             lastName : json.lastName,
             email: json.email,
             password: json.password,
             phoneNumber: json.phoneNumber,
             add1: json.add1,
             add2: json.add2,
             city: json.city,
             state: json.state,
             zip: json.zip,
             role: json.role
         }
         :
         json.map(row => ({
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

     console.log("one data: ", data)

     const csvData = isOne ? oneObjectToCsv(data) : objectToCsv(data);
     console.log("csvData: ", csvData)
     downloadCSV(csvData, 'Users-Registered-download.csv');

 }
 exports.getUsersRegistrationReport = getUsersRegistrationReport;


 const oneObjectToCsv = function (data) {

     const csvRows = [];
     console.log("data b4: ", data)

     //get the headers
     const headers = Object.keys(data);
     csvRows.push(headers.join(','));
     console.log("csvRows: ", csvRows)

     //loop over the 1st rows
     const values = headers.map(header => {
         const escaped = ('' + data[header]).replace(/"/g, '\\"');
         return `"${escaped}"`;
     });
     console.log("values: ", values.join(','));
     //form escaped comma separated values
     csvRows.push(values.join(','));

     console.log("csvRows: ", csvRows)

     return csvRows.join('\n');
 };


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


 // var getContactReport = function(json) {
 //     console.log(json)
 //
 //     const data = json.map(row => ({
 //         firstName: row.firstName,
 //         lastName: row.lastName,
 //         email: row.email,
 //         phoneNumber: row.phoneNumber,
 //         zip: row.zip,
 //     }));
 //     console.log("data: ", data)
 //
 //     const csvData = objectToCsv(data);
 //     console.log("csvData: ", csvData)
 //     downloadCSV(csvData, 'contacts-download.csv');
 //
 // }
 // exports.getContactReport = getContactReport;
 // var getOneContactReport = function(json) {
 //     console.log(json)
 //
 //     const data = {
 //         firstName: json.firstName,
 //         lastName : json.lastName,
 //         email: json.email,
 //         phoneNumber: json.phoneNumber,
 //         zip: json.zip
 //     };
 //
 //     console.log("data: ", data)
 //
 //     const csvData = oneObjectToCsv(data);
 //     console.log("csvData: ", csvData)
 //     downloadCSV(csvData, 'contact-download.csv');
 //
 // }
 // exports.getOneContactReport = getOneContactReport;

 // var getUsersRegistrationReport = function(json) {
 //     console.log(json)
 //
 //     const data = json.map(row => ({
 //         firstName: row.firstName,
 //         lastName: row.lastName,
 //         email: row.email,
 //         password: row.password,
 //         phoneNumber: row.phoneNumber,
 //         add1: row.add1,
 //         add2: row.add2,
 //         city: row.city,
 //         state: row.state,
 //         zip: row.zip,
 //         role: row.role,
 //     }));
 //     console.log("one data: ", data)
 //
 //     const csvData = objectToCsv(data);
 //     console.log("csvData: ", csvData)
 //     downloadCSV(csvData, 'Users-Registered-download.csv');
 //
 // }
 // exports.getUsersRegistrationReport = getUsersRegistrationReport;

 // var getJobApplicantsReport = function(json) {
 //     console.log(json)
 //
 //     const data = json.map(row => ({
 //         firstName: row.firstName,
 //         lastName: row.lastName,
 //         email: row.email,
 //         phoneNumber: row.phoneNumber,
 //         jobPosition: row.jobPosition,
 //         add1: row.add1,
 //         add2: row.add2,
 //         city: row.city,
 //         state: row.state,
 //         zip: row.zip,
 //     }));
 //     console.log("data: ", data)
 //
 //     const csvData = objectToCsv(data);
 //     console.log("csvData: ", csvData)
 //     downloadCSV(csvData, 'Job-Applicants-download.csv');
 //
 // }
 // exports.getJobApplicantsReport = getJobApplicantsReport;
