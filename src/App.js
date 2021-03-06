import './Style.scss'
import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import CardLimit from "./Pages/CardLimit"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Instructions from "./Pages/Instructions"
import Deck from "./Components/Card/Deck"
import Game from "./Pages/Game"
import PlayerName from "./Pages/PlayerName"
/* Check the first card
if cards don't match send, compare
and send them to moveDeck. If cards match,
move 0 - 5 into holding and check last card
if cards don't match compare and send to move deck
if same cards send through holding deck again.
 */

//* Have condition to make sure it can go to the end or selected number for ending
//TODO: make holdingCards shift the player/computer deck
//TODO: maker checking funtion
//TODO: add war condition to run holdingCards time 3
//TODO: make war check updated deck 
//TODO: write winning funtion
//TODO: write the limitation of the card to show the win
//TODO: show when war has been issued

//* If there is time:
//TODO: create different types of cards to be selected


export default class App extends Component {
  constructor(){
    super()
    this.state={
        endNumber: 20, //* The number you need to get to win
        deckStyle: 0, //* Selecting what style to use
        playerDeck: [], //* Player's deck
        computerDeck:[], //* Commputer's deck
        holdingDeck: [], //* Deck for holding cards
        counter : 0,
        check: true,
        time: '',
        score: 0, //* the actually score
        match: 0,
        finaltime: {}, //* upcoming features
        startstop: 0,
        timeElapsed:"", //* time it took to play the game
        player:"", //* player's name
        winnerOfRound: "",
        warCheck: false,
        war: 0 //* how many times war has been called
    }
}

changeWarState = (trueOrfalse) =>
{
this.setState(()=>({warCheck: trueOrfalse}))
}
 
movingWarCards=(winner, idx)=>{
 //* Creating new arrays from the state of Player and Computer
 let computerUpdateDeck = this.state.computerDeck
 let userUpdateDeck = this.state.playerDeck

 //* Taking the cards from the new arrays of Player and Computer
 let userTempDeck = userUpdateDeck.splice(0,idx)
 let computerTempDeck = computerUpdateDeck.splice(0,idx)

 //* Inserting new cards into an array and setting it to state
 let tempDeck = userTempDeck.concat(computerTempDeck)
 this.setState(()=>({ holdingDeck: tempDeck, computerDeck: computerUpdateDeck,  playerDeck: userUpdateDeck }));

 if (winner == "player"){
  tempDeck = this.state.playerDeck.concat(this.state.holdingDeck)
  this.setState(()=>({playerDeck:tempDeck, winnerOfRound: "player", holdingDeck:[]}))
} else {
  tempDeck = this.state.computerDeck.concat(this.state.holdingDeck)
  this.setState(()=>({computerDeck: tempDeck, winnerOfRound: "computer", holdingDeck:[]}))
 }

}


//* adding cards to the temporary positions
holdingCards=()=> {

  // this.setState(()=>({winnerOfRound: "tied"}))
  //* Checking the the player and computer to see if there is a winner via index. When it finds the index then splices based on it.
  this.setState({war: this.state.war + 1})
  let i = 3
    let finder = true
    while (finder == true){
      if (this.state.computerDeck[i].score === this.state.playerDeck[i].score){
        i = i + 1
      } else if (this.state.computerDeck[i].score > this.state.playerDeck[i].score){
        finder = false
        this.movingWarCards("computer", i)
        
      } else {
        finder = false
        this.movingWarCards("player", i)
      }
  }   
}
setWinningNumber = (number) => {
  this.setState({endNumber: number})
}
setName = (player) => {
  this.setState(()=>({player: player}))
}
setCards=(winner)=>{
  
 if(winner === "player"){
  let updatedDeck = this.state.playerDeck
  updatedDeck.push(this.state.computerDeck[0])
  let poppedDeck = this.state.playerDeck[0]
  updatedDeck.shift()
  updatedDeck.push(poppedDeck)
  let updatelooserdeck = this.state.computerDeck
  updatelooserdeck.shift()
  this.setState(()=>({playerDeck: updatedDeck, computerDeck: updatelooserdeck, winnerOfRound: "player" }))
} else {
  let updatedDeck = this.state.computerDeck
  updatedDeck.push(this.state.playerDeck[0])
  let poppedDeck = this.state.computerDeck[0]
  updatedDeck.shift()
  updatedDeck.push(poppedDeck)
  let updatelooserdeck = this.state.playerDeck
  updatelooserdeck.shift()
  this.setState(()=>({playerDeck: updatelooserdeck, computerDeck: updatedDeck, winnerOfRound: "computer" }))
} 

}

setSettings = (style, playerDeck, computerDeck)=>{
  this.setState(() =>({ deckStyle: style, playerDeck:playerDeck, computerDeck:computerDeck}));
}
setDeck = (data) => {
  this.setState({ deck: data });
};
setStyle = (styleType) => {
  this.setState({deckStyle: styleType})
}

  render() {
    console.warn = console.error = () => {};
    console.log("Were you looking for something?")
    console.log("Check out my portfolio on https://www.dcartist.studio")
// Look ma, no error!
    return (
      <div className="App">
        <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
        <Route path="/" exact component={Home} />
        <Route path="/limit" exact><CardLimit setWinningNumber={this.setWinningNumber} endNumber={this.state.endNumber}></CardLimit></Route>
        <Route path="/name" exact><PlayerName setName={this.setName} player={this.state.player}></PlayerName></Route>
        <Route path="/help" exact component={Instructions} />
        <Route path="/instructions" exact component={Instructions}  setWinningNumber={this.setWinningNumber} endNumber={this.state.endNumber}/>
        <Route path="/about" exact component={About} />
        <Route path="/deck"><Deck deck={this.state.deck} setDeck={this.setDeck} setSettings={this.setSettings} setStyle={this.setStyle}></Deck></Route>
        <Route path="/game"><Game {...this.state} changeWarState={this.changeWarState} setCards={this.setCards} holdingCards={this.holdingCards}></Game></Route>
        </AnimatedSwitch>
        
      </div>
    )
  }
}
