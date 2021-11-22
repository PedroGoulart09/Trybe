const { cervejas, clientes } = require('./reduceAula');
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
// O método toLocaleString() retorna uma string com uma representação sensível a linguagem deste número.

// Verificar quantos clientes são maior de idade e quantos são menor de idade
// usando reduce
/* 
const clientesPorIdade = clientes.reduce(
    (accIdade, cliente) => {
        cliente.idade < 18 ? accIdade.menorIdade += 1 : accIdade.adulto += 1
        return accIdade
    },
    { adulto: 0, menorIdade: 0 }
);

console.log(clientesPorIdade);

// Retornar array com objetos contendo o código, descrição e o valor total em estoque
// para cada cerveja:
// valorEmEstoqueDeCervejas: [{codigo:176, descricao:Pilsner Urquell 500ML, valor_em_estoque: R$ 4.000,00}, {...}]

const valorEmEstoqueDeCervejas = cervejas.reduce((acc, cerveja) => {
    acc.push({
        codigo: cerveja.codigo,
        descricao: cerveja.descricao,
        valor_em_estoque: (cerveja.valor * cerveja.estoque).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }),
    });
    return acc;
}, []);

console.log(valorEmEstoqueDeCervejas); */

// Separar as cervejas por fabricante

const cervejasProFabricante = cervejas.reduce((acc, curr) => {

    acc.push({

        fabricante: curr.fabricante,
        descricao: curr.descricao,
    })
    return acc;

}, []);

console.log(cervejasProFabricante);