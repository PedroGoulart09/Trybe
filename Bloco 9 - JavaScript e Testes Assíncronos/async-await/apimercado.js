
const tudoNaTela = (data) => {
    data.map((elemento) => {
        const ol = document.querySelector('ol');
        ol.className = 'teste'
        const li = document.createElement('li');
        const divNome = document.createElement('div');
        const divImage = document.createElement('div');
        const img = document.createElement('img');
        divNome.innerHTML = elemento.title;
        divImage.appendChild(img);
        img.src = elemento.thumbnail;
        li.appendChild(divNome);
        li.appendChild(divImage);
        ol.appendChild(li);
    })
};

function extractNameAndImage(item) {
    console.log(item);
    return item.results.map((e) => ({ title: e.title, thumbnail: e.thumbnail }))
}


const getSuperHero = async () => {
    const result = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador')
        .then((response) => response.json())
        .then(extractNameAndImage)
        .then((data) => (data))

    return result;
};

getSuperHero().then((result) => tudoNaTela(result));



