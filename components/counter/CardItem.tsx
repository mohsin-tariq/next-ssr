// import { useSelector, useDispatch } from 'react-redux'
export interface CardItemProps {
  flight_number: number
  mission_name: string
  mission_id: string[]
  launch_year: string
  launch_success: boolean
}

const CardItem = (props: CardItemProps): JSX.Element => {
  return (
      <li key={props.flight_number}>
        <p>Flight Number: {props.flight_number}</p>
        <p>Mission Name: {props.mission_name}</p>
        <p>mission Id: {props.mission_id}</p>
        <p>Launch Year: {props.launch_year}</p>
        <p>props.launch_success: {props.launch_success.toString()}</p>
      </li>
  )
}

export default CardItem
