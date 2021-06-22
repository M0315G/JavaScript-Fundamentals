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

    // Makes the method private and we cannot access it
    static login(){
        return "You are logged in!";
    }
}

class SubAdmin extends User {
    constructor(name, email){
        super(name, email);
    }

    getAdminInfo(){
        return "I am subAdmin";
    }
}

const tom = new SubAdmin("Tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());
