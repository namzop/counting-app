import React from 'react';
import { useState } from 'react';
import "./counter.css";

const Counter = () => {
  let [value, setValue] = useState(0)
  function increase() {
    setValue(value+1);
  }
  function decrease() {
    setValue(value-1);
  }
  function reset() {
    setValue(0);
  }
  return (
  <React.Fragment>
    <h1>{value}</h1>
    <button className="btn" onClick={decrease}> Decrease </button>
    <button className="btn" onClick={reset}>Reset</button>
    <button className="btn" onClick={increase}> Increase </button>
  </React.Fragment>
  )
}

export default Counter;
