//As HOFs são funções que usam outras funções em suas operações, devendo aceitá-las como parâmetro e/ou retorná-las. O mais incrível é que você já aplicou este conceito na prática. Veja este exemplo:
const button = document.querySelector('#signup-button');

const registerUser = () => {
    console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);

const reduce = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
        action(count);
    }
};

reduce(10, console.group);


// Testa quais números serão ímpares;
// Testa quais números serão pares;
const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
        action(count);
    }
};
const isEven = (number) => {
    if (number % 2 === 0) {
        console.log(number, 'is par');
    }
};

const isOdd = (number) => {
    if ((number % 2) > 0) {
        console.log(number, 'is impar');
    }
};

repeat(3, isEven);
repeat(3, isOdd);


//number aleatorio hofs
const numberGenerator = (teste) => {
    return Math.random(teste) * 100;
}

console.log(numberGenerator(5).toFixed(0));

const treino = () => {
    console.log('acordando')
}

const treino1 = () => 'acordando';
const treino2 = () => 'dormindo';
const treino3 = () => 'roncando';
function doingThings() {
    console.log(treino1());
    console.log(treino2());
    console.log(treino3());
}
doingThings();


