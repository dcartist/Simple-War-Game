// import './App.css';
import './Style.scss'
import React, { Component } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Instructions from "./Pages/Instructions"
import Deck from "./Components/Card/Deck"
export default class App extends Component {
  constructor(){
    super()
    this.state={
        deck:[],
        cardColor: "",
        score: 0,
        match: 0,
        gameplay: [],
        timeElapsed:"",
        player:""
    }
}

setDeck = (data) => {
  this.setState({ deck: data });
};

  render() {
    return (
      <div className="App">
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/help" exact component={Instructions} />
        <Route path="/about" exact component={About} />
        <Route path="/deck"><Deck deck={this.state.deck}></Deck></Route>
        </Switch>
        
      </div>
    )
  }
}
