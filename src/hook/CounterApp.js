import React, { useReducer } from "react";
import Styles from './CounterApp.module.css'

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterApp() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {count}
      <button  className={Styles.btn} onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default CounterApp;
