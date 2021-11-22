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

//maior numero de um array

const numbers = [50, 85, -30, 3, 15];

const reduce = (result, accumulator) => (result < accumulator) ? result : accumulator;

const getSum = numbers.reduce(reduce)
console.log(getSum);

//soma de todos numeros pares de um array

const numbers1 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sum = (result) => result % 2 === 0;
const get = (value, result) => value + result
const soma = (arr) => arr.filter(sum).reduce(get)
console.log(soma(numbers1));
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const estudantes = [
    {
        nome: 'Jorge',
        sobrenome: 'Silva',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 67 },
            { name: 'Português', nota: 79 },
            { name: 'Química', nota: 70 },
            { name: 'Biologia', nota: 65 },
        ],
    },
    {
        nome: 'Mario',
        sobrenome: 'Ferreira',
        idade: 15,
        turno: 'Tarde',
        materias: [
            { name: 'Matemática', nota: 59 },
            { name: 'Português', nota: 80 },
            { name: 'Química', nota: 78 },
            { name: 'Biologia', nota: 92 },
        ],
    },
    {
        nome: 'Jorge',
        sobrenome: 'Santos',
        idade: 15,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 76 },
            { name: 'Português', nota: 90 },
            { name: 'Química', nota: 70 },
            { name: 'Biologia', nota: 80 },
        ],
    },
    {
        nome: 'Maria',
        sobrenome: 'Silveira',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 91 },
            { name: 'Português', nota: 85 },
            { name: 'Química', nota: 92 },
            { name: 'Biologia', nota: 90 },
        ],
    },
    {
        nome: 'Natalia',
        sobrenome: 'Castro',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 70 },
            { name: 'Português', nota: 70 },
            { name: 'Química', nota: 60 },
            { name: 'Biologia', nota: 50 },
        ],
    },
    {
        nome: 'Wilson',
        sobrenome: 'Martins',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 80 },
            { name: 'Português', nota: 82 },
            { name: 'Química', nota: 79 },
            { name: 'Biologia', nota: 75 },
        ],
    },
];

const getBestClass = (acc, materia) => {
    if (acc.nota > materia.nota) return acc;
    return materia;
};

const reportBetter = (students) => students.map((student) => ({
    name: student.nome,
    materia: student.materias.reduce(getBestClass).name
}));

console.log(reportBetter(estudantes));