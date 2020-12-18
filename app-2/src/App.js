import ListDisplay from './Components/ListDisplay'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      array: ['1', '2', '3', '4', '5', '6']
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ListDisplay array={this.state.array} />
        </header>
      </div>
    );
  }

}

export default App;
