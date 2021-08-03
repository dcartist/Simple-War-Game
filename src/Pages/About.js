import React from 'react'
import NavButton from "../Components/Navigation/NavButton"

export default function About() {
    return (
        <div className="purple-background centered default-background about">
           
           <p><span>Created by: </span>Paula Bannerman</p>
           
           <p><span>When: </span>built during the Mintbean hackathon</p>
           
           <p><span>Duration of Creation: </span>1 week</p>
           <p><span>Portfolio: </span> <a href="https://www.dcartist.studio" target="_blank" rel="noreferrer" >www.dcartist.studio</a></p>
           <p><span>LinkedIn: </span> <a href="https://www.linkedin.com/in/dcartist" rel="noreferrer" target="_blank">www.linkedin.com/in/dcartist</a></p>
           <p><span>Github: </span> <a href="https://github.com/dcartist" rel="noreferrer" target="_blank">www.github.com/dcartist</a></p>
           <p><span>Github Repo: </span> <a href="https://github.com/dcartist/Simple-War-Game" rel="noreferrer" target="_blank">www.github.com/dcartist/Simple-War-Game</a></p>
           <p><span>Technologies Used:</span></p>
           <ul>
               <li>ReactJS Framework (hooks and classes)</li>
               <li>Javascript</li>
               <li>React Router Transition</li>
           </ul>
           <p><span>Reasoning: </span>As a boot camp graduate from General Assembly DC Chapter (Sep. 2019) and a mentor to other boot camp students, I wanted to support them during this hackathon by creating my game. Also, I enjoy building apps. </p>
           
           <p><span>Future Plan: </span>I plan on creating an API in express js that stores the tracked time of the game and the player's name. Also, have the players be able to select a profile picture. </p>


            <NavButton back={"/"} noNext={true}></NavButton>
        </div>
    )
}
