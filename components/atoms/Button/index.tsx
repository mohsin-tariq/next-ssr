import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux'
import { selectors } from '../../../features/filter'
import {
  LAUNCH_YEAR,
  SUCCESSFUL_LAND,
  SUCCESSFUL_LAUNCH
} from '../../../features/filter/actionTypes'
import getQueryParam from '../../../features/filter/util'
export interface ButtonProps {
  text: string,
  queryParam: string,
  className?: string,
}

const Button = ({ className, queryParam, text }: ButtonProps): JSX.Element => {
  const dispatch = useDispatch()
  const launchYear = (queryParam === LAUNCH_YEAR ? text : useSelector(selectors.getLaunchYear))
  const successfulLaunch =  (queryParam === SUCCESSFUL_LAUNCH ? text : useSelector(selectors.getSuccessfulLaunch))
  const successLand = (queryParam === SUCCESSFUL_LAND ? text : useSelector(selectors.getSuccessfulLand))
  const qParam = getQueryParam(successLand, successfulLaunch, launchYear)
  return (
    <Link href={{ pathname: '/filter', query: qParam }}><a className={className} onClick={()=> dispatch({type:queryParam, payload: text})}>{text}</a></Link>
  )
}

Button.defaultProps = {
  className: 'button'
}
export default Button;