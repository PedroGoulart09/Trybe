


// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach .

function smallerName() {
    let nameBook = books[0].name
    books.forEach((value) => value.name < nameBook ? nameBook = value.name : '')
    return nameBook;
}
console.log(smallerName());



// 4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc() {
    return books.sort((value1, value2) => value2.releaseYear - value1.releaseYear)
}
console.log(booksOrderedByReleaseYearDesc());




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

