// Show user a signout button if he is authenticated,
// other wise show him option to Login/Signup

var authenticated = true;

// if (authenticated){
//     console.log("Show Signout Button!!");
// }else{
//     console.log("Show Login/Signup Button!!");
// }

authenticated ? console.log("SignOut Button") : console.log("LOGIN")