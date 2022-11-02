import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      clicks: 0,

      
    }
  }

  restartPage = () => {
    return window.location.reload();

  }

  handleGamePlay = (index) => {
    const { squares, clicks } = this.state
    let clickCount = 0
    let  lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    //If clicks is odd then put an "X" in the square
      if(clicks%2 === 0 && squares[index]=== null){
      squares[index] = '\u274c'
      //It also updates this.state.clicks value 
      clickCount = this.state.clicks + 1
      this.setState({squares: squares})
      this.setState({clicks: clickCount})
      } 
    //If clicks is even then put an "O" in the square 
      else if(clicks%2 === 1 && squares[index] === null){
        squares[index] = '\u2b55'
        
         //It also updates this.state.clicks value 
        clickCount = this.state.clicks + 1
        this.setState({squares: squares})
        this.setState({clicks: clickCount})
      }
      for (let index = 0; index < lines.length; index++){
        const [a, b, c] = lines[index];  
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          alert `Winner`
        
        }
      }

      
         
  } 



  render() {
    console.log("clicks", this.state.clicks)
    console.log(this.state.squares)


    return(
      <>
        <h1>Tic-Tac-Toe</h1>
        <div>
          <button id="restart-button" onClick={this.restartPage}>Restart</button>
        </div>
        
          <div className="game-board" onClick={this.handleGamePlay}>
            {/* Iterate through the squares array and return the sqaure component for each value in that array */}
            {this.state.squares.map((value, index) => {
              return (
                <Square
                value={value}
                key={index}
                index={index}
                handleGamePlay={this.handleGamePlay}
                
                />
              )
            })}
          </div>
        
        
      </>
    )
  }
}
export default App
