import App2Comp from './App2Comp'
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <App2Comp />
      </header>
    </div>
  );
}

export default App;
