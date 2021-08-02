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
        <div>
            <form>
                <input type="number" min="1" max="51" onChange={numberEntered}></input>
                {/* <button onClick={()=>props.setWinningNumber(limit)}>Enter</button> */}
                <button onClick={selectNumber}>Enter</button>
                {props.endNumber}
            </form>
        </div>
    )
}
