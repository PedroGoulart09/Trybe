const sum = require('./sum.js');

describe('testar funcao sum', () => {
    it('deve retornar o resultado da soma', () => {
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).toBe(0);
    })
})
describe('testar funcao se retorna erro', () => {
    it('deve retornar parameters must be numbers', () => {
        expect(() => { sum(4, "5") }).toThrow('parameters must be numbers')
    })
})

describe('testar funcao se retorna erro', () => {
    it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada', () => {
        expect(() => { sum(4, "5") }).toThrowError('parameters must be numbers')
    })
})


