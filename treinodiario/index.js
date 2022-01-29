/* //Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array 
deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do 
novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27
, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2
. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo://
*/



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [];
for (let i = 0; i < numbers.length; i++) {
  if (i + 1 < numbers.length) {
    numbers2.push(numbers[i] * numbers[i + 1]);
  } else {
    numbers2.push(numbers[numbers.length - 1] * 2)
  }


}
console.log(numbers2)

//SOMANDO ARRAY UM PELO PROXIMO

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [];
for (var i = 0; i < numbers.length; i++) {
  if (i + 1 < numbers.length) {
    numbers2.push(numbers[i] + numbers[i + 1])
  } else {
    numbers2.push(numbers[i] + 2)
  }
}
console.log(numbers2);



/* acrecentando em um array vazio sem o push */
const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
console.log(cars);





//EXIBINDO ASTERISCOS DE FORMAS DIFERENTES


let espaco = 4;

exibirAsteriscos(5)

function exibirAsteriscos(linhas) {
  for (let linha = 1; linha <= linhas; linha++) {
    let padrao = '';
    for (let i = 0; i < linhas; i++) {

      if (i < espaco) {
        padrao += ' ';
      } else {
        padrao += '*'
      }


    }

    console.log(padrao)
    padrao = '';
    espaco -= 1;

  }



}

//EXIBINDO ASTERISCOS DE OUTRAS FORMAS


let n = 9;
let espaco = n;

let linha = '';
for (let i = 0; i <= n; i++) {
  if (i % 2 !== 0) {
    if (n == i) {
      for (let a = 0; a < i; a++) {

        linha += '*'
      }
      linha += '\n'
      continue;


    }
    let espacoIncial = (espaco - i) / 2;
    let espacoFinal = i - 2
    for (let k = 0; k < espacoIncial; k++) {
      linha += ' '
    }
    linha += '*'
    for (let k = 0; k < espacoFinal; k++) {
      linha += ' '
    }
    if (i > 1) {
      linha += '*'
    }


    linha += '\n'
  }


}
console.log(linha)

// OBJETOS

let player = { name: 'marta', lastName: 'silva', age: '34', medals: { golden: 2, silver: 3 } }
console.log('A jogadora possui', player.medals.golden + ' medalhas de Ouro ' + 'e', player.medals.silver + ' medalhas de prata')


let info = {
  personagem: 'Margarida e Tio Patinhas',
  origem: 'Pato Donald e Christmas on Bear Mountain, Dell s Four Color Comics #178',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
  recorrente: 'Sim',

};

console.log(info)





// OBJETOS COM ARRAY 

let melhor = {
  name: 'marta',
  melhorMundo: [2006, 2007, 2008, 2009, 2010, 2018]
}
console.table(melhor)


// FOR IN

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge'
};
for (let nomes in names) {
  console.log('Ola', names[nomes])
}
//FOR IN 

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for (let modelo in car) {
  console.log(modelo, car[modelo])
}


//OPERADOR TERNARIO
let notas = [50,70,80,30,90,10,40,55]
let aprovados = 0;
let reprovados = 0;
for(let n of notas) {
  n>=60?aprovados++:reprovados++;
}
console.log('aprovados ' + aprovados)
console.log('reprovados ' + reprovados)



//EXEMPLOS FOR IN
let aluno = {nome:'pedro',sobrenome:'campos'}
let notas = {n1:80,n2:75,n3:92}
let info = {...aluno,...notas}
for (let dados in info){
  console.log(info[dados])
}
//EXEMPLOS FOR IN


const array1 = ['a', 'b', 'c'];

for (const element in array1) {
  console.log(element);
}

//FUNCTION

function imposto(nome,salario){
  let resultado = (salario*2)/5
  return nome + ' ' + resultado
}
let resultado = imposto('Pedro Goulart' ,500)
console.log(resultado)

//PALINDROMO
function palindromo(palindromo) {
  for (let letra in palindromo) {
    if (palindromo[letra] != palindromo[(palindromo.length - 1) - letra]) {

      return false;

    }
  }
  return true;

}
console.log(palindromo('arara'))

//INDICE DO MAIOR VALOR DE UM ARRAY


function indiceMaiorNumero(array) {
  let maior = array[0]
  let indice = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maior) {
      maior = i
      indice = i
    }
  }
  return indice;
}


let array = [2, 4, 6, 7, 10, 0, -3, 50];
console.log(indiceMaiorNumero(array))





//INDICE DO MENOR VALOR DE UM ARRAY


function indiceMenorValor(array) {
  let menor = array[0]
  let indice = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < menor) {
      menor = i
      indice = i
    }

  }
  return indice;
}




let array = [2, 4, 6, 7, 10, 0, -3];
console.log(indiceMenorValor(array))


//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function maiorNome(name) {
  let biggestName = '';
  for(let i = 0; i < name.length; i++) {
    let maiorNome = name[i];
    if(maiorNome.length > biggestName.length){
      biggestName = name[i]

    }
  }
  return biggestName;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));



//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.


function maiorNome(nome) {
 let maiorNome = nome;
 for(let index in nome) {
   if(maiorNome.length < nome[index].length){
     maiorNome = nome[index];
     
   }
 }
 return maiorNome;
  
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


//6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.


function somatorio(numeros){
  let n = 0;
  for (let i = 0; i <= numeros; i++) {
    n = n + i;
  }
  return n;
}
console.log(somatorio(5)) 

//EXEMPLO DE SWITCH CASE 
const chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};
console.log(chessPiece)

