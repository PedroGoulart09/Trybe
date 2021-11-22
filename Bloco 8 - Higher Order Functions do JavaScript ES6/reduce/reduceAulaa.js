const { cervejas } = require('./dados');
// HoF REDUCE
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// O reduce é uma função muito poderosa, que permite que a gente combine todo o resultado da aplicação da função passada como parâmetro nos elementos do array em um único resultado.

const numeros = [2, 5, 9, 15, 89, 0, 13, 3, 110];

// Apresentar a soma de todos os números do Array numeros

// accumulatorFor = 2
// 2 + 3 = 5
// 5 + 4 = 9
// 9 + 6 = 15
// ...

// Com for tradicional
let accumulatorFor = numeros[0];
for (let i = 1; i < numeros.length; i += 1) {
    accumulatorFor = accumulatorFor + numeros[i];
}

console.log('accumulatorFor:', accumulatorFor);

// Com reduce

// Apresentar o maior número do vetor com reduce
const maiorNumero = 0;
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

const somaNomes = {};

console.log(somaNomes);

// Calcular o total de cervejas em estoque
const totalDeCervejasEmEstoque = 0;

console.log('O total de cervejas em estoque é: ', totalDeCervejasEmEstoque);

// Verificar qual é a cerveja mais cara em estoque exibindo suas informações no log
const cervejaMaisCara = {};

console.log('A cerveja mais cara em estoque é:', cervejaMaisCara);