import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
const service = require('../Service');


describe('tesntando retorno da função', () => {
  
    it('verifique o retorno da função', () => {
        service.numeroAleatorio = jest.fn().mockReturnValue(10);
        expect(service.numeroAleatorio()).toBe(10)
        expect(service.numeroAleatorio).toHaveBeenCalled();
        expect(service.numeroAleatorio).toHaveBeenCalledTimes(1)
    })

    it('Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.', () => {
       service.numeroAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);
      expect(service.numeroAleatorio(10,2)).toBe(5);   
      expect(service.numeroAleatorio).toHaveBeenCalled();
      expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);

    })
    it('verifique o retorno da função novamente', () => {
       service.numeroAleatorio = jest.fn().mockImplementation((a,b,c) => a * b * c)

       expect(service.numeroAleatorio(2,4,6)).toBe(48);
       expect(service.numeroAleatorio).toHaveBeenCalled();
       expect(service.numeroAleatorio).toHaveBeenCalledTimes(1)

       service.numeroAleatorio = jest.fn().mockImplementation((a) => a + a)

       expect(service.numeroAleatorio(10)).toBe(20);
       expect(service.numeroAleatorio).toHaveBeenCalled();

    })

    it('verifique o retorno da nova função retorna em caixa baixa', () => {
        service.returnString = jest.fn().mockImplementation((string) => string.toLowerCase());
        expect(service.returnString('UPPER CASE')).toBe('upper case');
        
    })
})