import React, { Component } from 'react';
import NewTask from './Components/NewTask'
import List from './Components/List'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskArr: [],
    }
  }

  handleAdd = (task) => {
    this.setState({
      taskArr: [...this.state.taskArr, task],

    })
  }

  handleDelete = (index) => {
    this.setState({ taskArr: this.state.taskArr.filter((e, i) => i !== index) })
  }

  render() {
    return (
      <section>
        <NewTask taskArr={this.state.taskArr} handleAdd={this.handleAdd} />
        <List taskArr={this.state.taskArr} handleDelete={this.handleDelete} />
      </section>
    )
  }
}

export default App;
