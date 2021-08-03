import React from 'react'
import './Card.scss'
export default function CardBack(props) {
    return (
            <div className="card-back" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/'+props.image+ '.png'})` }}>

            </div>
    )
}
