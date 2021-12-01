const fetch = require('node-fetch');

const getSuperHero = async () => {
    const result = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador')
        .then((response) => response.json())
        .then(extractNameAndImage)
        .then((data) => (data))

    return result;
};

getSuperHero().then((result) => console.log(result));

function extractNameAndImage(item) {

    return item.results.map((e) => ({ title: e.title, thumbnail: e.thumbnail }))
}
