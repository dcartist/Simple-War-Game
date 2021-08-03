import React, {useState} from 'react'

export default function PlayerName(props) {
    const [playerName, setplayerName] = useState("player")
    function nameEntered(e){
        e.preventDefault()
        console.log(e.target.value)
        setplayerName(e.target.value)
    }
    function selectName(e){
        e.preventDefault()
        props.setName(playerName)
        console.log(props.player)
    }
    return (
        <div>
            <form>
                <input type="text" onChange={nameEntered}></input>
                <button onClick={selectName}>Enter</button>
            </form>
            {props.player}
        </div>
    )
}
