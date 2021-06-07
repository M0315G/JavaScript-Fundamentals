/* 
Falsey values in JS
- undefined
- null
- 0
- ''
- NaN
*/

var user = null;

if (user) {
    console.log("Consition is true");   // Doesn't print anything
}

var example = "2";

if (2 == example){
    console.log("Will print this line");
}

if( 2 === example){
    console.log("This log wont be printed");
}