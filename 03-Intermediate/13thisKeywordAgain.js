// for all regular function calls, `this` keyword points to the window objects or gloabal objects

console.log(this);

var user = {
    firstName : "Manish",
    courseCoutn : 4,
    getCourseCount : function(){
        console.log("Line 9 ", this);
        function sayHello(){
            console.log("Hello");
            console.log("Line 12 ", this);  // here it points to the global object as it is a regular function call
        }
        sayHello();
    }
};
user.getCourseCount();


sayHello();
function sayHello(){
    console.log("Line 18 ", this);
}