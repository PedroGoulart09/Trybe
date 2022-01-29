import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import ReactTitle from './title';
import ReactHeader from './header';
import ReactContent from './Content';
import Imagem from './img'
import PropType from './PropTypes'

const divHtml = document.getElementById('root');
ReactDOM.render(
    <div>
        <ReactHeader />
        <ReactTitle />
        <section className="conteudo2">
            <ReactContent />
        </section>


        <Imagem name="Pedro" />
        <PropType name="Pedro" lastName="Goulart" />

    </div>,
    divHtml
);