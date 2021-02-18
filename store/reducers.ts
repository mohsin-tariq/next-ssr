import { combineReducers } from 'redux'
import { filterReducer } from '../features/filter'

// COMBINED REDUCERS
const reducers = {
  filter: filterReducer,
}

export default combineReducers(reducers)
