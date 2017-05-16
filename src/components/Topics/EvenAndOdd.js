import React, { Component } from 'react';

class EvenAndOdd extends Component {
  constructor(props) {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
    this.solveProblem = this.solveProblem.bind(this);
  }

  solveProblem() {
    const userInput = this.state.userInput;
    var arr = userInput.split(',');
    var evens = [];
    var odds = [];

    for ( var i = 0; i < arr.length; i++ ) {
      if ( arr[i] % 2 === 0 ) {
        evens.push( parseInt(arr[i], 10) );
      } else {
        odds.push( parseInt(arr[i], 10) );
      }
    }

    this.setState({ evenArray: evens, oddArray: odds });
  }

  render() {
    const evens = this.state.evenArray.map(v => ' ' + v + ',');
    const odds = this.state.oddArray.map(v => ' ' + v + ',');
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input onChange={(e) => this.setState({ userInput: e.target.value})} value={this.state.userInput} className="inputLine" />
        <button onClick={this.solveProblem} className="confirmationButton">Split</button>
        <span className="resultsBox">Evens: [{evens} ...]</span>
        <span className="resultsBox">Odds: [{odds} ...]</span>
      </div>
    )
  }
}

export default EvenAndOdd;
