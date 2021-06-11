const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");


const center = document.querySelector(".center");


// get the Background color of an element

//console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

var color = getBGColor(pink);

pink.addEventListener('click', () => {
    center.style.background = color;
})

const magicColorChnager = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
    })
}

magicColorChnager(red, getBGColor(red));
magicColorChnager(cyan, getBGColor(cyan));
magicColorChnager(orange, getBGColor(orange));
magicColorChnager(pink, getBGColor(pink));
magicColorChnager(violet, getBGColor(violet));
