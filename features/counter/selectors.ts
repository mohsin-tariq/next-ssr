import { CounterState } from './types'

export const getCountValue = (state: CounterState) => state.counter.value
