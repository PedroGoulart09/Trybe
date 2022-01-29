const books = {
    collection: 'The Lord of the Rings',
    book1: 'The Fellowship',
    book2: 'Two Towers',
    book3: 'Return of the King',
    publisher: {
        name: 'Martins Fontes',
        address: 'Rua XYZ, 123',
    }
};

const bookAuthor = {
    authorName: 'J. R. R. Tolkien',
};

// console.log(books);

Object.assign(books, bookAuthor);

// console.log(books);

// Armazenar as informações de books em um novo objeto
const newBook = Object.assign({}, books);

newBook.publisher.address = 'Rua ABC';

// console.log(newBook);
// newBook.book3 = 'Harry Potter';

console.log('New Book');
console.log(newBook);

console.log('Book');
console.log(books);


const person = {
    name: 'Henrique',
    lastname: 'Jensen', // trailing comma
    address: {
        city: 'BH',
        street: 'Rua X',
        number: 123,
    }
};

// console.log(`Olá, ${person.name} ${person['lastname']}`);

person.age = 36;
person['canPlayPiano'] = false;

// console.log(person);

// console.log(typeof person);

const favoriteNumber = 4;
// console.log(typeof favoriteNumber);

const numbers = [1, 2, 3, 4, 5];
// console.log(typeof numbers);

const keysOfPerson = Object.keys(person);
// console.log(keysOfPerson);

const valuesOfPerson = Object.values(person);
// console.log(valuesOfPerson);

const entriesOfPerson = Object.entries(person);
console.log(entriesOfPerson);

// console.log(entriesOfPerson[2][1].number); 
const numeratorInput = document.querySelector('#numerator');
const denominatorInput = document.querySelector('#denominator');
const spanResult = document.querySelector('#result');

function divideTwoNumbers(numerator, denominator) {
    // Se numerator e denominator são números
    // Se numerator ou denominator não forem números, eu quero que isso seja tratado como um erro
    if (Number.isNaN(numerator) || Number.isNaN(denominator)) {
        // Código lance uma exceção
        throw new Error('Apenas números são permitidos');
    }
    return numerator / denominator;
}

function handleCalculateButtonClick() {
    const numeratorValue = Number(numeratorInput.value);
    const denominatorValue = Number(denominatorInput.value);
    // Try Catch
    try {
        const result = divideTwoNumbers(numeratorValue, denominatorValue);
        spanResult.innerHTML = result;
    } catch (error) {
        spanResult.innerHTML = '';
        alert(error);
    }
}

window.onload = () => {
    const calculateButton = document.querySelector('#calculateDivision');
    calculateButton.addEventListener('click', handleCalculateButtonClick);
}
