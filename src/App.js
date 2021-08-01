// import './App.css';
import './Style.scss'
import React, { Component } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Instructions from "./Pages/Instructions"
import Deck from "./Components/Card/Deck"
import Game from "./Pages/Game"


/* Check the first card
if cards don't match send, compare
and send them to moveDeck. If cards match,
move 0 - 5 into holding and check last card
if cards don't match compare and send to move deck
if same cards send through holding deck again.
 */

export default class App extends Component {
  constructor(){
    super()
    this.state={
        deckStyle: 0,
        playerDeck: [],
        computerDeck:[],
        holdingDeck: [],
        cardColor: "",
        score: 0,
        match: 0,
        gameplay: [],
        timeElapsed:"",
        player:""
    }
}
holdingCards=()=> {
  let tempDeck = [this.state.playerDeck[0],this.state.computerDeck[0]]
  console.log(tempDeck)
  this.setState(()=>({holdingDeck: tempDeck}))
  
}
sendCards = (name) => {

}
setCards=(winner, looser)=>{
  this.holdingCards()
 if(winner == "player"){
  let updatedDeck = this.state.playerDeck
  updatedDeck.push(this.state.computerDeck[0])
  let poppedDeck = this.state.playerDeck[0]
  updatedDeck.shift()
  updatedDeck.push(poppedDeck)
  let updatelooserdeck = this.state.computerDeck
  updatelooserdeck.shift()
  this.setState(()=>({playerDeck: updatedDeck, computerDeck: updatelooserdeck}))
} else if (winner == "computer"){
  let updatedDeck = this.state.computerDeck
  updatedDeck.push(this.state.playerDeck[0])
  let poppedDeck = this.state.computerDeck[0]
  updatedDeck.shift()
  updatedDeck.push(poppedDeck)
  let updatelooserdeck = this.state.playerDeck
  updatelooserdeck.shift()
  this.setState(()=>({playerDeck: updatelooserdeck, computerDeck: updatedDeck}))
} else {

}
console.log(this.state.playerDeck)
console.log(this.state.computerDeck)
}
setHoldingCards={

}

setSettings = (data, style, playerDeck, computerDeck)=>{
  this.setState(() =>({ deck: data, deckStyle: style, playerDeck:playerDeck, computerDeck:computerDeck}));
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
        <Route path="/game"><Game {...this.state} setCards={this.setCards}></Game></Route>
        </Switch>
        this is {this.state.deckStyle}
      </div>
    )
  }
}
