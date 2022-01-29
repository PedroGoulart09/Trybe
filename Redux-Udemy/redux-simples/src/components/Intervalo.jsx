import './Intervalo.css'
import React from 'react';
import Card from './Card';
import { connect } from 'react-redux'
import { NewNumberMin, NewNumberMax } from '../store/action/NewNumbers';

const Intervalo = props => {
    const { max, min } = props;
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} onChange={e => props.alterarMin(+e.target.value)}/>
                </span>
                <span>
                    <strong>Maxímo:</strong>
                    <input type="number" value={max}  onChange={e => props.alterarMax(+e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = (state) =>{
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
       alterarMin: (newNumber) => {
        const action  = NewNumberMin(newNumber)
        dispatch(action)
       },
       alterarMax: (newNumber) => {
        const action  = NewNumberMax(newNumber)
        dispatch(action)
       }
   }
}



export default connect(mapStateToProps, mapDispatchToProps) (Intervalo)