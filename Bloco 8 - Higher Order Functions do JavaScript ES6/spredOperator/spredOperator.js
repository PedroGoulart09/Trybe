const carro = { hb20: 'carro' }
const moto = { biz: 'R1' }
const veiculo = { ...carro, ...moto }
console.log(veiculo);

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);


const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers));
console.log(Math.min(...randomNumbers));



// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maça', 'banana', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['fruta', 'carne', 'pizza'];

const fruitSalad = (fruit, additional) => {
    const retorno = [...fruit, ...additional]
    return retorno;
};

console.log(fruitSalad(specialFruit, additionalItens));




const teste = (...args) => args.reduce((acc, val) => acc + val, 0);
console.log(teste(1, 2, 3));

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60));