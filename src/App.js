import React from 'react';
import './App.css';
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import Home from "./Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/shop" component={Shop}/>
      </div>
    </Router>
  );
}

export default App;
