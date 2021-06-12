function sayHello(){
    console.log("I say Hello");
    console.log("I again say Hello");
}

sayHello();

// Self Executing Anonymous Functions
// Self Executing: It executes itself (no one calls them)
// Anonymous : No name
// Example

(function (){
    console.log("I am executing by myself");
    console.log("No, I don't have a name");
})();