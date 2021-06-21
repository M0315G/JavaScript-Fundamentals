const user = ["Manish", 3, "admin"];

// Destructuring the data
// var role = user[2];
// var name = user[0];

var [name, courseCount, role] = user;

console.log(role);

const MyUser = {
    fName : "Manish Gupta",
    courseCt : 5,
    roleUser : "admin",
};

console.log(MyUser.courseCt);

// Destructure the Object
const { fName, courseCt, roleUser } = MyUser;
console.log(fName);