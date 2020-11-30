
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
