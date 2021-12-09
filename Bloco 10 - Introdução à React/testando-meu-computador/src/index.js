import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import ReactTitle from './title';
import ReactHeader from './header';
import ReactContent from './Content';

const divHtml = document.getElementById('root');
ReactDOM.render(
    <div>
        <ReactHeader />
        <ReactTitle />
        <ReactContent />

    </div>,
    divHtml
);