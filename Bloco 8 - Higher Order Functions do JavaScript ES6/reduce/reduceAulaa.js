const { cervejas } = require('./reduceAula');
// HoF REDUCE
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// O reduce é uma função muito poderosa, que permite que a gente combine todo o resultado da aplicação da função passada como parâmetro nos elementos do array em um único resultado.

const numeros = [2, 5, 9, 15, 89, 0, 135, 3, 110];

// Apresentar a soma de todos os números do Array numeros

// accumulatorFor = 2
// 2 + 3 = 5
// 5 + 4 = 9
// 9 + 6 = 15
// ...

// Com for tradicional
// let accumulatorFor = numeros[0];
// for (let i = 1; i < numeros.length; i += 1) {
//   accumulatorFor = accumulatorFor + numeros[i];
// }

// console.log('accumulatorFor:', accumulatorFor);

// Com reduce
const soma = numeros.reduce((accSoma, numero) => (accSoma += numero), 0);
console.log('Soma dos números:', soma);

// Apresentar o maior número do vetor com reduce
const maiorNumero = numeros.reduce((accMaiorNumero, numero) => accMaiorNumero < numero ? numero : accMaiorNumero);
console.log('O maior número do vetor é:', maiorNumero);

// Verificar quantas vezes cada nome se repete no array de nomes usando o reduce
// Exibir no formato {Alexandre: 1, Adriana: 3, Matheus: 2......}
const nomes = [
    'Alexandre',
    'Adriana',
    'Matheus',
    'Adriana',
    'Marlene',
    'João',
    'Matheus',
    'João',
    'Adriana',
];

const nomesRepetidos = nomes.reduce((accNomes, nome) => {
    Object.keys(accNomes).includes(nome) ? accNomes[nome]++ : accNomes[nome] = 1;
    return accNomes;
}, {});

console.log(nomesRepetidos);

// Calcular o total de cervejas em estoque
const totalDeCervejasEmEstoque = cervejas.reduce((estoque, cerveja) =>
    estoque += cerveja.estoque, 0);
console.log('O total de cervejas em estoque é: ', totalDeCervejasEmEstoque);

// Verificar qual é a cerveja mais cara em estoque exibindo suas informações no log
const cervejas = [
    {
        codigo: 123,
        fabricante: 'Urquell',
        descricao: 'Pilsner Urquell 500ML',
        valor: 20,
        estoque: 200,
    },
    {
        codigo: 176,
        fabricante: 'Schornstein',
        descricao: 'Schornstein Imperial 500ML',
        valor: 35.99,
        estoque: 150,
    },
    {
        codigo: 122,
        fabricante: 'Schornstein',
        descricao: 'Schornstein IPA 500ML',
        valor: 18.99,
        estoque: 300,
    },
    {
        codigo: 323,
        fabricante: 'Maniacs',
        descricao: 'Maniacs Craft Lager 355ML',
        valor: 19.99,
        estoque: 500,
    },
    {
        codigo: 183,
        fabricante: 'Leuven',
        descricao: 'Leuven Red ALE Knight 600ML',
        valor: 25.99,
        estoque: 100,
    },
    {
        codigo: 129,
        fabricante: 'Leuven',
        descricao: 'Leuven Witbier The Witch 500ML',
        valor: 19.99,
        estoque: 200,
    },
    {
        codigo: 451,
        fabricante: 'Lupulus',
        descricao: 'Lupulus Blanche 330ML',
        valor: 29.99,
        estoque: 0,
    },
    {
        codigo: 111,
        fabricante: 'Eggenberg',
        descricao: 'Samichlaus Berrique 330ML',
        valor: 55.9,
        estoque: 25,
    },
    {
        codigo: 1,
        fabricante: 'Fuller',
        descricao: "Fuller's Vintage Ale 2015 500ML",
        valor: 264.9,
        estoque: 5,
    },
];


const test = cervejas.reduce((acc, curr) => {
    if (!acc[curr.fabricante]) {
        acc[curr.fabricante] = [];
    }
    acc[curr.fabricante].push(curr);
    return acc;
}, {});
console.log(test);

