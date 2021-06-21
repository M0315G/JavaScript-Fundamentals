// Classes in JS

class User{

    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    #courseList = [];
    getInfo(){
        return {name: this.name, email:this.email};
    }

    enrollCourse(name){
        this.#courseList.push(name);
    }

    getCourseList(){
        return this.#courseList;
    }
}

// One way to initialize a class
// let manish = new User("Manish", "xyz@gmail.com")

module.exports = User;

const rock = new User("rock", "rock@rock.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");
console.log(rock.getCourseList());
// Adding # before the variable makes it private and we cannot access it directly
console.log(rock.courseList);