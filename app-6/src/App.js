import Todo from './Todo'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList: [],
      userInput: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.addTask = this.addTask.bind(this)
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value })
  }

  addTask() {
    this.setState({
      taskList: [...this.state.taskList, this.state.userInput],
      userInput: ''
    })
  }

  render() {
    let displayList = this.state.taskList.map((e, i) => {
      return (
        <Todo key={i} task={e} />
      )
    })
    return (
      <div className="App">
        <input value={this.state.userInput} onChange={this.handleChange} placeholder="Please enter a new task:"></input>
        <button onClick={this.addTask}></button>
        {displayList}
      </div>
    );
  }

}

export default App;
