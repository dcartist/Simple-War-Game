import React, { Component } from 'react'

export default class Game extends Component {
  constructor(props){
      super(props)
      this.state = {
          holder: []
      }
  }
    tie = () => {
        if (this.props.playerDeck[5].score < this.props.computerDeck[5].score){

        } else {
            
        }
    }

    checker = () => {
        if(this.props.playerDeck[0].score > this.props.computerDeck[0].score){
            console.log("player wins")
            this.props.setCards("player", "computer")
        } 
        if(this.props.playerDeck[0].score < this.props.computerDeck[0].score){
            console.log("computer wins")
            this.props.setCards("computer", "player")
        } else {
            this.tie()
        }
    }
    war = () => {
       this.checker()
    }
    render() {
        console.log(this.props)
        console.log(this.props.deckStyle)
        return (
            <div>
                <button onClick={this.war}>War</button>
                {this.props.playerDeck[0].suit}
                
            </div>
        )
    }
}
