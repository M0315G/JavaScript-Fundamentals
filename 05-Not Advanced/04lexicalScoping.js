function init(){
    var firstName = "Manish";
    function sayFirstName(){
        console.log(firstName);  // If we use this.firstName, it gives undefined
    };
    sayFirstName();
};

init();
// console.log(firstName);