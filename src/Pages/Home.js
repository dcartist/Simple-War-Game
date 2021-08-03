import React from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom';

export default function Home() {
    return (
        <div className="intro">
            <h1>A Simple War Game</h1>
            <p className="quote">“War does not determine who is right – only who is left.”</p>
            <p className="quote-name">~Bertrand Russell</p>
            <Link to="/instructions"><button>Enter</button></Link>
            
        </div>
    )
}
