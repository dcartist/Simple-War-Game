import React, {useState} from 'react'

export default function CardLimit(props) {
    const [limit, setlimit] = useState(0)
    function numberEntered(e){
        e.preventDefault()
        console.log(e.target.value)
        setlimit(e.target.value)
    }
    function selectNumber(e){
        e.preventDefault()
        props.setWinningNumber(limit)
    }

  
    return (
        <div className="default-background">
            <p>Please select the number of cards needed for the win.</p>
            <p>i.e., if the loser has only 1 card left, then choose 1</p>
            <p>Choose between 1 to 25</p>
            <form>
                <input type="number" min="1" max="25" onChange={numberEntered}></input>
                <button onClick={selectNumber}>Enter</button>
            </form>
        </div>
    )
}
