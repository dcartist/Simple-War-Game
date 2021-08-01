import React, { Component } from 'react'
import Card from "../Components/Card/Card"
export default class Game extends Component {
//   constructor(props){
//       super(props)
//       this.state = {
//           holder: []
//       }
//   }

    checker = () => {
        if(this.props.playerDeck[0].score === this.props.computerDeck[0].score){
            console.log(`${this.props.playerDeck[0].score} vs ${this.props.computerDeck[0].score}`);
            this.props.holdingCards()
            console.log("This is a tie");
        }
        else if(this.props.playerDeck[0].score > this.props.computerDeck[0].score){
            console.log("player wins")
            this.props.setCards("player")
        } 
        else if (this.props.playerDeck[0].score < this.props.computerDeck[0].score){
            console.log("computer wins")
            this.props.setCards("computer")
        } else {
            console.log(`${this.props.playerDeck[0].score} vs ${this.props.computerDeck[0].score}`);
            this.props.holdingCards()
            console.log("Ending in tie");
        }
    }
    war = () => {
       this.checker()
    }
    render() {

        return (
            <div >
                <button onClick={this.war}>War</button>
                <h3>player's card</h3>
                <div className="game-board">
                <div>
                <Card rank={this.props.playerDeck[0].rank} suit={this.props.playerDeck[0].suit}/>
                </div>
              <div>
              <Card rank={this.props.computerDeck[0].rank} suit={this.props.computerDeck[0].suit}/>
              </div>
                </div>
                
                
            </div>
        )
    }
}
