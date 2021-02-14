import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  DIRECT_INCREMENT,
} from './actionTypes'

interface IncrementCounterAction {
  type: typeof INCREMENT_COUNTER
}
interface DecrementCounterAction {
  type: typeof DECREMENT_COUNTER
}

interface DirectIncrement {
  type: typeof DIRECT_INCREMENT
  payload: number
}

export type CounterActionTypes =
  | IncrementCounterAction
  | DecrementCounterAction
  | DirectIncrement

export interface CounterState {
  counter: {
    value: number
  }
}
