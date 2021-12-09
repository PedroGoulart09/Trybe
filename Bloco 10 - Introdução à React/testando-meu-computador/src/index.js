import ReactDOM from 'react-dom';
import './index.css'
import React from 'react';
import PrimeiroComponent from './componente'
import ReactTitle from './title'

ReactDOM.render(
    <div>
        <ReactTitle />
        <PrimeiroComponent nome="pedro"
            nota={8}
        />


        <PrimeiroComponent nome="maria"
            nota={6}
        />
    </div>,
    document.getElementById('root')



)