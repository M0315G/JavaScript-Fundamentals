/* 
Define a function that can answer the role of a user

admin - gets full access
subadmin - gets access to create/delete courses
testprep - gets access to create/delete tests
user - gets access to consume conten

*/

var getUserRole = function (name, role){

    var user = role;

    switch (user) {
        case "admin":
            return `${name} is admin with all access`;
            break;

        case "subadmin":
            return `${name} is subadmin with access to create/delete courses`;
            break;

        case "testprep":
            return `${name} is testprep with access to create/delete tests`;
            break;

        case "user":
            return `${name} is user with access to consume content`;
            break;

        default:
            return `${name} is a trial user`;
            break;
    }
}

console.log(getUserRole("Manish", "testprep"));

var getRole = getUserRole("Sammy", "admin");
console.log(getRole);