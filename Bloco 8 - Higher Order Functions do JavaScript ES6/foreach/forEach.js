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

function authorBornIn1947() {
    return books.find((value) => value.author.birthYear === 1947).author.name;
};
console.log(authorBornIn1947());

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
    let arr = ''
    names.find((value) => value.length > arr)
    return arr;

}

console.log(findNameWithFiveLetters());


// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach .

function smallerName() {
    let nameBook = books[0].name
    books.forEach((value) => value.name < nameBook ? nameBook = value.name : '')
    return nameBook;
}
console.log(smallerName());

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.


function getNamedBook() {
    return books.find((value) => value.name.length === 26);
}
console.log(getNamedBook());


// 4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc() {
    return books.sort((value1, value2) => value2.releaseYear - value1.releaseYear)
}
console.log(booksOrderedByReleaseYearDesc());

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.


function everyoneWasBornOnSecXX() {
    return books.every((value) => value.author.birthYear > 1900 && value.author.birthYear < 1800)
}
console.log(everyoneWasBornOnSecXX());


// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.



function someBookWasReleaseOnThe80s() {
    return books.some((value) => value.releaseYear >= 1980 && value.releaseYear < 1990)
}
console.log(someBookWasReleaseOnThe80s());


// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.


function authorUnique() {
    return books.every((book) =>
        !books.some((bookSome) =>
            (bookSome.author.birthYear === book.author.birthYear)
            && (bookSome.author.name !== book.author.name)));
}
console.log(authorUnique());

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
];

const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach((value) => {
    showEmailList(value[0]);
})

