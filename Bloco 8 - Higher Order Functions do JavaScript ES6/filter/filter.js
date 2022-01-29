const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeName = (name, students) =>
    students.filter((value) => value !== name)

const remover = removeName('Ricardo', arrayMyStudents);
console.log(remover);


const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
];

const age2 = (age) => (
    age.filter((value) => (value.age <= 18))
);
console.log(age2(objPeople));
// [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]

//FORMAS DE PEGAR MAIOR NOME EM UM ARRAY

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((teste) => teste.length > 8);

console.log(result);
//FORMAS DE PEGAR MAIOR NOME EM UM ARRAY
let arr = ['bola', 'cueca', 'sol', 'as'];
let bigWord = arr.reduce((acc, value) => acc.length < value.length ? acc = value : acc)
console.log(bigWord)