import React from 'react';
import './App.css';
import Nav from "./Nav";
import About from "./About";
import Restaurants from "./Restaurants";
import Home from "./Home";
import ItemDetail from "./ItemDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/restaurants" exact component={Restaurants}/>
          <Route path="/restaurants/:id" component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
