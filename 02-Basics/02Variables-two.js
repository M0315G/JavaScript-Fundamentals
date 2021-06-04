const uid = "abc123";  // Cannot modify the value once assigned

var firstName = "Manish";
var lastName = "Gupta";
var email = "manish15gupta03@gmail.com"
var password  = "123456"
var confirmPassword = "123456"
var courseCount  = 0;
var isLoggedInFromGoogle = false;
var isLoggedInFromFacebook = false;

// fullName = prompt("Enter your name");

console.log(uid);
console.log("Full Name is: " + fullName);
console.log(email);

console.log(`
    With Unique ID: ${uid}
    User is: ${firstName} + ${lastName}
    and his email is: ${email}
    and uses the password: ${password}
    Logged In from Google: ${isLoggedInFromGoogle}
    Logged In from Facebook: ${isLoggedInFromFacebook}
`);


