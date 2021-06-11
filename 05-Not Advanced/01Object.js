var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is : ${this.courseCount}`);
    };
};

var manish = new User("Manish", 2);
console.log(manish);

var sam = new User("Sam", 3);
console.log(sam);

