import React from 'react';
import './App.css';
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import Home from "./Home"

function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Shop/>
    </div>
  );
}

export default App;
