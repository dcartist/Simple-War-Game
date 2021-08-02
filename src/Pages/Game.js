import React, { Component } from 'react'
import Card from "../Components/Card/Card"
import ReturntoDeck from "../Components/ReturnButton/ReturnToDeck"
export default class Game extends Component {
//   constructor(props){
//       super(props)
//       this.state = {
//           holder: []
//       }
//   }



    checker = () => {
        // if(this.props.playerDeck.length === this.props.endNumber || this.props.endNumber == this.props.computerDeck.length){

        // }
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
    
        if (this.props.playerDeck.length === 0){
        return(
            <div>
                You haven't seleted cards, please return to select your cards
                <ReturntoDeck></ReturntoDeck>
            </div>
        )
        } else if (this.props.playerDeck.length === this.props.endNumber || this.props.endNumber == this.props.computerDeck.length) {
        return (
            <div>
                There was a winner
            </div>
        )
        } else {
            return (
                <div >
                    <button onClick={this.war}>War</button>
                    <div className="game-board">
                    <div>
                    <h3>Player's card</h3>
                    <Card rank={this.props.playerDeck[0].rank} suit={this.props.playerDeck[0].suit}/>
                    </div>
                  <div>
                    <h3>Computer's card</h3>
                  <Card rank={this.props.computerDeck[0].rank} suit={this.props.computerDeck[0].suit}/>
                  </div>
                    </div>
                    
                    
                </div>
            )
        }
        
    }
}
