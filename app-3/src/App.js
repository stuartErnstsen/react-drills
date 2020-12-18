import ListDisplay from './Components/ListDisplay';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      array: ['Banana', 'Titanic', 'Bears and beats', 'Thread of the brahman', 'Krishna', 'One with God', 'Master yourself and connection with others', 'item2', 'Things and stuff', 'Bottle Rockets', 'item8'],
    }
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ListDisplay value={this.state.filterInput} array={this.state.array} filterInput={this.state.filterInput} />
        </header>
      </div>
    );
  }
}

export default App;
