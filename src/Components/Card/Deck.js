import React from 'react';
import CardBack from "../Card/CardBack"
import { useHistory } from "react-router-dom";
import './Card.scss'
import { Link } from 'react-router-dom';
import NavButton from "../Navigation/NavButton"
export default function Deck(props) {
    
        let history = useHistory();
      
        function gotodeck() {
          history.push("/game");
        }
      
//* Fisher–Yates Shuffle https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
    let newArray = []
    var m = array.length,
        t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    newArray.push(array)
    return newArray;
    // return array;
}
//calling to shuffle the array

    function creation(deckstyle){
        let cards = []
        const cardRanks = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King"
        ];
        const cardSuits = ["hearts", "spades", "clubs", "diamonds"];
        class Card {
            constructor(suit, rank, score) {
                this.suit = suit;
                this.rank = rank;
                this.score = score;
            }
        }

        const cardScores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        for (let i = 0; i < cardSuits.length; i++) {
            for (let j = 0; j < cardRanks.length; j++) {
                const card = new Card(cardSuits[i], cardRanks[j], cardScores[j]);
                cards.push(card);
            }
        }

        shuffle(cards)
        let newDeck = cards
        let playerDeck = newDeck.splice(0, 26)
        let computerDeck = newDeck.splice(0, 26)    
        props.setSettings(deckstyle, playerDeck, computerDeck)
        gotodeck()
    }
    return (
        <div className="default-background red-background centered deck-board">
            <h1>Please select your deck</h1>
            <div className="deck-listing">
            <div>
            <Link onClick={()=>creation(1)}><CardBack image={1}></CardBack></Link>
            <button onClick={()=>creation(1)}> press here</button>
            </div>
            <div>
                
            <Link onClick={()=>creation(2)}><CardBack image={2}></CardBack></Link>
            <button onClick={()=>creation(2)}> press here</button>
            </div>
            <div>
            <Link onClick={()=>creation(3)}><CardBack image={3}></CardBack></Link>
            <button onClick={()=>creation(3)}> press here</button>
            </div>
            </div>
            <NavButton back={"/limit"} noNext={true}></NavButton>
        </div>
    )
}
