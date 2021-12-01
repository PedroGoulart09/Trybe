const fetch = require('node-fetch');
const hero = async () => {


    const result = await fetch('https://www.superheroapi.com/api.php/4192484924171229/720%27').then((response) => response.json())
        .then((hero) => hero.name)
        .catch(error => console.log(error))
    return result;

};

console.log(hero());
// Wonder Woman

const getSuperHero = async () => {
    const name = await hero()
    return name
}
console.log(getSuperHero())

