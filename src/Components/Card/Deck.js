import React, { useState } from 'react';

export default function Deck(props) {

    console.log(props.deck)
    function creation(){
        let cardDeckLength = 52
        class Card {
            constructor(suit, rank, score) {
                this.suit = suit;
                this.rank = rank;
                this.score = score;
            }
        }

    }
    return (
        <div>
            <button onClick={creation}> press here</button>
        </div>
    )
}
