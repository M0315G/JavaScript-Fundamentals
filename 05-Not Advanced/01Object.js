var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is : ${this.courseCount}`);
    };
};

User.prototype.getFirstName = () => {
    console.log(`Your First Name is : ${this.firstName}`);
};

var manish = new User("Manish", 2);
console.log(manish);
manish.getCourseCount();

if( manish.hasOwnProperty("firstName") ){
    manish.getFirstName();
}   



var sam = new User("Sam", 3);
console.log(sam);
sam.getCourseCount();
sam.getFirstName();

