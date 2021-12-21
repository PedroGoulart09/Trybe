const { soma, summationOf } = require('./script');

describe('Testes relativos a funcao soma', () => {
  test('Verificar se 1 + 2 retorna 3', () => {
    it('Verificar se 1 + 2 retorna 3', () => {
      expect(soma(1, 2)).toBe(3);
    });
  });

  test('Verificar se 0 + 0 retorna 0', () => {
    it('Verificar se 0 + 0 retorna 0', () => {
      expect(soma(0, 0)).toBe(0);
    });
  });
  test('Verificar se -5 + (-39) retorna -44', () => {
    it('Verificar se -5 + (-39) retorna -44', () => {
      expect(soma(-5, -39)).toBe(-44);
    });
  });

  test('Verificar se 5.1 + 6.55 retorna 11.65', () => {
    it('Verificar se 5.1 + 6.55 retorna 11.65', () => {
      const retorno = soma(5.1, 6.55);
      expect(Number(retorno.toFixed(2))).toBe(11.65);
    });
  });
});

describe('Testes relativos a funcao summationOf', () => {
  test('Verificar se a função summationOf retorna 21 para o parametro 6', () => {
    expect(summationOf(6)).toBe(21);
  });

  test("Verificar se a função summationOf retorna 'Valores nao numericos nao sao aceitos' para o parametro ''", () => {
    // Uso da Arrow Function para pegar a quebra do fluxo da chamada da função
    expect(() => {
      summationOf('');
    }).toThrow('Valores nao numericos nao sao aceitos');
  });
});

//Exemple try catch

let user = {
  idade: 17
};

const idadeMinima = 18;

try {

  if (user.idade < idadeMinima) {
    throw new Error(`A idade minima do usuario deve ser ao menos: ${idadeMinima} anos de idade`);
  }

  // db.save
} catch (e) {
  console.log(e.message);
}