const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
];
const teste = () => {
    students.forEach((student) => {
        if (student.grade >= 60) {
            student.approved = 'aprovado'
        } else {
            student.approved = 'reprovado'
        }
    })
}
teste();
console.log(students);


const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];

const tiagaoEmbaixa = () => {
    let arr;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 5 === 0) {
            arr = numbers[i];
            break;
        }

    }
    return arr;
}

console.log(tiagaoEmbaixa());

const numbers2 = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];

const gabinheira = () => {
    let arr2 = [];
    numbers2.forEach((index) => {
        if (index % 5 === 0) {
            arr2.push(index)

        }

    })
    return arr2;

}
console.log(gabinheira());

