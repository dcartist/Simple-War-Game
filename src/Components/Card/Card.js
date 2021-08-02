import React from 'react'
import './Card.scss'

export default function Card(props) {
    return (
       <div>
            <div className="card-front">
            <div className="card-inside" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/background.png'})` }}>
                <div className="card-circle">
                <h1>{props.rank}</h1>
                </div>
            <h2>{props.suit}</h2>
            </div>
        </div>
       </div>
    )
}
