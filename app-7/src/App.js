import NewTask from './Components/NewTask'
import List from './Components/List'
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      taskList: []
    }

    this.addTask = this.addTask.bind(this)
  }
  addTask(task) {
    this.setState({ taskList: [...this.state.taskList, task] })
  }
  render() {
    return (
      <div className="App" >
        <h1>GET STUFF DONE:</h1>
        <NewTask add={this.addTask} />
        <List tasks={this.state.taskList} />
      </div>
    );
  }

}

export default App;
