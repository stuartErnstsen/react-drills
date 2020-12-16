import React, { Component } from 'react';

export default class NewTask extends Component {
    constructor() {
        super();

        this.state = {
            userInput: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(e) {
        this.setState({ userInput: e.target.value })
    }

    handleAdd() {
        this.props.add(this.state.userInput);
        this.setState({ userInput: '' })
    }
    render() {
        return (
            <div className="App">
                <input onChange={this.handleChange} placeholder="Type a new task!" />
                <button onClick={this.handleAdd}>Add new task</button>
            </div>
        )
    }
}