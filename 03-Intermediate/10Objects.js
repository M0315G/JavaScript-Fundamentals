var user = {
    firstName : "Manish",
    lastName : "Gupta",
    role : "admin",
    logInCount : 32,
    facebookSignedIn : true,
};

// Accessing the elements of an Object
console.log(user.firstName);
console.log(user["lastName"]);

user.logInCount = 44;
console.log(user.logInCount);

// Printing the whole object
console.log(user);

console.table(user);