

const uno = () => {
    console.log("I am Uno");
};

const dos = () => {
    setTimeout(()=>{
        console.log("Whoooo");
    }, 3000)
    console.log("I am Dos");
};

const tres = () => {
    console.log("I am Tres");
};

uno();
dos();
tres();
