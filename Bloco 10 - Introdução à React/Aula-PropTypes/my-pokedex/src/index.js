import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pokemon from './data'




ReactDOM.render(

  <App pokemons={Pokemon} />,

  document.getElementById('root')
);

