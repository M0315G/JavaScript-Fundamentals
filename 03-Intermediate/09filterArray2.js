// Slicing
var users = ["Ted", "Aaron", "Jim", "Pam", "Michael", "Sam"]

console.log(users.slice(2, 5));

// sliced off
// drops Ted
console.log(users.slice(1));


// Splicing
// It removes 2 elements from Index 1 and places "HI" instead of them
users.splice(1, 2, "HI");
console.log(users);

// It removes 3 elements from Index 1 and places "HI" instead of them
users.splice(1, 3, "HI");
console.log(users);

// It removes 2 elements from Index 1 and places "HI" and "BYE" instead of them
users.splice(1, 2, "HI", "BYE");
console.log(users);



