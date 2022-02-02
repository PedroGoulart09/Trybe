import { createStore, combineReducers } from 'redux'
import Reducers from './reducers'

const storeConfig = combineReducers({
    input: Reducers
})
    

const store = () => {

  return createStore(storeConfig)
}

export default store


