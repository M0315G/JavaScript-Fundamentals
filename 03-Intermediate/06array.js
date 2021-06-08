var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Rajasthan", "Delhi", "Maharastra", "Assam");

console.log(states[0]);

console.log(states.length);

states[0] = "Madhya Pradesh";
console.log(states);

var user = ["Manish", "manish@gmail.com", 3, 34, true];
console.log(user);

// Pop an element from end of the array
user.pop();
console.log(user);
user.pop();
console.log(user);

// Adding a value in front of the array
user.unshift("NEW VALUE");
console.log(user);

// Shifting all the values left side. It removes the first value in the array
user.shift();
console.log(user);

// Finding an element of array
// Returns -1 if not found
console.log(user.indexOf(3));

