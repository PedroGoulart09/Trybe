const fetch = require('node-fetch');

const getSuperHero = () => {
    const result = fetch('https://api.mercadolibre.com/sites/MLB/search?q=')
        .then((response) => response.json())
        .then((hero) => console.log(hero.sort));
    return result;
};

getSuperHero();