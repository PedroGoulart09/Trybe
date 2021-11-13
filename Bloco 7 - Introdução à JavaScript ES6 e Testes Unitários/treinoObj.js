
/* const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);
 */



const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom',
};

const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (index in arrayOfSkills) {
        console.log(`${arrayOfSkills[index]}, Nivel: ${student[arrayOfSkills[index]]}`);
    }
};
listSkills(student2)

/* const teste = () => Object.values(student2) */

let map = new Map(Object.entries(student2))

console.log(map);


const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
};
const paisesAll = Object.entries(países);
console.log(paisesAll);

for (index in paisesAll) {
    console.log('-----');
    console.log('Pais: ', paisesAll[index][0]);
    console.log('Capital', paisesAll[index][1]);
}


const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
};

const info = {
    age: 23,
    job: 'engenheiro',
};

const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)



/* const addEu = { lastName: 'goulart' }

let add = Object.assign(eu, addEu) */

const eu = { chave1: 'a', chave2: 'b', chave3: 'c' }
console.log(Object.keys(eu));

const top3Albums = {
    1: 'Nightfall in Middle-Earth',
    2: 'Imaginations from the Other Side',
    3: 'Somewhere Far Beyond',
};
console.log(Object.entries(top3Albums));