
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      input: ''
    }
  }
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }
  render() {
    return (
      <div className="App" >
        <input onChange={this.handleChange} />
        <p>{this.state.text}</p>
      </div>
    );
  }

}

export default App;
