const fetch = require('node-fetch');
const api = async () => {

    const url = 'https://api.coincap.io/v2/assets';

    const coins = await fetch(url)
        .then((data) => data.json())
        .then((result) => result.data)

        .catch(error => console.log(error))

    return coins;
}


console.log(api())

const setCoins = async () => {
    const coins = await api();

    const coinsList = document.getElementById('list-crypto');

    coins.forEach((coin) => {
        const newLi = document.createElement('li');
        newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;

        coinsList.appendChild(newLi);
    });
}

window.onload = setCoins();
