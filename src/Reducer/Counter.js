import React, { useReducer, useState } from "react";

export default function Counter() {
  //Tạo state mặc định (object)
  const initialState = {
    count: 0,
    msg: "",
  };

  //Tạo reducer (function)
  /*
  state => State cũ
  action => Hành động
  {
    type: 'ten hanh dong',
    payload: 'Giá trị muốn gửi lên'
  }
  */
  const countReducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + action.payload };

      case "decrement":
        return { ...state, count: state.count - action.payload };

      default:
        throw new Error(`Không tồn tại action ${action.type}`);
    }
  };

  //Gọi hook useReducer
  const [state, dispatch] = useReducer(countReducer, initialState);

  const handleIncrement = () => {
    dispatch({
      type: "increment",
      payload: 2,
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: "decrement",
      payload: 3,
    });
  };

  const { count } = state;

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
