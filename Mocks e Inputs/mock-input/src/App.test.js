import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


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
