const summationOf = (value) => {
  //Faz a verificação se valor é diferente de um número
  if (value === '' || isNaN(value)) {
    throw Error('Valores nao numericos nao sao aceitos');
  }

  // Variavel para acumular o somatório do número
  let somatorio = 0;

  // Laço de repetição para fazer o somatório de 1 até o valor recebido
  // no parametro value da função
  for (let i = 1; i <= value; i += 1) {
    somatorio += i;
  }
}


// Fazendo a exportação das funções para que outros arquivos
// possam utiliza-las
module.exports = { summationOf };