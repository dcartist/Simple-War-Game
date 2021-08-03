import React from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom';
export default function Instructions(props) {
    return (
        <div className="default-background">
            <h1>Instructions</h1>
            <p>The object is to acquire all the cards, which you can do in different ways. To play War, you need the following:</p>
            <ul>
                <li>Two players</li>
                <li>A standard deck of 52 cards</li>
            </ul>
            <p>Each player gets 26 cards.</p>
            <p>For each round, one card is selected from each player. Whoever has the higher ranking card wins the round. The winner takes the loser's card. If both players have the same rank, War is activated</p>

            <p>When War is activated, three cards from each player are placed into stasis, and then the 4th card is pulled to see who has the higher rank. The winner takes all the cards that both players played in that round.</p>
            <p>To Win: You must reach the level of cards needed.</p>
            <p></p>
            <p><Link to="/limit"><button>Continue</button></Link></p>
            <p><Link to="/"><button>Back</button></Link></p>
        </div>
    )
}
