import { FC, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionTypes, selectors } from '../../features/counter'

const Counter: FC = () => {
  const counter = useSelector(selectors.getCountValue)
  const dispatch = useDispatch()
  const [countVal, setCountVal] = useState('')
  const handleSubmit = () => {
    dispatch({
      type: actionTypes.DIRECT_INCREMENT,
      payload: Number(countVal),
    })
    setCountVal('')
  }
  return (
    <div>
      <h5>Counters: {counter}</h5>
      <div className="d-flex">
        <button
          type="button"
          onClick={() => dispatch({ type: actionTypes.DECREMENT_COUNTER })}
        >
          decrement
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: actionTypes.INCREMENT_COUNTER })}
        >
          increment
        </button>
      </div>
      <div>
        <input
          type="number"
          value={countVal}
          onChange={(e) => setCountVal(e.target.value)}
        />
        <button type="button" onClick={() => handleSubmit()}>
          Increase Count By
        </button>
      </div>
    </div>
  )
}

export default Counter
