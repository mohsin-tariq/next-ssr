import { FilterState } from './types'

export const getSuccessfulLand = (state: FilterState): string => state.filter.land_success
export const getSuccessfulLaunch = (state: FilterState): string => state.filter.launch_success
export const getLaunchYear = (state: FilterState): string => state.filter.launch_year
