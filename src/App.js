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

//* Have condition to make sure it can go to the end or selected number for ending
//TODO: make holdingCards shift the player/computer deck
//TODO: maker checking funtion
//TODO: add war condition to run holdingCards time 3
//TODO: make war check updated deck 
//TODO: write winning funtion

export default class App extends Component {
  constructor(){
    super()
    this.state={
        endNumber: 0,
        deckStyle: 0,
        playerDeck: [],
        computerDeck:[],
        holdingDeck: [],
        cardColor: "",
        score: 0,
        match: 0,
        gameplay: [],
        timeElapsed:"",
        player:"",
        winnerOfRound: "",
        war: 0
    }
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
 this.setState({ holdingDeck: tempDeck, computerDeck: computerUpdateDeck,  playerDeck: userUpdateDeck });

 if (winner == "player"){
  tempDeck = this.state.playerDeck.concat(this.state.holdingDeck)
  this.setState(()=>({playerDeck:tempDeck, winnerOfRound: "player", holdingDeck:[]}))
} else {
  tempDeck = this.state.computerDeck.concat(this.state.holdingDeck)
  this.setState(()=>({computerDeck: tempDeck, winnerOfRound: "computer", holdingDeck:[]}))
 }
 // console.log("player Deck state");
 // console.log(this.state.playerDeck)
 // console.log("holding:")
 // console.log(this.state.holdingDeck)

}
//* adding cards to the temporary positions
holdingCards=()=> {
  //* Checking the the player and computer to see if there is a winner via index. When it finds the index then splices based on it.
  this.setState({war: this.state.war + 1})
  let i = 1
    console.log (`${this.state.computerDeck[0].score} vs.  ${this.state.playerDeck[0].score}`)
    let finder = true
    while (finder){
      if (this.state.computerDeck[i].score == this.state.playerDeck[i].score){
        i++
        console.log("still tied")
      } else if (this.state.computerDeck[i].score > this.state.playerDeck[i].score){
        finder = false
        this.movingWarCards("computer", i)
        console.log("Computer won War")
        
      } else {
        finder = false
        console.log("Player won War")
        this.movingWarCards("player", i)
      }

  } 

  
}

setCards=(winner)=>{
  
 if(winner == "player"){
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
    return (
      <div className="App">
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/help" exact component={Instructions} />
        <Route path="/about" exact component={About} />
        <Route path="/deck"><Deck deck={this.state.deck} setDeck={this.setDeck} setSettings={this.setSettings} setStyle={this.setStyle}></Deck></Route>
        <Route path="/game"><Game {...this.state} setCards={this.setCards} holdingCards={this.holdingCards}></Game></Route>
        </Switch>
        <p><Link to="/deck">To Deck</Link></p>
        <p>
          player deck: {this.state.playerDeck.length}    
        </p>
        
        <hr></hr>
        <p>holding deck length:{this.state.holdingDeck.length} </p>
        <br></br>
        <p>
          computer deck:
          {this.state.computerDeck.length}
        </p>
      <p>Winner: {this.state.winnerOfRound}</p>
      <p>War: {this.state.war}</p>

      </div>
    )
  }
}
