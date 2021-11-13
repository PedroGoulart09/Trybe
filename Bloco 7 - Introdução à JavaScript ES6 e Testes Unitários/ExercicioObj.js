const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            }
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            }
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        }
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (order) => {
    const anaSilveira = order.order.delivery.deliveryPerson
    const rafaelNumber = order.phoneNumber
    const rafaelNome = order.name
    const rua = order.address.street
    const number = order.address.number
    const casa = order.address.apartment


    console.log(`Ola, ${anaSilveira}, entrega para: ${rafaelNome}, telefone: ${rafaelNumber} endereço: ${rua} N* ${number} AP:${casa}`);
}
customerInfo(order);


const orderModifier = (order) => {
    const newBuyer = order.name = 'Luiz Silva';
    const pizzas = Object.keys(order.order.pizza);
    const drinks = order.order.drinks.coke.type;
    const newTotal = order.payment.total = '50';
    console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`);

}

orderModifier(order);
//Crie uma função para contar quantos estudantes assistiram às aulas de matemática. Use o objeto criado no exercício 5.

const getNumberOfStudentsMath = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (index in array) {
        if (obj[array[index]].materia === 'Matemática') {
            total += obj[array[index]].numeroEstudantes;
        }
    }
    return total;
}
console.log(getNumberOfStudents(allLessons));