import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

const Sorteio = props => { 
    const { min, max} = props;
    return (
        <Card title="Sorteio de um Número" purple>
            <div className="Intervalo">
            <span>
                <strong>Resultado: </strong>
                <strong>{parseInt( Math.random() * (max - min)) + min}</strong>
            </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  }
}

export default connect(mapStateToProps) (Sorteio)