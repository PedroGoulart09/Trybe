import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('Verificar se retorno da API esta na tela', async () => {

global.fetch = (url) => {
 return Promise.resolve({
   json: () => Promise.resolve({
     id: '7h3oGtrOfxc',
     joke: 'Whiteboards ... are remarkable',
     status: 200
   })
 })
}

  render(<App />);
  const linkElement = await screen.findByText('Whiteboards ... are remarkable');
  expect(linkElement).toBeInTheDocument();
});

test('Verificar retorno dos input',  () => {

 
  
    render(<App />);
    const inputNome = screen.getByRole('textbox', { name: /nome/i });
    expect(inputNome).toBeInTheDocument();
    expect(inputNome).toHaveValue('')
 
    userEvent.type(inputNome, 'Estudante Da Trybe')

    expect(inputNome).toHaveValue('Estudante Da Trybe')

    const inputEmail = screen.getByLabelText('Email:')
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveValue('');

    userEvent.type(inputEmail, 'teste@email.com')
    expect(inputEmail).toHaveValue('teste@email.com');

  });

