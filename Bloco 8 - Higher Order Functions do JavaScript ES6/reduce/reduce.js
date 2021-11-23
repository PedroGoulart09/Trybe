const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113


const collection = [1, 2, 3, 4, 5];

const getSum = collection.reduce((accumulator, number) => accumulator += number);


console.log(getSum); // 15

//maior numero de um array

const numbers = [50, 85, -30, 3, 15];

const reduce = (result, accumulator) => (result > accumulator) ? result : accumulator;

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


const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
    return arrays.reduce((acc, value) => acc.concat(value), []);
}
console.log(flatten());



const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
    const result = books.reduce((acc, curr) => acc += curr.author.name + ', ', '')
    return result;

}
console.log(reduceNames());

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const expectedResult = 43;

function averageAge() {
    return books.reduce((acc, curr) => acc += curr.releaseYear - curr.author.birthYear, 0) / books.length
}
console.log(averageAge());


// 4 - Encontre o livro com o maior nome.

function longestNamedBook() {
    return books.reduce((bigName, curr) => bigName < curr.name.length ? bigName = curr.name.length : bigName).name
}
console.log(longestNamedBook());


// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
    return names.reduce((acc, cur) => acc += cur.toLowerCase().split('').filter((value) => value === 'a').length, 0)
}
console.log(containsA());


// 6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .


const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
    return students.map((value, index) => ({
        name: value,
        MediaFinal: grades[index].reduce((acc, curr) => acc + curr) / grades[index].length
    }))
}
console.log(studentAverage());


const arr = [1, 2, 3]

const a = arr.split('');
console.log(a);
