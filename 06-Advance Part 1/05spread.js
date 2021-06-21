// SPREAD and REST operator

var maxValue = Math.max(7, 8, 2, 6);
console.log(maxValue);

var myObj = {};
Object.assign(myObj, {a:1, b:2, c:3}, {z:9, y:8, x:7});
console.log(myObj);

function sumOne(a, b){
    return a+b;
}

var myA = [5, 4];
console.log(sumOne(myA)); // Doesn't work as it is expecting 2 individual values
console.log(sumOne(...myA)); // Use of SPREAD, it spreads the array into individual values

// Using REST 
// It combines the individual values into an array
function sumTwo(a, b, ...args){
    // console.log(args);
    let multi = a*b;
    let sum = 0;
    for(const arg of args){
        sum = sum + arg;
    }

    return [sum, multi];
}
console.log(sumTwo(2, 3));
console.log(sumTwo(2, 3, 1, 5, 7));