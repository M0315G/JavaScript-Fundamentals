var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "Dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

console.log(myMap);

// Access all the keys of the map
for(let key of myMap.keys()){
    console.log(`Key is ${key}`);
}

// Access all the values of the map
for(let value of myMap.values()){
    console.log(`Value is ${value}`);
}

// Accessing both keys and values
for(let [key, value] of myMap){
    console.log(`Key is : ${key} and Value is ${value}`);
}

myMap.forEach( (key) => console.log(`${key}`) );