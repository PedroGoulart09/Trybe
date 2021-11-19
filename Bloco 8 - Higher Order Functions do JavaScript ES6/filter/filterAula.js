// Links uteis:
// HoF FILTER
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// O método filter() cria um novo array com todos os elementos que passaram no teste
// implementado pela função fornecida.

// Operações com String em Javascript
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String

// Filtrar todas as pessoas da lista abaixo que não dirigem

const clientes = [
    { nome: 'Robert', sobreNome: 'De Niro', dirige: true },
    { nome: 'Michelle', sobreNome: 'Pfeiffer', dirige: false },
    { nome: 'Will', sobreNome: 'Smith', dirige: true },
    { nome: 'Mariah', sobreNome: 'Carey', dirige: false },
    { nome: 'Lady', sobreNome: 'Gaga', dirige: true },
    { nome: 'Justin', sobreNome: 'Bieber', dirige: false },
];

// Com for tradicional
// const pessoasQueNaoDirigem = (array) => {
//   const semHabilitacao = [];

//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].dirige === false) semHabilitacao.push(array[i]);
//   }
//   return semHabilitacao;
// };

// console.log('Pessoas que não sabem dirigir:', pessoasQueNaoDirigem(clientes));

// Com o filter
// const semHabilitacao = clientes.filter((cliente)=>cliente.dirige === false);
// console.log('Pessoas que não sabem dirigir:', semHabilitacao);

// Todos os clientes que dirigem
// const comHabilitacao = clientes.filter((cliente)=>cliente.dirige === true);
// console.log('Pessoas que sabem dirigir:', comHabilitacao);


// Criar um novo array com todas as cervejas com valor abaixo de R$ 25.00
// e apresentar essas informações no terminal

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
        estoque: 99,
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
        valor: 55.90,
        estoque: 25,
    },
    {
        codigo: 1,
        fabricante: 'Fuller',
        descricao: "Fuller's Vintage Ale 2015 500ML",
        valor: 264.90,
        estoque: 5,
    },
];

// const cervejasAte25 = [];
// for (let index = 0; index < cervejas.length; index += 1) {
//   if (cervejas[index].valor < 25.0) {
//     cervejasAte25.push(cervejas[index]);
//   }
// }

// Com Filter
const cervejasAte25 = cervejas.filter((cerveja) => cerveja.valor < 25);

console.log(cervejasAte25);


// Mostrar todas as cervejas com estoque abaixo de 100 unidades
const cervejasComEstoqueBaixo = cervejas.filter((cerveja) => cerveja.estoque < 100);
console.log('Cervejas com estoque baixo: ', cervejasComEstoqueBaixo);

// Mostrar todas as cervejas que começam com a letra L
const cervejasComLetraL = cervejas.filter((cerveja) => cerveja.descricao.startsWith('L'));
console.log('Cervejas que começam com a letra L: ', cervejasComLetraL);

// Mostrar todas as cervejas que contenham a palavra ALE na sua descricao
const cervejasIPA = cervejas.filter((cerveja) => cerveja.descricao.toUpperCase().includes('ALE'));
console.log('Cervejas do tipo ALE: ', cervejasIPA);