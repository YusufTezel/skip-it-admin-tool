import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount} from './counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return(
        <div>
            {count}
            <button onClick={() => dispatch(incrementByAmount(10))}>click</button>
        </div>
    )
}
