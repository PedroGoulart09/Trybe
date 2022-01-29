import { createStore, combineReducers } from 'redux';
import { numberReducers } from './reducers/reducersNumbers';

const reducers = combineReducers({
    numeros: numberReducers
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig
