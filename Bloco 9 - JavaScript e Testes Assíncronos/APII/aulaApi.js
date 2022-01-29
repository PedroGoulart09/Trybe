const h2 = document.getElementById('jokeContainer');
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };
    fetch(API_URL, myObject)
        .then(response => response.json())
        .then(data => h2.innerHTML = data.joke);
};

window.onload = () => fetchJoke();