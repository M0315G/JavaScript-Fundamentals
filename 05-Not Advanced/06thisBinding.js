const manish = {
    firstName : "Manish",
    lastName : "Gupta",
    role : "Admin",
    courseCount : 3,
    getInfo : function(){
        console.log(`
             First Name is ${this.firstName}
             Last Name is ${this.lastName}
             His role is ${this.role}
             and he is studying ${this.courseCount} courses`
        );
    },
};

const dj = {
    firstName : "Rock",
    lastName : "DJ",
    role : "Sub-Admin",
    courseCount : 4,
};

// manish.getInfo();
// Using bind 
manish.getInfo.bind(dj)();

// OR you can run it like this
var rn = manish.getInfo.bind(dj);
rn();

// call directly calls the fucntion on the passed reference
manish.getInfo.call(dj);