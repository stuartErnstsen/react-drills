import React, { Component } from 'react';

class NewTask extends Component {
    constructor() {
        super();
        this.state = {
            taskInput: ''
        }
    }

    handleChange = (e) => {
        this.setState({ taskInput: e.target.value });
    }

    addNewReset = () => {
        this.props.handleAdd(this.state.taskInput)
        this.setState({ taskInput: '' });
    }

    render() {
        return (
            <div>
                <input value={this.state.taskInput} onChange={this.handleChange} />
                <button onClick={this.addNewReset}>ADD NEW TASK</button>
            </div>

        )
    }
}

export default NewTask;