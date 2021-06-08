sayHello();   // This works in JS

function sayHello(){

    console.log("Hello");
}

if( 2 === 2){
    console.log("This is true");
}

var myName = "Manish";
if (myName === myName){
    console.log("ANother true text");
}

if (myName === window.myName){     // Throws an error
    console.log("Yet another true text");
}

