// function helloWorld() {
//   console.log('Ola Turma 17');
// }
// window.onload = helloWorld;


// window.onload = function () {
//   // 1 - selecionar o elemento
//   let btn = document.querySelector('#start-race-btn');

//   // 2 - criar uma funcao para o evento
//   // function helloWorld() {
//   //   console.log('Ola Turma 17');
//   // }

//   // 3 - adicionar o evento e a funcao para o elemento selecionado
//   btn.addEventListener('click', function (event) {
//     console.log('Ola Turma 17');
//     console.log(event.target);
//   });
// }

window.onload = function () {
    // selecionar os elementos
    let btn = document.querySelector('#start-race-btn');
    let car1 = document.querySelector('.car1');
    let car2 = document.querySelector('.car2');

    resetCars(car1, car2);

    // criar a funcao para o evento
    // adicionar o evento para o meu elemento
    btn.addEventListener('click', function () {

        car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random() * 100 + 'px';
        car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random() * 100 + 'px';

        if (parseInt(car1.style.marginLeft) > window.innerWidth) {
            alert('Carro VERMELHO é campeão!!!!!!');
            resetCars(car1, car2);
        }

        if (parseInt(car2.style.marginLeft) > window.innerWidth) {
            alert('Carro VERDE é campeão!!!!!!');
            resetCars(car1, car2);
        }
    });

    function resetCars(car1, car2) {
        car1.style.marginLeft = '0px';
        car2.style.marginLeft = '0px';
    }


    car1.addEventListener('mouseover', function (event) {
        event.target.style.backgroundColor = 'blue';
    });
    car1.addEventListener('mouseout', function (event) {
        event.target.style.backgroundColor = 'red';
    });
}

