// Loops

const myStates = [
    "Madhya Pradesh",
    "Gujarat",
    "Assam",
    5672,
    "Bihar",
]

console.log("-------For loop--------");
for(let i = 0; i< myStates.length; i++){
    if (typeof myStates[i] === 'string' ) continue
    console.log(myStates[i]);
}


console.log("-------while loop--------");
let i = 0;
while( i< myStates.length){
    console.log(myStates[i]);
    i++;
}

console.log("-------do while loop--------");
let j = 20;
do {
    console.log(j);
    j++;
}while( j < 10);

console.log("-------For each loop--------");
myStates.forEach( (s) => (console.log(s)) );


console.log("-------For of loop--------");
const names = [
    "Youtube",
    "Facebook",
    "Instagram",
    "Netflix",
    "Amazon",
]
for(const n of names){
    console.log(n);
}

console.log("-------For in loop--------");
const symbols = {
    yt : "Youtube",
    ig : "Instagram",
    fb : "Facebook",
}

for(const n in symbols){
    // console.log(symbols[n]);
    console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}
