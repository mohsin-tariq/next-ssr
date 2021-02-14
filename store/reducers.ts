import { combineReducers } from 'redux'
import { CounterReducer } from '../features/counter'

// COMBINED REDUCERS
const reducers = {
  counter: CounterReducer,
}

export default combineReducers(reducers)
