var user = {
    firstName : "Manish",
    lastName : "Gupta",
    role : "admin",
    logInCount : 32,
    facebookSignedIn : true,
    courseList : [],

    // Defining a method inside an object
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    
    getCourseCount : function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },

    getInfo : function () {
        return `
        First Name : ${this.firstName}
        Last Name :  ${this.lastName}
        Role : ${this.role}
        Course List : ${this.courseList} `
    },
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS Course");
user.buyCourse("Angular Course");
console.log(user.getCourseCount());
console.log(user.getInfo());


