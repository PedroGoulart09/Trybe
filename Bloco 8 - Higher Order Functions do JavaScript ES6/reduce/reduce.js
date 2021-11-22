const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113


const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
    console.log(accumulator); // 1 3 6 10
    return accumulator + number;
};

const sumNumbers = collection.reduce(getSum, 10);
console.log(sumNumbers); // 15

const numbers = [50, 85, -30, 3, 15];

const reduce = (result, accumulator) => (result > accumulator) ? result : accumulator;

const getSum = numbers.reduce(reduce)
console.log(getSum);