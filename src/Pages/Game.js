import React, { Component } from 'react'

export default class Game extends Component {
  
    war = () => {
        console.log("this is war")
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.war}>War</button>
                
            </div>
        )
    }
}
