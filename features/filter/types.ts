import {
  SUCCESSFUL_LAUNCH,
  SUCCESSFUL_LAND,
  LAUNCH_YEAR,
} from './actionTypes'

interface SuccessfullLauchAction {
  type: typeof SUCCESSFUL_LAUNCH
  payload: string
}
interface SuccessfullLandAction {
  type: typeof SUCCESSFUL_LAND
  payload: string
}

interface LaunchYearAction {
  type: typeof LAUNCH_YEAR
  payload: string
}

export type FilterActionTypes =
  | SuccessfullLauchAction
  | SuccessfullLandAction
  | LaunchYearAction

export interface FilterState {
  filter: {
    land_success: string
    launch_success: string
    launch_year: string
  }
}
