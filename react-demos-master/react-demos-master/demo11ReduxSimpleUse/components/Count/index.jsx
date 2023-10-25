import React, {useState, useRef} from 'react';
import store from "../../redux/store"

function Count(props) {
  const refSelectNumber = useRef()
  const increment = () => {
    const {value} = refSelectNumber.current
    store.dispatch({type: "increment", data: Number(value)})
  }
  const decrement = () => {
    const {value} = refSelectNumber.current
    store.dispatch({type: "decrement", data: Number(value)})

  }
  const incrementIfOdd = () => {
    const {value} = refSelectNumber.current
    const count = store.getState()
    count % 2 !== 0 && store.dispatch({type: "increment", data: Number(value)})
  }
  const incrementAsync = () => {
    const {value} = refSelectNumber.current
    setTimeout(() => {
      store.dispatch({type: "increment", data: Number(value)})
    }, 500)
  }
  return (
    <div>
      <h1>当前求和为:{store.getState()}</h1>
      <select name="" id="" ref={refSelectNumber}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>&nbsp;&nbsp;
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementIfOdd}>当前求和为奇数时+</button>
      <button onClick={incrementAsync}>异步+</button>
    </div>
  );
}

export default Count;