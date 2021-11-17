// Função com uma saudação formal
const saudacaoFormal = () => {
    return `Olá, tudo bem com você?`
}
const saudacaoFormal = (nomePessoa) => {
    return `Olá ${nomePessoa}, tudo bem com você?`;
};

// Função com uma saudação amorosa
const saudacaoAmorosa = () => {
    return `Olá meu amor, tudo bem com você?`
}
const saudacaoAmorosa = (nomePessoa) => {
    return `Olá ${nomePessoa} tudo bem com você, meu amor?`;
};

const saudacaoSeca = () => {
    return `Oi!`
}
return `Oi!`;


const pessoa = {
    nome: 'Matheus',
    sobreNome: 'Jesus',

    saudacao: function (callback, nomePessoa) {
        callback();
    }
}

console.log(pessoa.saudacao(saudacaoAmorosa));



saudacao: function (funcao, nomePessoa) {
    return funcao(nomePessoa);
},


console.log(pessoa.saudacao(saudacaoAmorosa, 'Marcia Maria'));
console.log(pessoa.saudacao(saudacaoSeca, ''));

// Função com uma saudação mau humorada
console.log(pessoa.saudacao(saudacaoAmorosa));

//--------------------- Terceira parte do código -------------------
// Objeto pessoa com as propriedades nome, sobreNome e saudacao que retorna
// uma saudação dinamica através de uma callback e com o nome da pessoa que se 
// uma saudação dinamica através de uma callback e com o nome da pessoa que se
// deseja saudar!


// Resultado das chamadas das funções de saudação pelo objeto pessoa.
// Pessoa que se desejar saudar: Kevin Costner usar saudação formal.
// console.log();

// Pessoa que se desejar saudar: Márcia Maria usar saudação amorosa, 
// Pessoa que se desejar saudar: Márcia Maria usar saudação amorosa,
// console.log();

// Pessoa que se desejar saudar: desconhecida usar saudação mal humorada.
// console.log();

//--------------------- Conteúdo adicional -------------------

// Crie uma função que retorne um objeto no formato { nomeCompleto, email } 
// representando uma nova pessoa contratada. Passe sua função como parâmetro 
// Crie uma função que retorne um objeto no formato { nomeCompleto, email }
// representando uma nova pessoa contratada. Passe sua função como parâmetro
// da HOF newEmployees para criar cada pessoa contratada em seu respectivo id.
// A sua função deve receber como parâmetro o nome completo da pessoa funcionária 
// A sua função deve receber como parâmetro o nome completo da pessoa funcionária
// e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    };
    return employees;
};

const dadosEmployee = (nomeCompleto) => {
    const email = `${nomeCompleto.replace(' ', '_').toLowerCase()}@trybe.com`;
    return { nome: nomeCompleto, email: email };
};

console.log(dadosEmployee('Felipe Castanheira'));

console.log(newEmployees(dadosEmployee));