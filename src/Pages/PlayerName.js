import React, {useState} from 'react'

export default function PlayerName(props) {
    const [playerName, setplayerName] = useState("player")
    function nameEntered(e){
        e.preventDefault()
        setplayerName(e.target.value)
    }
    function selectName(e){
        e.preventDefault()
        props.setName(playerName)
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
