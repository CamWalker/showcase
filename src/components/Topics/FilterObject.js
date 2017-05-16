import React, { Component } from 'react';

class FilterObject extends Component {
  constructor(props) {
    super();
    this.state = {
      unFilteredArray: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ],
      userInput: '',
      filteredArray: []
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput() {
    var employees = this.state.unFilteredArray;
    var filteredEmployees = [];

    for ( var i = 0; i < employees.length; i++ ) {
      if ( employees[i].hasOwnProperty(this.state.userInput) ) {
        filteredEmployees.push(employees[i]);
      }
    }

    this.setState({ filteredArray: filteredEmployees });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
        <input
          onChange={(e) => this.setState({ userInput: e.target.value})}
          value={this.state.userInput}
          className="inputLine"
        />
        <button
          onClick={this.handleInput}
          className="confirmationButton"
        >Filter</button>
      <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterObject;
