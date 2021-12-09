import ReactDOM from 'react-dom';
import './index.css'
import React from 'react';
import ReactTitle from './title'
import ReactHeader from './header'
import ReactContent from './Content'

const teste = document.getElementById('root')
ReactDOM.render(
    <div>
        <ReactHeader />
        <ReactTitle />
        <ReactContent />

    </div>,
    teste
);