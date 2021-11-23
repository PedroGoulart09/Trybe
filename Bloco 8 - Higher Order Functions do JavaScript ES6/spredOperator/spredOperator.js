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







// 1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2 , 15 e 54 .

const rectangleArea = (width, height) => width * height;
const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
    rectangleArea(...rectangle) // altere a chamada da funcao rectangleArea

    console.log(rectangle[0] * rectangle[1]);

});

// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

const teste = (...args) => args.reduce((acc, value) => acc + value, 0)
console.log(teste(5, 10, 20));























