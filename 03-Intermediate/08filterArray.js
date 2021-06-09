var testArray = [2, 6, 4, 9, 10, 34];

console.log(testArray.fill('h'));


var testArray = [2, 6, 4, 9, 10, 34];

console.log(testArray.fill('h', 3));


var testArray = [2, 6, 4, 9, 10, 34];

console.log(testArray.fill('h', 2, 5));


const myNumber = [23, 24, 67, 23, 12, 56, 98];

// Gives an array with elements except number 98
const result = myNumber.filter( (num) => (num != 98) )
console.log(result);