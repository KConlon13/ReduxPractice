import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, multiplyByTen, revertToZero } from './actions'

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  console.log(counter)
  return (
    <div className="App">
      <h1>Kyle's Redux Counter App</h1>
      <h1>{counter}</h1>

      <button class="button" onClick={()=> dispatch(decrement())}>-</button>
      <button class="button" onClick={()=> dispatch(increment())}>+</button>

      {/* { counter === 0 ? 
      <button class="disabledButton">x10</button> : 
      <button class="button" onClick={()=> dispatch(multiplyByTen())}>x10</button>}

      { counter === 0 ? 
      <button class="disabledButton">revert</button> : 
      <button id="zeroButton" onClick={()=> dispatch(revertToZero())}>revert</button>} */}

      <br></br>
      { counter === 0 ? 
      null : 
      <button class="button" onClick={()=> dispatch(multiplyByTen())}>x 10</button>}
      { counter === 0 ? 
      null : 
      <button id="zeroButton" onClick={()=> dispatch(revertToZero())}>revert</button>}

      <div>
        {isLogged ? <h3>Hidden Spooky Information 👻</h3> : null}
      </div>
    </div>
  );
}

export default App;
