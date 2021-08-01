import React, { Component } from 'react'

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
            <div>
                <button onClick={this.war}>War</button>

                <h3>player's card</h3>
                {this.props.playerDeck[0].suit}
                {this.props.playerDeck[0].rank}
                <hr></hr>
                {this.props.playerDeck[0].score}
                <h3> Comp card</h3>
                {this.props.computerDeck[0].suit}
                {this.props.computerDeck[0].rank}
                <hr></hr>
                {this.props.computerDeck[0].score}
            </div>
        )
    }
}
