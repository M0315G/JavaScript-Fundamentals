function init(){
    var firstName = "Manish";
    function sayFirstName(){
        console.log(firstName);  // If we use this.firstName, it gives undefined
    };
    return sayFirstName;
};

var func = init();
func();


function doAddition(x){
    return function(y){
        return x + y;
    };
};

var add = doAddition(4);
console.log(add(5));

console.log(doAddition(5)(10));