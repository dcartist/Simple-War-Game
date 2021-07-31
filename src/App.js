// import './App.css';
import './Style.scss'
import React, { Component } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Instructions from "./Pages/Instructions"
import Deck from "./Components/Card/Deck"
import Game from "./Pages/Game"
export default class App extends Component {
  constructor(){
    super()
    this.state={
        deckStyle: 0,
        playerDeck: [],
        computerDeck:[],
        deck:[],
        cardColor: "",
        score: 0,
        match: 0,
        gameplay: [],
        timeElapsed:"",
        player:""
    }
}

setSettings = (data, style, playerDeck, compuerDeck)=>{
  this.setState(() =>({ deck: data, deckStyle: style, playerDeck:playerDeck, compuerDeck:compuerDeck}));
}
setDeck = (data) => {
  this.setState({ deck: data });
};
setStyle = (styleType) => {
  this.setState({deckStyle: styleType})
  console.log(this.state.deckStyle)
}

  render() {
    return (
      <div className="App">
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/help" exact component={Instructions} />
        <Route path="/about" exact component={About} />
        <Route path="/deck"><Deck deck={this.state.deck} setDeck={this.setDeck} setSettings={this.setSettings} setStyle={this.setStyle}></Deck></Route>
        <Route path="/game"><Game state={this.state}></Game></Route>
        </Switch>
        this is {this.state.deckStyle}
      </div>
    )
  }
}
