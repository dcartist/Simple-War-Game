import React from 'react'
import './Card.scss'

export default function Card(props) {
    return (
        <div className="card-front">
            <div className="card-inside">
                <div className="card-circle">
                <h1>{props.rank}</h1>
                </div>
            <h2>{props.suit}</h2>
            </div>
        </div>
    )
}
