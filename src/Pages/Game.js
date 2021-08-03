import React, { Component } from 'react'
import Card from "../Components/Card/Card"

import { Route, Link, Switch, Redirect } from 'react-router-dom';
import ReturntoDeck from "../Components/ReturnButton/ReturnToDeck"
export default class Game extends Component {
    activateWar = () => {
        this.props.holdingCards()
        this.props.changeWarState(false)
    }
    checker = () => {
         if(this.props.playerDeck[0].score === this.props.computerDeck[0].score){

         this.setState(()=>({winnerOfRound: "tied"}))
          this.props.changeWarState(true)
        }
        else if(this.props.playerDeck[0].score > this.props.computerDeck[0].score){
            console.log("player wins")
            this.props.setCards("player")
            this.props.changeWarState(false)
        } 
        else if (this.props.playerDeck[0].score < this.props.computerDeck[0].score){
            console.log("computer wins")
            this.props.setCards("computer")
            this.props.changeWarState(false)
            
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
    
        if (this.props.playerDeck.length === 0 && this.props.warCheck === false){
        return(
            <div className="default-background blue-background centered instruction">
                <p>You haven't seleted cards, please return to select your cards</p>
                <ReturntoDeck></ReturntoDeck>
            </div>
        )
        } else if (this.props.warCheck === true){
            return(
                <div className="default-background black-background">
                   
                    <div className="game-board">
                    <div className="card-placement">
                    <h3>Player's card</h3>
                    <Card deckStyle={this.props.deckStyle + 3} rank={this.props.playerDeck[0].rank} suit={this.props.playerDeck[0].suit}/>
                    </div>
                  <div className="card-placement"> 
                    <button onClick={this.activateWar}>Enter the War</button>
                    
                    <p>TIED!</p>
                    <p>Player Cards: {this.props.playerDeck.length}</p>
                    <p>Computer's Cards: {this.props.computerDeck.length}</p>
                    </div>
                  <div className="card-placement">
                    <h3>Computer's card</h3>
                  <Card deckStyle={this.props.deckStyle + 3} rank={this.props.computerDeck[0].rank} suit={this.props.computerDeck[0].suit}/>
                  </div>
                    </div>  
                </div>
            )

        } else if (this.props.playerDeck.length == this.props.endNumber && this.props.warCheck === false) {
            return (
                <div className="default-background blue-background centered winner">
                    <h1>Player is winner of the War!</h1>
                    <Link to="/"><button>Click here to return to intro</button></Link>
                </div>
            )
        }
         else if (this.props.endNumber == this.props.computerDeck.length && this.props.warCheck === false) {
        return (
            <div className="default-background blue-background centered winner">
                <h1>The Computer is winner of the War!</h1>
                <Link to="/"><button>Click here to return to intro</button></Link>

            </div>
        )
        } else {
            return (
                <div className="default-background red-background">
                    <div className="game-board">
                    <div className="card-placement">
                    <h3>Player's card</h3>
                    <Card deckStyle={this.props.deckStyle} rank={this.props.playerDeck[0].rank} suit={this.props.playerDeck[0].suit}/>
                    </div>
                    <div className="card-placement">
                    <button onClick={this.war}>War</button>
                    <p>Winner of round:<br></br> {this.props.winnerOfRound}</p>
                    <p> Player Cards: {this.props.playerDeck.length}</p>
                    <p>Computer's Cards: {this.props.computerDeck.length}</p>
                    </div>
                  <div className="card-placement">
                    <h3>Computer's card</h3>
                  <Card deckStyle={this.props.deckStyle} rank={this.props.computerDeck[0].rank} suit={this.props.computerDeck[0].suit}/>
                  </div>
                    </div>  
                </div>
            )
        }
        
    }
}
