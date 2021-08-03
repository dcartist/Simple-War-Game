import React from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom';

export default function Home() {
    return (
        <div className="intro">
            <h1>Monster War</h1>
            <Link to="/instructions"><button>Enter</button></Link>
            
        </div>
    )
}
