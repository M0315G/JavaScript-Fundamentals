// console.log(name);

let name  = "Manish";

if(true){
    var lastName = "Gupta";
}
// This still prints "Gupta", whereas it should not be accessible
// outside the if scope
console.log(lastName);

// Thus, we use let keyword instead of var to have the same scope as
// seen in other programming languages

if(true){
    let firstName = "Manish";
}
// Now this will throw an error
console.log(firstName);