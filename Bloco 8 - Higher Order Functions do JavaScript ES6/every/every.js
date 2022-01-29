// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.


function everyoneWasBornOnSecXX() {
    return books.every((value) => value.author.birthYear > 1900 && value.author.birthYear < 1800)
}
console.log(everyoneWasBornOnSecXX());


// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.


function authorUnique() {
    return books.every((book) =>
        !books.some((bookSome) =>
            (bookSome.author.birthYear === book.author.birthYear)
            && (bookSome.author.name !== book.author.name)));
}
console.log(authorUnique());

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.



function someBookWasReleaseOnThe80s() {
    return books.some((value) => value.releaseYear >= 1980 && value.releaseYear < 1990)
}
console.log(someBookWasReleaseOnThe80s());
