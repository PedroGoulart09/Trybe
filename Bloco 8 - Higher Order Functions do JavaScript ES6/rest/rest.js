//exemplos de rest
const teste = (...args) => args.reduce((acc, val) => acc + val, 0);
console.log(teste(1, 2, 3));

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60));

