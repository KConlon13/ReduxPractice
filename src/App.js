import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  return (
    <div className="App">
      <h1>Kyle's Redux Counter App</h1>
      <h1>{counter}</h1>
      
      <button class="button">+</button>
      <button class="button">-</button>

      <div>
        {isLogged ? <h3>Hidden Spooky Information 👻</h3> : null}
      </div>
    </div>
  );
}

export default App;
