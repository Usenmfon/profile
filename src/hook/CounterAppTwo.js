import React, { useReducer } from "react";

const initialState = {
  firstIncrement: 0,
  secondIncrement: 5,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementone":
      return { ...state, firstIncrement: state.firstIncrement + action.value };
    case "decrementone":
      return { ...state, firstIncrement: state.firstIncrement - action.value };
    case "incrementfive":
      return { ...state, secondIncrement: state.secondIncrement + action.value };
    case "decrementfive":
      return { ...state, secondIncrement: state.secondIncrement - action.value };
    case "reset":
      return initialState
    default:
        return state
  }
};

function CounterAppTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Increment By One {count.firstIncrement}</div>
      <div>Increment By Five {count.secondIncrement}</div>
      <button onClick={() => dispatch({type: 'incrementone', value: 1})}>IncrementOne</button>
      <button onClick={() => dispatch({type: 'decrementone', value: 1})}>DecrementOne</button>
      <button onClick={() => dispatch({type: 'incrementfive', value: 5})}>IncrementFive</button>
      <button onClick={() => dispatch({type: 'decrementfive', value: 5})}>DecrementFive</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  );
}

export default CounterAppTwo;
