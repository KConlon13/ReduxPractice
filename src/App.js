import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, multiplyByTen } from './actions'

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Kyle's Redux Counter App</h1>
      <h1>{counter}</h1>

      <button class="button" onClick={()=> dispatch(decrement())}>-</button>
      <button class="button" onClick={()=> dispatch(increment())}>+</button>
      <button class="button" onClick={()=> dispatch(multiplyByTen())}>x10</button>

      <div>
        {isLogged ? <h3>Hidden Spooky Information 👻</h3> : null}
      </div>
    </div>
  );
}

export default App;
