fetch('https://api.chucknorris.io/jokes/random')
.then((response) => {
    return response.json();
})
.then((data) => {
    var joke = data.values;
    console.log("Joke: ", joke);
})
.catch();