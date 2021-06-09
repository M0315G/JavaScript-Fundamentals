// Another type of fucntion declaration using => "arrow"
var isEven = (element) => {
    // if(element % 2 == 0){
    //     return true;
    // }
    // return false;

    return element % 2 === 0;
}


// console.log(isEven(3));

var result = [2, 3, 6, 8].every(isEven);
console.log(result);

// Writing callbacks
var result1 = [2, 3, 6, 8].every((e) => {
    return e%2 === 0;
})
console.log(result1);

// OR you can write it as

var result2 = [2, 3, 6, 8].every( (e) => (e%2 === 0) );
console.log(result2);
