const User = require("./06classesInJS.js");

const manish = new User("Manish", "xyz@gmail.com");
console.log(manish.getInfo());
manish.enrollCourse("React Bootcamp");
manish.enrollCourse("Angular Bootcamp");
console.log(manish.getCourseList());

let courses = manish.getCourseList();
courses.forEach(c => console.log(c));
