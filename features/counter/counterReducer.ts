import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  DIRECT_INCREMENT,
} from './actionTypes'
import { CounterActionTypes } from './types'

const initialState = {
  value: 0,
}

export default (state = initialState, action: CounterActionTypes) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, value: state.value + 1 }
    case DECREMENT_COUNTER:
      return { ...state, value: state.value - 1 }
    case DIRECT_INCREMENT:
      return {
        ...state,
        value: state.value + Number(action.payload),
      }
    default:
      return state
  }
}
