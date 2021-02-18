import {
  SUCCESSFUL_LAUNCH,
  SUCCESSFUL_LAND,
  LAUNCH_YEAR,
} from './actionTypes'
import { FilterActionTypes } from './types'

const initialState = {
  land_success: '',
  launch_success: '',
  launch_year: '',
}

interface StateProp {
  land_success: string
  launch_success: string
  launch_year: string
}

export default (state = initialState, action: FilterActionTypes): StateProp => {
  switch (action.type) {
    case SUCCESSFUL_LAUNCH:
      return { ...state, launch_success: action.payload }
    case SUCCESSFUL_LAND:
      return { ...state, land_success: action.payload }
    case LAUNCH_YEAR:
      return { ...state, launch_year: action.payload }
    default:
      return state
  }
}
