var name = "Manish";

console.log("Line number 3", name);

function sayName(){
    
    sayNameTwo();
    function sayNameTwo(){
        var name = "Mr. Blue";
        console.log("Line number 10", name);
    }

    //var name = "Mr. Blue";
    console.log("Line number 14", name);
    
}

sayName();