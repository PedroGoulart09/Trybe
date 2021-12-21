const fetch = require('node-fetch');
const hero = async () => {
    const result = await fetch('https://www.superheroapi.com/api.php/4192484924171229/720')
    const { name } = await result.json();
    return name;

};

module.exports = { hero }

