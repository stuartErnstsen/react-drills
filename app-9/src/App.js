import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router-dom';
import router from './router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/Signup">Signup</Link>
            <Link to="/Details">Details</Link>
          </ul>
        </nav>
        <br />

        {router}
      </div>
    );
  }
}


export default App;
