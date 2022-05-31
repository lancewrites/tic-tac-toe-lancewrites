import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null]
    }
  }

  render() {
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className="game-board">
          {/* Iterate through the squares array and return the sqaure component for each value in that array */}
          {this.state.squares.map((value, index) => {
            return (
              <Square
              value={value}
              key={index}
              index={index}
              />
            )
          })}
        </div>
        
      </>
    )
  }
}
export default App
