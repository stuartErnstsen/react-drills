import Todo from './Components/Todo'
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoArr: [],
      todoInput: ''
    }
  }

  handleChange = (e) => {
    this.setState({ todoInput: e.target.value })
  }
  addTask = () => {
    this.setState({
      todoArr: [...this.state.todoArr, this.state.todoInput],
      todoInput: ''
    })
  }
  removeTask = (index) => {
    this.setState({ todoArr: this.state.todoArr.filter((todo, i) => index !== i) })
  }

  render() {
    return (
      <div>
        <input value={this.state.todoInput} onChange={this.handleChange} placeholder="Please enter a new task" />
        <button onClick={this.addTask}>ADD TASK</button>
        <h2>List of things To Do:</h2>
        <ol>
          {this.state.todoArr.map((task, i) => <Todo key={i} task={task} index={i} removeTask={this.removeTask} />)}
        </ol>
      </div>

    )
  }

}

export default App;
