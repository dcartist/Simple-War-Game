import React, { useState } from 'react';

export default function Deck(props) {

    console.log(props.deck)
    function creation(){
        let cards = []
        const cardDeckLength = 52
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
        props.setDeck(cards)
        // console.log(props.deck[6].rank)
        // console.log(cards[0])
        

    }
    return (
        <div>
            <button onClick={creation}> press here</button>
        </div>
    )
}
