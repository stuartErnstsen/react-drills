import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      blastoise: '',
    }
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/blastoise')
      .then(response => {
        this.setState({ blastoise: response.data })
      });
  };
  render() {
    return (
      <div className="App" >
        {/* {console.log(this.state.blastoise)} */}
        <h1>Name: {this.state.blastoise.name}</h1>
        <h1>Weight: {this.state.blastoise.weight}</h1>
        <h1>Height: {this.state.blastoise.height}</h1>
      </div>
    );
  }
}

export default App;
