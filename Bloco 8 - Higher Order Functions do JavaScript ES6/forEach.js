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

/* function authorBornIn1947() {
    return books.find((value) => value.author.birthYear === 1947).author.name;
};
console.log(authorBornIn1947());

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
    let arr = ''
    names.find((value) => value.length > arr)
    return arr;

}

console.log(findNameWithFiveLetters()); */


// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach .

/* function smallerName() {
    let nameBook = books[0].name
    books.forEach((value) => value.name < nameBook ? nameBook = value.name : '')
    return nameBook;
}
console.log(smallerName()); */

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

/* const expectedResult = {
    author: {
        birthYear: 1948,
        name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
};

function getNamedBook() {
    return books.find((value) => value.name.length === 26)
}
console.log(getNamedBook()); */


// 4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc() {
    return books.sort((value1, value2) => value2.releaseYear - value1.releaseYear)
}
console.log(booksOrderedByReleaseYearDesc());



