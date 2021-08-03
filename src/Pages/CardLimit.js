import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

export default function CardLimit(props) {
    let history = useHistory();
    const [limit, setlimit] = useState(props.endNumber)
    function numberEntered(e){
        e.preventDefault()
        console.log(e.target.value)
        setlimit(e.target.value)
    }
    function nextSection(){
        history.push("/deck");
    }
    function selectNumber(e){
        e.preventDefault()
        props.setWinningNumber(limit)
        nextSection()
    }

    

  
    return (
        <div className="default-background centered blue-background limit">
            <h1>Set card limit</h1>
            <p>Please select the number of cards to loose the the game</p>
            <p>i.e., if the loser has only 1 card left, then choose 1</p>
            <form>
                <p>The looser must have {limit} cards and a player must have {26 + (26 - limit)} to win</p>
                <input type="number" min="1" max="25" placeholder={limit} onChange={numberEntered}></input>
                <button onClick={selectNumber}>Enter</button>
                <p>Choose between 1 to 25</p>
            </form>
        </div>
    )
}
