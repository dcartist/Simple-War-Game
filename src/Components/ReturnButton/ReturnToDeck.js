import React from 'react'

import { useHistory } from "react-router-dom";
export default function ReturnToDeck() {

    let history = useHistory();
      
        function gotodeck() {
          history.push("/deck");
        }
    return (
        <button onClick={gotodeck}>Return To deck</button>
    )
}
