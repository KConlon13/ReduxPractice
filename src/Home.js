import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, multiplyByTen, revertToZero, logIn } from './actions';
import Container from "./Container";

function Home() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h1>Kyle's Redux & Router & Counter App Project?</h1>
      <h1>{counter}</h1>

      <button class="button" onClick={()=> dispatch(decrement())}>-</button>
      <button class="button" onClick={()=> dispatch(increment())}>+</button>

      <br></br>

      { counter === 0 ? 
      null : 
      <button class="button" onClick={()=> dispatch(multiplyByTen())}>x 10</button>}
      { counter === 0 ? 
      null : 
      <button id="zeroButton" onClick={()=> dispatch(revertToZero())}>revert</button>}

      <br></br>

      {isLogged ? <button class="bigButton" onClick={()=> dispatch(logIn())}>Make It Go Away!</button> :
    <button class="bigButton" onClick={()=> dispatch(logIn())}>Hidden Spooky Information</button>}
    <br></br>
      <div>
        {isLogged ? <h1>Art is  a Lie, NOTHING IS REAL</h1> : null}
      </div>

    <Container />
    </div>
  );
}

export default Home;