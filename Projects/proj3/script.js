const courses = [
    {
        name: "Complete React JS Course",
        price: "2.3",
    },
    {
        name: "Complete Angular JS Course",
        price: "1.99",
    },
    {
        name: "Complete Node JS Course",
        price: "2.0",
    },
    {
        name: "Complete MERN Course",
        price: "10",
    },
];

function generateLIST(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";

    courses.forEach( course => {

        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        // Create a <span></span> element
        const span = document.createElement("span");
        // Add the class to the element
        span.classList.add("float-right");

        // Get the text and create an Text Node
        const price = document.createTextNode("$ "+course.price);
        // Adding text to the span element
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    } );
}

window.addEventListener("load", generateLIST);


const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
    courses.sort( (a, b) => a.price - b.price );
    generateLIST();
});

const revbutton = document.querySelector(".btn-primary");
revbutton.addEventListener("click", () => {
    courses.sort( (a,b) => b.price - a.price );
    generateLIST();
});
