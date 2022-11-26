import React, {useReducer, useState} from 'react'

export default function Counter() {

    //Tạo state mặc định (obj)
    const initialState = {
        count: 0,
        msg: ''
    }

    // Tạo reducer (function)
    const countReducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { ...state, count: state.count + action.payload}
            case 'decrement':
                return { ...state, count: state.count - action.payload}
            default:
                return state;
        }
        
    }

    // gọi hook useReduce
    const [state, dispath] = useReducer(countReducer, initialState)

    const handleIncrement = () => {
        dispath({
            type: 'increment',
            payload: 5
        })
    }
    const handleDecrement = () => {
        dispath({
            type: 'decrement',
            payload: 4
        })
    }

    const {count} = state;
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
    </div>
  )
}
