import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="intro">
            <h1>A Simple War Game</h1>
            <p className="quote">“War does not determine who is right – only who is left.”</p>
            <p className="quote-name">~Bertrand Russell</p>
            <div className="war-intro-navbuttons">
            <Link to="/about"><button>About</button></Link> | <Link to="/instructions"><button>Enter War</button></Link>
            </div>
            
        </div>
    )
}
