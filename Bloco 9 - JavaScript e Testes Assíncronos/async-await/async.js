// getData.js
const fetch = require('node-fetch');

const getSuperHero = () => {
    const result = fetch('https://www.superheroapi.com/api.php/4192484924171229/720')
        .then((response) => response.json())
        .then((hero) => console.log(hero.name));
    return result;
};

getSuperHero(); // Wonder Woman


// githubApi.test.js


const getRepos = () => {
    const teste = fetch('https://api.github.com/orgs/tryber/repos')
        .then((response) => response.json())
        .then((data) => data.map((repo) => repo.name))

    return teste;
}

getRepos();


module.exports = { getSuperHero, getRepos }

