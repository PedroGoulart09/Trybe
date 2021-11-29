const myExpenses = [
    {
        gym: 99,
    },
    {
        ifood: 200,
    },
    {
        phone: 60,
    },
    {
        internet: 100,
    },
];

const myIncome = 1000;

const monthlyBudget = (myIncome, myExpenses, callback) => {

    const totalExpenses = callback(myExpenses);
    const totalAfterExpenses = myIncome - totalExpenses;

    console.log(`Balanço do mês:
      Recebido: R$${myIncome},00
      Gasto: R$${totalExpenses},00
      Saldo: R$${totalAfterExpenses},00 `);
};



const handleExpenses = myExpenses => {
    const eachValue = myExpenses.map((item) => Object.values(item)[0]);
    const totalExpense = eachValue.reduce((acc, curr) => acc + curr, 0);
    return totalExpense;
};

monthlyBudget(myIncome, myExpenses, handleExpenses);




function soma(resultado) {
    console.log(resultado);
}

const somaTudo = (num1, num2, callback) => {
    let somaAll = num1 + num2;
    callback(somaAll)
}
somaTudo(0, 20, soma);




// Agora, faça estes exercícios de fixação:
// 1 - No código abaixo você tem a função getUser , que retorna uma pessoa qualquer. Complete a função getUser de forma que ela receba uma outra função como parâmetro para que possa realizar as operações abaixo sobre a pessoa retornada.


const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => {
    const userToReturn = {
        firstName: "Ivan",
        lastName: "Ivanovich",
        nationality: "Russian"
    };
    return callback(userToReturn)
};

console.log(getUser(userFullName)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
console.log(getUser(userNationality)); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"







// 2 - No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa qualquer depois de um certo tempo. Complete a função getUser de forma que ela receba um callback para que possa realizar as operações abaixo sobre a pessoa.

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
    setTimeout(() => {
        const user = {
            firstName: "Ivan",
            lastName: "Ivanovich",
            nationality: "Russian",
        };
        console.log(callback(user));

    }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo

