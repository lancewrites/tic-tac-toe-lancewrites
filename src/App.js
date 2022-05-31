import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      clicks: 0
      // markerArray: [X, O, X, O, X, O, X, O, X, O]
      //gameActive : true,
      //currentPlayer: "X",
      
    }
  }

  clickCount  ()  {
    let click = this.state.clicks
    click += 1
    this.setState({clicks: click})
    
  }


  handleGame = (index) => {
    const { squares  } = this.state
    //

  }
  render() {
    console.log("clicks", this.state.clicks)
    // () => {
    //   let clicks = this.state.clicks;
    //   this.setState({
    //     clicks
    //   });
    // }
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className="game-board" onClick={this.clickCount} >
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
