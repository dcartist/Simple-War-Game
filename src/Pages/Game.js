import React, { Component } from 'react'

export default class Game extends Component {
//   constructor(props){
//       super(props)
//       this.state = {
//           holder: []
//       }
//   }

    checker = () => {
        if(this.props.playerDeck[0].score > this.props.computerDeck[0].score){
            console.log("player wins")
            this.props.setCards("player")
        } 
        if(this.props.playerDeck[0].score < this.props.computerDeck[0].score){
            console.log("computer wins")
            this.props.setCards("computer")
        } else {
            // this.tie()c
            console.log("This is a tie");
            this.props.holdingCards()
        }
    }
    war = () => {
       this.checker()
    }
    render() {

        return (
            <div>
                <button onClick={this.war}>War</button>
                {this.props.playerDeck[0].suit}
                
            </div>
        )
    }
}
